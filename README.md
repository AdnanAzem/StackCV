# StackCV Application

## Overview
This is a web-based resume builder application built using React, Vite, and Tailwind CSS. The application allows users to create, edit, and manage their resumes, as well as customize the layout and design.

---

## Features

- User authentication and authorization using JWT tokens
- Resume creation and editing with customizable templates
- Support for multiple resume sections,         including:
  - Profile information
  - Contact information
  - Work experience
  - Education
  - Skills
  - Projects
  - Certifications
- Customizable layout and design options
- Integration with a backend API for data storage and retrieval.

---

## Technical Details

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT tokens
- **API**: RESTful API with endpoints for user authentication, resume creation, and data retrieval

---

## Getting Started

1. **Clone the repository**: `git clone https://github.com/AdnanAzem/StackCV`
2. **Install dependencies**: `npm install` or `yarn install`
3. **Start the development server**: `npm run dev` or `yarn dev`
4. **Open the application in your web browse**r: `http://localhost:5173`

- Or you can try it live on **[StackCV](https://stackcv-frontend.onrender.com)**

---

## API Endpoints

- **Authentication**
  - `POST /api/auth/register`: Create a new user account
  - `POST /api/auth/login`: Login to an existing user account
  - `GET /api/auth/profile`: Get the logged-in user's profile information

- **Resume**
  - `POST /api/resume`: Create a new resume
  - `GET /api/resume`: Get all resumes for the logged-in user
  - `GET /api/resume/:id`: Get a specific resume by ID
  - `PUT /api/resume/:id`: Update a resume
  - `DELETE /api/resume/:id`: Delete a resume

---

## Acknowledgments

- This project was built using the Vite React template and Tailwind CSS.
- The backend API was built using Node.js, Express.js, and MongoDB.
- The resume templates were inspired by various online resources.