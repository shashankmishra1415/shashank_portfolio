import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/rx1.jpg";
import project3 from "../assets/projects/ims1.jpg";
import project4 from "../assets/projects/project-4.webp";
import PWCer from "../assets/projects/PWCer.webp";
import PentaCer from "../assets/projects/PentaCer.webp";
import TequedCer from "../assets/projects/TequedCer.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable Web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like Angular, as well as back-end technologies like Dotnet. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Associate Software Developer",
    company: "Mind IT Systems",
    description: `Developed and Deployed high-performance, cross-platform, scalable web apps for clients with Dotnet and Angular. Implemented RESTful APIs with Dotnet and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Angular","MySQL","JavaScript","Dotnet","C#"],
    certLink:""
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
    title: "Sujata Product Strategy",
    image: project1,
    description:
    "Sujata is a web application that manages the products such as home appliances at multiple levels. The platform will centralize product cost, labour cost management and generates balance sheet for the user.",
    technologies: ["Angular", "TypeScript"],
  },
  {
    title: "Inventory Management System",
    image: project2,
    description:
    "Inventory Management System is an application which manages Inventory of product, creates barcode for each product, generates excel report of sales.",
    technologies: ["REST APIs", ".Net", "MySql"],
  },
  {
    title: "Human Resource Management System (HRX)",
    image: project4,
    description:
    "HRX is a web application used to maintaining the HR Operations like attendance regularization, leaves and work schedule management of an employee.",
    technologies: [".Net Core", "Angular", "TypeScript"],
  },
];

export const CERTIFICATE = [
  {
    issueYear: "Sep 2021",
    name: "Java with DSA and System Design",
    company: "Physics Wallah",
    image: PWCer
  },
  {
    issueYear: "Sep 2021",
    name: "Java Full Stack",
    company: "Pentagon Space",
    image: PentaCer
  },
  {
    issueYear: "Sep 2021",
    name: "Full Stack Web Development (Internship)",
    company: "Tequed Labs",
    image: TequedCer
  },
];

export const CONTACT = {
  address: "Sector 3, Faridabad, Haryana - 121004, India",
  phoneNo: "+91-9599866160",
  email: "shashankmishra1415@gmail.com",
};
