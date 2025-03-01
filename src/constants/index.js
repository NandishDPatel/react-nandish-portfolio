import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am an aspiring Computer Science student, set to graduate in Spring 2025, with strong expertise in MERN stack development and experience as a frontend developer. I excel in problem-solving and critical thinking, and I am eager to apply my skills to real-world challenges as I prepare to kickstart my career.`;

export const ABOUT_FIRST = `A fitness enthusiast who stays active through regular workouts and sports, including running, cycling, and racket sports like tennis, badminton, and table tennis. I also enjoy listening to music while studying or coding my projects. My second favorite activity is trekking, with one of my most memorable hikes being a trek up to 13,800 feet in Kasol, Himachal Pradesh.`;
export const ABOUT_SECOND = `I am a self-motivated and disciplined individual who is always eager to learn, grow, and develop new skills. I believe in maintaining a well-structured daily routine, which helps me stay focused and productive. As a quick learner, I adapt swiftly to new challenges, and I value collaboration, understanding that success is best achieved by working effectively within a team. I’m committed to continuous improvement and approach every opportunity with enthusiasm and a positive outlook.`;


export const EXPERIENCES = [
  {
    year: "Jan 2023 - Jul 2023",
    role: "Frontend Developer Trainee",
    company: "TOPS Technology",
    description: `Gained hands-on experience with various technologies by developing real-time projects, including an e-commerce website and smaller web page designs for the clothing and education sectors. Started with HTML, CSS, and Bootstrap to build responsive UIs, then advanced to developing dynamic, interactive interfaces using React.js within a six-month period.`,
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
];

export const EDUCATION = [
  {
    year: "Aug 2023 - May 2025",
    degree: "Master of Science",
    field: "Computer Science",
    university: "University of Texas at Arlington",
    address: "Arlington, USA",
    gpa: "GPA: 4.0/4.0",
  },
  {
    year: "Jul 2019 - May 2023",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    university: "Ahmedabad Univeristy",
    address: "Ahmedabad, India",
    gpa: "",  
  },
];

export const PROJECTS = [
  {
    title: "Journey Genie: AI powered trip planning platform",
    link: "https://github.com/nandishdpatel/JourneyGenie",
    image: project1,
    width:350,
    description:
      "Developed essential features including an itinerary planner, links for booking flights and hotels, and a travel journal where users can upload photos and videos. Integrated APIs for a smooth, user-friendly experience, with secure sign-in functionality using google oAuth and reliable travel planning resources.",
    technologies: [ "React", "Gemini AI", "Node.js", "Express.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Geo Compensate: Mobile app for managing the mobile workforce ",
    link: "https://youtu.be/GqKjJTQcdX8",
    image: project2,
    height:200,
    width:150,
    description:
      "Developed a mobile app that uses GPS to automate payroll, tracking work hours, breaks, and overtime accurately. This solution streamlines workforce management, reduces manual errors, and enables location-based compensation adjustments, enhancing transparency and efficiency for mobile teams.",
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "EShoppy: E-commerce clothing website frontend design",
    link: "https://ecom-34z.pages.dev/",
    image: project3,
    height:350,
    width:350,
    description:
      "Designed and implemented the front-end of an e-commerce clothing website based on initial prototypes, with a focus on creating an intuitive and seamless user experience. Prioritized responsive design and smooth navigation to ensure accessibility across devices. Applied key UI/UX principles to enhance product discovery, streamline the shopping process, and improve add-to-cart conversion rates.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Digiwheels: An iOS mobile application",
    link: "https://www.figma.com/file/F7DCzEMGs17EA10IySuPza/HCI-Project?node-id=0%3A1",
    image: project4,
    height:200,
    width:150,
    description:
      "Created a multi-functional iOS app using Figma, enabling users to access transport information, book appointments, and view essential documents like driver's licenses and vehicle registrations, enhancing user convenience and efficiency.",
    technologies: ["Figma"],
  },
  // {
  //   title: "Prediction of heart disease using ML model",
  //   link: "https://github.com/NandishDPatel/ML-Heart_Disease_Prediction",
  //   image: project5,
  //   height:200,
  //   width:200,
  //   description:
  //     "Applied machine learning methodologies such as SVM, LDA, Decision Tree, and Naïve Bayes to forecast heart disease likelihood in patients, achieving a 72% accuracy with SVM and 64% with Decision Tree after applying PCA, optimizing predictions for patient health outcomes.",
  //   technologies: ["Python", "Jupyter Notebook"],
  // },
];

export const CURRICULAR_ACTIVITIES = [
  {
    year: "May 2023",
    title: "HackUTA - 24 hour challenge",
    description: "SpotCrime - An interactive web application that displays real-time crime data across Los Angeles, filtered by type. Users can report suspicious activities by selecting a location on the map, with each report validated by geographic coordinates and categorized based on recent crime patterns. A community-driven voting system ensures the reliability of user-submitted reports, empowering locals to stay informed and engaged with neighborhood safety",
  },
  {
    year: "Mar 2024",
    title: "HackUTA - 8 hour long challenge",
    description: "Collaborated in a team to design and develop three websites on the Wix platform within short time span,focusing on Education, Residence, and Artificial Intelligence domains achieving runner-up position",
  },
  {
    year: "Apr 2023",
    title: "Datathon - 24 hour challenge",
    description: "Collaborated in a team of four during a 24-hour challenge to develop an image classification model and a BERT-based model for verifying the factual accuracy of tweets",
  },  
  
]

export const CONTACT = {
  address: "Arlington, Texas, USA - 76013",
  phoneNo: "+12 4555 666 00",
  email: "nandishdpatel22@gmail.com",
};

