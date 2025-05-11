import TEMPLATE_ONE_IMG from "../assets/template-one.png";
import TEMPLATE_TWO_IMG from "../assets/template-two.png";
import TEMPLATE_THREE_IMG from "../assets/template-three.png";
import WorkExperience from "../components/ResumeSections/WorkExperience";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5FAFF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

    ["#4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9CFF", "#E3F0F9", "#CDDDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "John Doe",
    designation: "UI Designer",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  contactInfo: {
    location: "123 Main St, Anytown, USA",
    email: "G6v7C@example.com",
    phone: "+1 (123) 456-7890",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.com",
  },
  workExperience: [
    {
      company: "ABC Company",
      role: "UI Designer",
      startDate: "2022-01-01",
      endDate: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      company: "XYZ Company",
      role: "Frontend Developer",
      startDate: "2022-01-01",
      endDate: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      company: "PQR Company",
      role: "Backend Developer",
      startDate: "2022-01-01",
      endDate: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ],
  education:[
    {
      degree: "Bachelor's degree",
      institution: "ABC University",
      startDate: "2022-01",
      endDate: "2024-06",
    },
    {
      degree: "Master's degree",
      institution: "XYZ University",
      startDate: "2022-01",
      endDate: "2024-06",
    },
    {
      degree: "PhD",
      institution: "PQR University",
      startDate: "2022-01",
      endDate: "2024-06",
    },
  ],
  skills: [
    {
      name: "HTML",
      progress: "90",
    },
    {
      name: "CSS",
      progress: "80",
    },
    {
      name: "JavaScript",
      progress: "70",
    },
    {
      name: "React",
      progress: "60",
    },
    {
      name: "Node.js",
      progress: "50",
    },
  ],
  projects: [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        github: "https://github.com/johndoe",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        github: "https://github.com/johndoe",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        github: "https://github.com/johndoe",
    },
  ],
  certifications:[
    {
      title: "Certification 1",
      issuer: "Issuer 1",
      year: "2022",
    },
    {
      title: "Certification 2",
      issuer: "Issuer 2",
      year: "2022",
    },
  ],
  languages:[
    {
      name: "English",
      progress: "90",
    },
    {
      name: "Spanish",
      progress: "80",
    },
    {
      name: "French",
      progress: "70",
    },
  ],
  interests: ["Reading", "Traveling", "Cooking"],
};
