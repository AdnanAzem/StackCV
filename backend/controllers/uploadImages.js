import fs from 'fs';
import path from 'path';
import Resume from '../models/Resume.js';
import upload from '../middlewares/uploadMiddleware.js';

export const uploadResumeImages = async (req, res) => {
  try {
    upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])(
      req,
      res,
      async (err) => {
        if (err) {
          return res
            .status(400)
            .json({ message: "File uploaded failed", error: err.message });
        }
        const resumeId = req.params.id;
        const resume = await Resume.findOne({
          _id: resumeId,
          userId: req.user._id,
        });

        if (!resume) {
          return res
            .status(404)
            .json({ message: "Resume not found or unauthorized" });
        }

        const uploadsFolder = path.join(__dirname, "..", "uploads");
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        const newThumbnail = req.files.thumbnail?.[0];
        const newProfileImage = req.files.profileImage?.[0];

        // If new thumbnail is uploaded, delete old thumbnail
        if (newThumbnail) {
          if (resume.thumbnailLink) {
            const oldThumbnail = path.join(
              uploadsFolder,
              path.basename(resume.thumbnailLink)
            );
            if (fs.existsSync(oldThumbnail)) {
              fs.unlink(oldThumbnail);
            }
          }
          resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
        }

        // If new profile image is uploaded, delete old profile image
        if (newProfileImage) {
          if (resume.profileInfo?.profilePreviewUrl) {
            const oldProfile = path.join(
              uploadsFolder,
              path.basename(resume.profileInfo.profilePreviewUrl)
            );
            if (fs.existsSync(oldProfile)) {
              fs.unlink(oldProfile);
            }
          }
          resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
        }
        await resume.save();
        res
          .status(200)
          .json({
            message: "File uploaded successfully",
            thumbnailLink: resume.thumbnailLink,
            profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
          });
      }
    );
  } catch (error) {
    console.log("Error uploading images:", error);

    res
      .status(500)
      .json({ message: "Error uploading images:", error: error.message });
  }
};


