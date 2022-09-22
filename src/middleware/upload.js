// import multer
const multer = require("multer");

//import path
const path = require("path");
const userModel = require("../model/user.model");

//untuk management file
const multerUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public");
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const filename = Date.now() + "" + ext;
      cb(null, filename);
    },
  }),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext === ".jpg" || ext === ".png") {
      cb(null, true);
    } else {
      const error = {
        messsage: "File must be jpg or png",
      };
      cb(error, false);
    }
  },
  //Size file max 2MB compare to characters
  limits: { fileSize: 2097152 },
});

//untuk middleware
const upload = (req, res, next) => {
  const multerSingle = multerUpload.single("gambar");
  multerSingle(req, res, (err) => {
    if (err) {
      res.json({
        messsage: "err",
        error: err,
      });
    } else {
      next();
    }
  });
};

module.exports = upload;
