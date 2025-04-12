import CategoryModel from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

//image upload
var imageArr = [];
export async function upoadImageController(req, res) {
  try {
    imageArr = [];

    const image = req.files;

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
        }
      );
    }

    return res.status(200).json({
      images: imageArr,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//create category
export async function createCategoryController(req, res) {
  try {
    let category = new CategoryModel({
      name: req.body.name,
      images: imageArr,
      parentId: req.body.parentId,
      parentCatName: req.body.parentCatName,
    });

    if (!category) {
      return res.status(500).json({
        message: "category not created",
        error: true,
        success: false,
      });
    }

    category = await category.save();
    imageArr = [];

    return res.status(500).json({
      message: "Category createed",
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get category
export async function getCategories(req, res) {
  try {
    const categorise = await CategoryModel.find();
    const categoryMap = {};

    categorise.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categorise.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return res.status(200).json({
      success: true,
      error: false,
      data: rootCategories,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//get categories count
export async function getCategoriesCountController(req, res) {
  try {
    const categoryCount = await CategoryModel.countDocuments({
      parentId: undefined,
    });

    if (!categoryCount) {
      res.send({
        error: true,
        success: false,
      });
    } else {
      res.status(200).json({
        categoryCount: categoryCount,
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

//get  sub categories count
export async function getSubCategoriesCountController(req, res) {
  try {
    const categories = await CategoryModel.find();

    if (!categories) {
      res.send({
        error: true,
        success: false,
      });
    } else {
      const subCatList = [];
      for (let cat of categories) {
        if (cat.parentId !== undefined) {
          subCatList.push(cat);
        }
      }

      res.send({
        subCategoryCount: subCatList.length,
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
