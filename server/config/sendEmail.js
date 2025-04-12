import sendEmail from "../config/emailService.js"; // Ensure it's a default export

const sendEmailFun = async (to, subject, text, html) => {
  const result = await sendEmail(to, subject, text, html);
  if (result.success) {
    return true; // Cleaner return statement
  } else {
    return false;
  }
};

export default sendEmailFun;
