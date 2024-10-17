import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/rx1.jpg";
import project3 from "../assets/projects/ims1.jpg";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable Web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like Angular, as well as back-end technologies like Dotnet. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.`;

export const EXPERIENCES = [
  {
    year: "2023 - Current",
    role: "Associate Software Developer",
    company: "Mind IT Systems",
    description: `Developed and Deployed high-performance, cross-platform, scalable web apps for clients with Dotnet and Angular. Implemented RESTful APIs with Dotnet and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Angular","MySQL","JavaScript","Dotnet","C#"],
    certLink:"https://minditsystems.com/"
  },
  // {
  //   year: "Apr 2022 - May 2022",
  //   role: "CS Internship",
  //   company: "Virtually Testing Foundation",
  //   description: `Two months cohort based internship based on cybersecurity(Level-1)`,
  //   technologies: ["Mitre","Authentication", " Cyber security"],
  //   certLink:"https://verification.givemycertificate.com/v/b6586322-aa69-4e47-a1ab-12a11898c8a6"

  // },
];

export const PROJECTS = [
  {
    title: "Sujata Product Strategy",
    image: project1,
    description:
    "Sujata is a web application that manages the products such as home appliances at multiple levels. The platform will centralizeproduct cost, labour cost management and generates balance sheet for the user.",
    technologies: ["Angular", "TypeScript"],
  },
  {
    title: "Inventory Management System",
    image: project2,
    description:
    "Inventory Management System is an application which manages Inventory of product, creates barcode for each product, generates excel report of sales.",
    technologies: ["REST APIs", "Dotnet", "MySql"],
  },
  {
    title: "Human resource management system (HRX)",
    image: project4,
    description:
    "HRX is a web application used to maintaining the HR Operations like attendance regularization, leaves and work schedule management of an employee.",
    technologies: [".Net Core", "Angular", "TypeScript"],
  },
];

export const CONTACT = {
  address: "Sector 3, Haryana, India ",
  phoneNo: "+91-9599866160 ",
  email: "shashankmishra1415@gmail.com",
};
