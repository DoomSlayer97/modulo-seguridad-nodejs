const cloudinary = require("cloudinary").v2;

class CloudynaryUtils {

  constructor() {

    this.cloudinary = cloudinary;
    this.cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET
    });

  }

}

const cloud = new CloudynaryUtils();

module.exports = cloud;
