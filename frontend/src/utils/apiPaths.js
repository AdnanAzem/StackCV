const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_PATHS = {
    AUTH: {
        REGISTER: '/api/auth/register', // SignUp
        LOGIN: '/api/auth/login', // Authenticate user & return JWT token
        GET_PROFILE: '/api/auth/profile' // Get logged-in user details
    },

    RESUME: {
        CREATE: '/api/resume', // POST - Create new resume
        GET_ALL: '/api/resume', // GET - Get all resumes of logged-in user
        GET_BY_ID: (id) => `/api/resume/${id}`, // GET - Get a specific resume
        UPDATE: (id) => `/api/resume/${id}`, // PUT - Update a resume
        DELETE: (id) => `/api/resume/${id}`, // DELETE - Delete a resume
        UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images` // PUT - Upload Thumbnail and resume profile images
    },

    IMAGE: {
        UPLOAD_IMAGE: '/api/auth/upload-image'
    }
}