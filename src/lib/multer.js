const multer=require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/src/public/img');
      },
      filename: function (req, file, cb) {
        cb(null,
            `${file.fieldname}-${Date.now()}.${file.originalname.split(".")[1]}` 
            );
      },
});

 
const upload = multer({ storage: storage });
module.exports = upload;