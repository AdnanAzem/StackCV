import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

import { fileURLToPath } from "url";

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// middleware to handle cors
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// connect to database
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

// Serve uploads folder
// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"), {
//     setHeaders: (res, path) => {
//       res.set("Access-Control-Allow-Origin", process.env.CLIENT_URL);
//     },
//   })
// );

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, path) => {
      res.set("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    },
  })
);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
