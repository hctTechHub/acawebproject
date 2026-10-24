import multer from "multer"

const storage = multer.diskStorage({
    destination:(request,file,callback) => {
        callback(null,"uploads/")
    },
    filename: (request,file,callback) => {
        callback(null,
            `${Date.now()}-${file.originalname}`
        )
      }
    })


const fileFilter = (request, file, callback) => {
    if (file.mimetype.startsWith("image/")) {
        callback(null, true);
    } else {
        callback(new Error("Only image files are allowed"));
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2 MB
    }
})

export default upload