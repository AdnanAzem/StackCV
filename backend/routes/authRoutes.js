import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import {
  getUserProfile,
  loginUser,
  registerUser,
} from '../controllers/authController.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

// Auth Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(protect, getUserProfile);

router.post("/upload-image", upload.single("image"), (req,res) => {
    if(!req.file){
        return res.status(400).json({message: "No file uploaded"});
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({imageUrl});
})

export default router;
