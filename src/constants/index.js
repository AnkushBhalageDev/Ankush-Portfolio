import project1 from "../assets/projects/pki-management-project.jpg";
import project2 from "../assets/projects/firmware-over-the-air-project.jpg";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years 3 months of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years 3 months of professional experience, I have worked with a variety of technologies, including React, Next.js,Java, SpringBoot, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Senior Engineer",
    company: "FEV India",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","Java"],
  },
  
];

export const PROJECTS = [
  {
    title: "PKI Certificate Management Project",
    image: project1,
    description:
      "A fully functional PKI Certificate Management Project with feature like signing certificate, storing certificate, Checking expiry and renewing it.",
    technologies: ["React","HTML", "Tailwind CSS",  "java","SpringBoot", "MongoDB"],
  },
  {
    title: "Firmware Over The Air (FOTA) Project",
    image: project2,
    description:
      "An application for managing FOTA campaign,rolling out campaings inside the vehicle, with features such as Create Campaign with Firmware Image and manifest file, Schedule Campaign, and progress tracking.",
    technologies: ["React","HTML", "CSS", "Java","Springboot","MySql"],
  },
 
];

export const CONTACT = {
  address: "401 - Krish Villa, Jagtap Dairy ,Pimple Nilakh,Pune - 411027 ",
  phoneNo: "+91 8459490974",
  email: "ankushbhalage.entc@gmail.com",
};
