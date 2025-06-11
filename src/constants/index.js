import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I’m a software developer with hands-on experience in building scalable and efficient software solutions. With over 4 years of professional experience, I’ve worked with front-end technologies like React and Angular, and back-end systems using C#, .NET, Java, SQL, and Oracle. My goal is to create innovative solutions that drive performance and improve the user experience.`;

export const ABOUT_TEXT = `I'm a software developer with a strong background in automation, web development, and large-scale code maintenance. I’ve developed and maintained robust APIs, built responsive websites, and automated enterprise processes. Skilled in React, Angular, .NET C#, Oracle, Java, and PHP. I hold a Security+ certification and bring a problem-solving mindset, adaptability, and a passion for technology to every team I join.`;

export const EXPERIENCES = [
  {
    year: "2018",
    role: "Web Developer Intern",
    company: "UPR Ponce – Ponce, Puerto Rico",
    description: `Supported academic and technical development projects. Gained early exposure to web technologies and development workflows.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2021",
    role: "Web Developer",
    company: "Global Taxes and Accounting – Yauco, Puerto Rico",
    description: `Built a responsive website using HTML, CSS, PHP, and Bootstrap with a SQL backend. Focused on secure backend implementations.`,
    technologies: ["HTML", "CSS", "PHP", "Bootstrap", "SQL"],
  },
  {
    year: "2022",
    role: "Software Developer I",
    company: "Wovenware, Inc. – San Juan, Puerto Rico",
    description: `Developed REST and Thrift APIs using Java and Spring Boot. Built new React features for the client-facing web app and maintained the codebase.`,
    technologies: ["Java", "Spring Boot", "Thrift", "React"],
  },
  {
    year: "2023 - 2024",
    role: "Software Engineer",
    company: "Lockheed Martin – Aguadilla, Puerto Rico",
    description: `Automated internal workflows using .NET C# and Oracle. Provided project management and maintained systems using JavaScript and .NET technologies.`,
    technologies: ["C#", ".NET", "Oracle", "JavaScript", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Accounting Web System",
    image: project1,
    description:
      "A responsive website for a local accounting firm with user authentication and client management. Built with PHP, SQL, and Bootstrap.",
    technologies: ["PHP", "SQL", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Financial REST API",
    image: project2,
    description:
      "Backend API for financial management built using Java, Spring Boot, and Thrift. Included secure authentication and technical documentation.",
    technologies: ["Java", "Spring Boot", "REST", "Thrift"],
  },
  {
    title: "React Admin Dashboard",
    image: project3,
    description:
      "An interactive web dashboard built with React for business data visualization. Integrated with a Node.js backend and Oracle database.",
    technologies: ["React", "Node.js", "Oracle", "CSS"],
  },
  {
    title: "Enterprise Automation Scripts",
    image: project4,
    description:
      "Automation tools using .NET C# to manage reports and synchronize data across enterprise systems.",
    technologies: ["C#", ".NET", "Oracle", "PowerShell"],
  },
];

export const CONTACT = {
  address: "Yauco, Puerto Rico",
  phoneNo: "787 445 5758",
  email: "stevenmaelpacheco@gmail.com",
};
