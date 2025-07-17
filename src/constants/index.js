import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/rx1.jpg";
import project3 from "../assets/projects/ims1.jpg";
import project4 from "../assets/projects/project-4.webp";
import PWCer from "../assets/projects/PWCer.webp";
import PentaCer from "../assets/projects/PentaCer.webp";
import TequedCer from "../assets/projects/TequedCer.webp";

export const HERO_CONTENT = `I am a dedicated full stack developer with a strong passion for building reliable and scalable web applications. With 2+ years of practical experience, I specialize in front-end technologies like Angular and back-end technologies such as .NET. My aim is to use my skills to develop innovative solutions that help businesses grow and provide outstanding experiences for users.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Current",
    role: "Software Engineer",
    company: "Mind IT Systems",
    description: `Developed and Deployed high-performance, cross-platform, scalable web apps for clients with Dotnet and Angular. Implemented RESTful APIs with Dotnet and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Angular","Typrscript", ".Net Core","JavaScript","MySQL","C#"],
    certLink:""
  },
  {
    year: "Feb 2023 - April 2025",
    role: "Associate Software Engineer",
    company: "Mind IT Systems",
    description: `Gained hands-on experience in developing and maintaining web applications using Angular and .NET Core. Assisted in writing and debugging RESTful APIs and integrated MySQL databases. Participated in code reviews and collaborated with senior developers to improve application performance and maintainability.`,
    technologies: ["C#",".Net Core","MySQL","JavaScript","Angular","TypeScript","HTML5","CSS3","Bootstrap5"],
    certLink: ""
  },
  {
    year: "Aug 2021 - Sep 2021",
    role: "Full Stact Web Development (Internship)",
    company: "Tequed Labs",
    description: `Design and development of a user-friendly tutorial website, encompassing a homepage, an informative header section, a comprehensive catalog of offered courses, and seamless contact functionality`,
    technologies: ["HTML5", "CSS3", "JavaScript", "MySQL"],
    certLink:""
  },
];

export const PROJECTS = [
  {
    title: "Interne",
    image: project4,
    description: "Interne is a comprehensive web application designed to streamline and manage HR operations efficiently. It provides robust features for handling employee attendance regularization, leave management, and work schedule organization.",
    technologies: ["Angular", "TypeScript", ".Net Core"],
  },
  {
    title: "Human Resource Management System (HRX)",
    image: project3,
    description: "HRX is a web application used to maintaining the HR Operations like attendance regularization, leaves and work schedule management of an employee.",
    technologies: [".Net Core", "Angular", "TypeScript"],
  },
  {
    title: "Sujata Product Strategy",
    image: project2,
    description: "Sujata is a web application that manages the products such as home appliances at multiple levels. The platform will centralize product cost, labour cost management and generates balance sheet for the user.",
    technologies: ["Angular", "TypeScript"],
  },
  {
    title: "Inventory Management System",
    image: project1,
    description: "Inventory Management System is an application which manages Inventory of product, creates barcode for each product, generates excel report of sales.",
    technologies: ["REST APIs", ".Net Core", "MySql"],
  },
];

export const CERTIFICATE = [
  {
    issueYear: "",
    name: "Java with DSA and System Design",
    company: "Physics Wallah",
    image: PWCer,
    technologies: ["Java"],
  },
  {
    issueYear: "",
    name: "Java Full Stack",
    company: "Pentagon Space (Bangalore)",
    image: PentaCer,
    technologies: ["Java","MySQL","Web Technologies"],
  },
  {
    issueYear: "",
    name: "Full Stack Web Development",
    company: "Tequed Labs (Bangalore)",
    image: TequedCer,
    technologies: ["HTML5","CSS3","JavaScript","MySQL"],
  },
];

export const CONTACT = {
  address: "Faridabad, Haryana - 121004, India",
  phoneNo: "+91-9599866160",
  email: "shashankmishra1415@gmail.com",
};
