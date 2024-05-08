import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
    cb(null, fileName)
  }
})
const upload = multer({ storage })

export default upload


// api secret _D6YBBjKSiZ634Q0PLdTYYcwYHI

// api key 749389194833192