import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefressToken from "../utils/generatedRefreshToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

//register Controller
export async function registerUserController(req, res) {
  try {
    let user;

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
    }

    user = await UserModel.findOne({ email: email });

    if (user) {
      return res.json({
        message: "User already regiseterd with this email",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    user = new UserModel({
      email: email,
      password: hashPassword,
      name: name,
      otp: verifyCode,
      otpExpires: Date.now() + 600000,
    });

    await user.save();

    //Send verification email
    await sendEmailFun({
      sendTo: email,
      subjected: "Verify email from classyShop Application",
      text: "",
      html: VerificationEmail(email, verifyCode),
    });

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );

    return res.status(200).json({
      success: true,
      error: false,
      message: "user resgisterd successfully! Please verify your email.",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//verifyEmail controller
export async function verifyEmailController(req, res) {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User Not found",
        error: true,
        success: false,
      });
    }

    const isCodeValid = user.otp;
    const isNotExpired = user.otpExpires > Date.now();

    if (isCodeValid && isNotExpired) {
      user.verify_email = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();
      return res.status(200).json({
        error: false,
        success: true,
        message: "Email verified successfully",
      });
    } else if (!isCodeValid) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Invalid OTP",
      });
    } else {
      return res.status(400).json({
        error: true,
        success: false,
        message: "OTP expired",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//login controller
export async function loginUserController(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User Not registerd",
        error: true,
        success: false,
      });
    }

    if (user.status !== "active") {
      return res.status(400).json({
        message: "Contect to the admin",
        error: true,
        success: false,
      });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Check your Password",
        error: true,
        success: false,
      });
    }

    const accessToken = await generatedAccessToken(user._id);
    const refreshToken = await generatedRefressToken(user._id);

    const udpateUser = await UserModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.cookie("accessToken", accessToken, cookiesOption);
    res.cookie("refreshToken", refreshToken, cookiesOption);

    return res.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//logout controller
export async function logoutController(req, res) {
  try {
    const userid = req.userId; //middleware

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.clearCookie("accessToken", cookiesOption);
    res.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await UserModel.findByIdAndDelete(userid, {
      refresh_token: "",
    });

    return res.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//image upload
var imageArr = [];
export async function userAvtartController(req, res) {
  try {
    imageArr = [];

    const userId = req.userId;
    const image = req.files;

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(500).json({
        message: "user not found",
        error: true,
        success: false,
      });
    }

    //first remove image from cloudinery
    const imgUrl = user.avatar;
    const urlArr = imgUrl.split("/");
    const avatar_image = urlArr[urlArr.length - 1];
    const imageName = avatar_image.split(".")[0];

    if (imageName) {
      const response = await cloudinary.uploader.destroy(
        imageName,
        (error, result) => {
          //console.log(error,res)
        }
      );
    }

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          imageArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${req.files[i].filename}`);
          // console.log(req.files[i].filename);
        }
      );
    }

    user.avatar = imageArr[0];
    await user.save();

    return res.status(200).json({
      _id: userId,
      avatar: imageArr[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//remove image
export async function removeImageCloudinry(res, req) {
  const imgUrl = req.query.img;
  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];
  const imageName = image.split(".")[0];

  if (imageName) {
    const response = await cloudinary.uploader.destroy(
      imageName,
      (error, result) => {
        //console.log(error,res)
      }
    );
    if (response) {
      res.status(200).send(response);
    }
  }
}

//update user controller
export async function updateUserDetail(req, res) {
  try {
    const userId = req.userId; //auth middleware
    const { name, email, mobile, password } = req.body;

    const userExist = await UserModel.findById(userId);

    if (!userExist) {
      return res.status(400).send("The user cannot be Updated!");
    }
    let verifyCode = "";

    if (email !== userExist.email) {
      verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    }

    let hashPassword = "";

    if (password) {
      const salt = await bcryptjs.genSalt(10);
      hashPassword = await bcryptjs.hash(password, salt);
    } else {
      hashPassword = userExist.password;
    }

    const updateUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        mobile: mobile,
        email: email,
        verify_email: email !== userExist.email ? false : true,
        password: hashPassword,
        otp: verifyCode !== "" ? verifyCode : null,
        otpExpires: verifyCode !== "" ? Date.now() + 600000 : "",
      },
      {
        new: true,
      }
    );

    //send verifucation email
    if (email !== userExist.email) {
      await sendEmailFun({
        sendTo: email,
        subject: "Verify email from ClassyShop App",
        text: "",
        html: VerificationEmail(name, verifyCode),
      });
    }
    return res.json({
      message: "User Updated Successfully",
      error: false,
      success: true,
      user: updateUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//forgot password
export async function forgotPasswordController(req, res) {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "Email not found",
        error: true,
        success: false,
      });
    } else {
      let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

      user.otp = verifyCode;
      user.otpExpires = Date.now() + 600000;

      await user.save(0);

      await sendEmailFun({
        sendTo: email,
        subject: "Verify email from ClassyShop App",
        text: "",
        html: VerificationEmail(user.name, verifyCode),
      });

      return res.json({
        message: "Check your email",
        success: true,
        error: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

//verify forgotPassword Controller
export async function verifyForgotPasswordController(req, res) {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "provide required field email, otp.",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "Email not found",
        error: true,
        success: false,
      });
    }

    if (otp !== user.otp) {
      return res.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }

    const currentTime = new Date().toISOString();

    if (user.otpExpires < currentTime) {
      return res.status(400).json({
        message: "OTP is Expired",
        error: true,
        success: false,
      });
    }

    user.otp = "";
    user.otpExpires = "";

    await user.save();

    return res.status(400).json({
      message: "OTP verified successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

//reset password
export async function restPasswordController(res, req) {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    if (!email) {
      return res.status(500).json({
        message: "Enter email",
        success: false,
        error: true,
      });
    }

    if (!newPassword || !confirmPassword) {
      return res.status(500).json({
        message: "Enter new Password or confirm Password",
        success: false,
        error: true,
      });
    }

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(500).json({
        message: "Email is not found",
        success: false,
        error: true,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "newPassword and confirmPassword must be same",
        success: false,
        error: true,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(confirmPassword, salt);

    user.password = hashPassword;
    await user.save();

    return res.status(200).json({
      message: "Password updated successfully.",
      success: false,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

//refresh token
export async function refreshtokenControlller(res, req) {
  try {
    const refreshToken =
      req.cookies.refreshToken || req?.headers?.authorization?.split(" ")[1];

    if (!refreshToken) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
        error: true,
      });
    }

    const verifyToken = await jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY
    );

    if (!verifyToken) {
      return res.status(401).json({
        message: "Token is expired",
        success: false,
        error: true,
      });
    }

    const userId = verifyToken?._id;
    const newAccessToken = await generatedAccessToken(userId);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.cookie("accessToken", newAccessToken, cookiesOption);

    return res.json({
      message: "New access token generated",
      success: false,
      error: true,
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

//get user detail
export async function getuserController(req, res) {
  try {
    const userId = req.userId;
    console.log(userId);

    const user = await UserModel.findById(userId).select(
      "-password -refresh_token"
    );

    return res.json({
      message: "user details",
      success: false,
      error: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
