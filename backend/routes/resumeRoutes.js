import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { uploadResumeImages } from '../controllers/uploadImages.js';
import {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from '../controllers/resumeController.js';


const router = express.Router();

router.post("/", protect, createResume); // Create resume
router.get("/", protect, getUserResumes); // Get resumes
router.get("/:id", protect, getResumeById); // Get resume by ID
router.put("/:id", protect, updateResume); // Update resume
router.put("/:id/upload-images", protect, uploadResumeImages);

router.delete("/:id", protect, deleteResume); // Delete resume

export default router;

