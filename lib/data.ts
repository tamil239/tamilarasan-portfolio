export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "Computer Vision", "Convolutional Neural Networks (CNN)"]
  },
  {
    title: "Libraries & Frameworks",
    skills: ["PyTorch", "OpenCV", "Scikit-Learn", "FastAPI", "Pandas", "NumPy"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Supabase", "Firebase"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Visual Studio Code", "Arduino"]
  },
  {
    title: "Domains",
    skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Internet of Things (IoT)"]
  },
  {
    title: "Professional Skills",
    skills: [
      "Communication",
      "Leadership",
      "Teamwork",
      "Time Management",
      "Research-Oriented Thinking"
    ]
  }
];

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: "DermAI — Skin Disease Prediction Model",
    description:
      "Clinical-assistive AI platform for skin disease diagnosis using advanced deep learning architectures.",
    highlights: [
      "Achieved 96.0% specialist precision using multiple deep learning models.",
      "Implemented ConvNeXt-Tiny, EfficientNet-B3, and ResNet-18.",
      "Built a FastAPI backend."
    ],
    tech: ["Python", "PyTorch", "FastAPI", "Deep Learning", "Computer Vision"]
    // liveUrl / githubUrl intentionally omitted — shown as placeholders
  },
  {
    name: "Pearl — Women's Health Tracking & PCOD Diet Guide App",
    description:
      "A health tracking application focused on women's wellness, with automated, personalized diet guidance for PCOD management.",
    highlights: [
      "Built a health tracking application focused on women's wellness.",
      "Automated personalized diet guidance for PCOD management.",
      "Designed to improve accessibility to health recommendations."
    ],
    tech: ["Artificial Intelligence", "Mobile Application Development"]
  },
  {
    name: "Semantic-Aware Grayscale Video Colorization",
    description:
      "Attention-Guided U-Net and GAN architecture for restoring color to grayscale video with semantic awareness.",
    highlights: [
      "Developed Attention-Guided U-Net.",
      "Built GAN architecture.",
      "Used Python, PyTorch, OpenCV."
    ],
    tech: ["Python", "PyTorch", "GAN", "OpenCV", "Computer Vision"]
  },
  {
    name: "Pet Monitoring Web Application",
    description:
      "Prototype IoT monitoring application for tracking a pet's vital signs in real time.",
    highlights: [
      "Prototype IoT monitoring application.",
      "Heart rate monitoring.",
      "Temperature monitoring."
    ],
    tech: ["IoT", "Arduino", "Web Application Development"]
  }
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    org: "Macvel Solutions, Sivakasi",
    period: "May 2025 – June 2025",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript, Node.js, and MongoDB.",
      "Collaborated with development teams to implement CRUD operations.",
      "Optimized application performance through development best practices."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence and Data Science",
    institution: "Dr. Mahalingam College of Engineering and Technology",
    affiliation: "Anna University",
    period: "2023–2027",
    score: "CGPA 8.05 / 10"
  },
  {
    degree: "Higher Secondary Certificate",
    field: "",
    institution: "S. H. N. V. Matriculation Higher Secondary School",
    affiliation: "",
    period: "2021–2023",
    score: "77.5%"
  },
  {
    degree: "Secondary School Leaving Certificate",
    field: "",
    institution: "",
    affiliation: "",
    period: "2020–2021",
    score: "Pass"
  }
];

export const certifications = [
  {
    name: "E-Business Course",
    issuer: "NPTEL",
    date: "Completion Date: Add Later"
  },
  {
    name: "Entrepreneurship Course",
    issuer: "NPTEL",
    date: "Completion Date: Add Later"
  }
];

export const achievements = [
  "Coordinated sponsorship initiatives with Eicher Tractors and Government of Tamil Nadu during Jallikattu events in 2025 and 2026.",
  "National Service Scheme (NSS) volunteer contributing to college events."
];

export const contactInfo = {
  email: "mail2tamilarasan2006@gmail.com",
  phone: "+91 9025150566",
  location: "Sivakasi, Tamil Nadu, India"
};

export const socials = {
  github: "https://github.com/tamil239",
  linkedin: "https://linkedin.com/in/tamilarasan-s-83a993297"
};
