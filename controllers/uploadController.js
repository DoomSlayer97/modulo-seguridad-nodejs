const uploadFile = require('../utils/cloudinary');

exports.uploadFile = async ( req, res ) => {
  try {

    const data = {
      image: req.body.image
    };

    const fileRes = await uploadFile.cloudinary.uploader.upload(data.image);

    return res
      .status(201)
      .json({
        message: 'uploaded_file'
      });
    
  } catch (e) {
    console.log(e);
    
    return res
      .status(500)
      .json({
        message: "internal_error"
      });
  }
}