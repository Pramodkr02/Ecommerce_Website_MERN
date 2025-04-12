const VerificationEmail = (email, otp) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
</head>
<body class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl font-bold text-gray-800 text-center">Verify Your Email</h2>
        <p class="text-gray-600 text-center mt-2">Use the OTP below to verify your email address ${email}.</p>

        <div class="mt-4 text-center">
            <span class="text-3xl font-bold tracking-widest bg-gray-200 px-4 py-2 rounded-lg inline-block">
                ${otp}
            </span>
        </div>

        <p class="text-gray-600 text-center mt-4">
            This OTP is valid for **10 minutes**. Do not share it with anyone.
        </p>

        <div class="mt-6 text-center">
            <p class="text-sm text-gray-500">
                If you did not request this, please ignore this email.
            </p>
        </div>

        <hr class="mt-4 border-gray-300">

        <div class="text-center mt-4">
            <p class="text-xs text-gray-500">
                &copy; 2025 Your Company. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>`;
};

export default VerificationEmail;
