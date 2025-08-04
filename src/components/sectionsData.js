const sectionsData = [
  // Personal Details
  {
    id: 1,
    name: "Personal Details",
    fullName: {
      label: "Full Name",
      type: "text",
      placeholder: "Enter your name...",
      value: "Ioana Franț",
    },
    address: {
      label: "Address",
      type: "text",
      placeholder: "Enter your address...",
      value: "Iași, Romania",
    },
    phone: {
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number...",
      value: "0741234567",
    },
    email: {
      label: "Email",
      type: "email",
      placeholder: "Enter your email...",
      value: "frantioana507@gmail.com",
    },
  },
  // Skills
  {
    id: 2,
    name: "Skills",
    skill: {
      label: "Skill",
      type: "text",
      placeholder: "Enter a skill...",
      value: "React",
    },
  },
  // Projects
  {
    id: 3,
    name: "Projects",
    projectName: {
      label: "Project Name",
      type: "text",
      placeholder: "YouTube Clone",
      value: "E-commerce Platform",
    },
    startDate: {
      label: "Start Date",
      type: "date",
      placeholder: "",
      value: new Date(2028, 4, 12).toISOString().split("T")[0],
    },
    endDate: {
      label: "End Date",
      type: "date",
      placeholder: "",
      value: new Date(2028, 4, 30).toISOString().split("T")[0],
    },
    projectSkills: {
      label: "Skills",
      type: "text",
      placeholder: "Enter a skill...",
      value: "React",
    },
    description: {
      label: "Description",
      type: "textarea",
      placeholder: "Present your project...",
      value:
        "Built a full-stack e-commerce platform with user authentication, shopping cart and payment integration.",
    },
    live: {
      label: "Live Preview Link",
      type: "text",
      placeholder: "Enter a link...",
      value: "https://cv-app-tan-one.vercel.app/",
    },
    code: {
      label: "Code Link",
      type: "text",
      placeholder: "Enter a link...",
      value:
        "https://github.com/I0ANA24/FAQ-According-Learning-React/blob/main/src/data/faqData.js",
    },
  },
  // Work Experience
  {
    id: 4,
    name: "Work Experience",
    projectName: {
      label: "Company Name",
      type: "text",
      placeholder: "Ex: Centric",
      value: "Microsoft",
    },
    startDate: {
      label: "Start Date",
      type: "date",
      placeholder: "",
      value: new Date(2028, 4, 12).toISOString().split("T")[0],
    },
    endDate: {
      label: "End Date",
      type: "date",
      placeholder: "",
      value: new Date(2028, 6, 17).toISOString().split("T")[0],
    },
    description: {
      label: "Description",
      type: "textarea",
      placeholder: "",
      value:
        "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    location: {
      label: "Location",
      type: "text",
      placeholder: "Ex: Paris, France",
      value: "Vancouver, Canada",
    },
  },
  // Education
  {
    id: 5,
    name: "Education",
    projectName: {
      label: "School Name",
      type: "text",
      placeholder: "Ex: UAIC",
      value: "Alexandru Ioan Cuza University",
    },
    degree: {
      label: "Degree",
      type: "text",
      placeholder: "Ex: Bachelor of Science in Information Technology",
      value: "Bachelor's degree in Computer Science",
    },
    startDate: {
      label: "Start Date",
      type: "date",
      placeholder: "",
      value: new Date(2025, 8, 30).toISOString().split("T")[0],
    },
    endDate: {
      label: "End Date",
      type: "date",
      placeholder: "",
      value: new Date(2028, 6, 17).toISOString().split("T")[0],
    },
    location: {
      label: "Location",
      type: "text",
      placeholder: "Ex: Paris, France",
      value: "Iași, Romania",
    },
  },
];

export default sectionsData;
