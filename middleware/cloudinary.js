const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  //   cloud_name: process.env.CLOUD_NAME,
  //   api_key: process.env.API_KEY,
  //   api_secret: process.env.API_SECRET,
  cloud_name: "dzm2mmrul",
  api_key: "517967937674739",
  api_secret: "PMlkwCuL-mJtd7uYLAvk-aON0cM",
});

module.exports = cloudinary;
