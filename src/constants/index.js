import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
// import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `I am an aspiring Computer Science student, graduated in Spring 2025, having with strong expertise in MERN stack development and have experience as a frontend developer. I am passionate about creating innovative and user-friendly web applications that solve real-world problems and alwaye keen to learn new technologies.`;

export const ABOUT_FIRST = `A fitness enthusiast who stays active through regular workouts and sports, including running, cycling, and racket sports like tennis, badminton, and table tennis. I also enjoy listening to music while studying or coding my projects. My second favorite activity is trekking, with one of my most memorable hikes being a trek up to 13,800 feet in Kasol, Himachal Pradesh.`;
export const ABOUT_SECOND = `I am a self-motivated and disciplined individual who is always eager to learn, grow, and develop new skills. I believe in maintaining a well-structured daily routine, which helps me stay focused and productive. As a quick learner, I adapt swiftly to new challenges, and I value collaboration, understanding that success is best achieved by working effectively within a team. I’m committed to continuous improvement and approach every opportunity with enthusiasm and a positive outlook.`;

export const EXPERIENCES = [
  {
    year: "Jan 2023 - Jun 2023",
    role: "Frontend Developer",
    company: "TOPS Technology",
    description: `Developed real-world web applications, including an e-commerce platform and education-sector websites, using React, JavaScript, and Tailwind CSS to build responsive and dynamic user interfaces. Designed and implemented reusable React components while leveraging Tailwind CSS for efficient styling, ensuring a seamless and visually appealing user experience. Developing the components by convrting figma design to web pages.`,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap"],
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
    courses: [
      "Software Testing",
      "Software Engineering: Analysis, Design & Testing",
      "AI",
      "Advanced Topics in SE",
      "Design & Analysis of Algorithms",
      "Database Systems",
      "Computer Networks",
      "Computer Vision",
      "Data Mining",
    ],
  },
  {
    year: "Jul 2019 - May 2023",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    university: "Ahmedabad Univeristy",
    address: "Ahmedabad, India",
    gpa: "GPA: 3.0/4.0",
  },
];

export const PROJECTS = [
  {
    title: "Money Minds: Track your finances smarter by simplify budgeting",
    link: "https://github.com/NandishDPatel/Money-Minds",
    image: project6,
    width: 350,
    description:
      "Designed to simplify the process of tracking expenses against budgets. With seamless user authentication via Clerk, users can securely log in and manage their personal financial data. The app allows users to create budgets for specific categories and track individual expenses.",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Clerk",
      "Drizzle ORM",
      "Shadcn UI",
    ],
    links: ["https://github.com/NandishDPatel/Money-Minds"],
  },
  {
    title: "Chatter Box: Real-Time Communication Made Simple",
    link: "https://github.com/NandishDPatel/Chatter-Box",
    image: project7,
    width: 350,
    description:
      "Chatter Box is a real-time chat application built using React.js and Firebase, providing users with a seamless and interactive messaging experience. It leverages Firebase Firestore for real-time message storage and synchronization, along with Firebase Authentication for secure user login.",
    technologies: ["React.js", "Firebase", "Drizzle ORM", "Clerk", "Shadcn"],
    links: ["https://github.com/NandishDPatel/Chatter-Box"],
  },
  {
    title: "Journey Genie: AI powered trip planning platform",
    link: "https://github.com/nandishdpatel/JourneyGenie",
    image: project1,
    width: 350,
    description:
      "Developed essential features including an itinerary planner, links for booking flights and hotels, and a travel journal where users can upload photos and videos. Integrated APIs for a smooth, user-friendly experience, with secure sign-in functionality using google oAuth and reliable travel planning resources.",
    technologies: [
      "React",
      "Gemini AI",
      "Node.js",
      "Express.js",
      "Firebase",
      "Tailwind CSS",
    ],
    links: ["https://github.com/nandishdpatel/JourneyGenie"],
  },
  {
    title: "Geo Compensate: Mobile app for managing the mobile workforce ",
    link: "https://github.com/NandishDPatel/GeoCompensate",
    image: project2,
    height: 150,
    width: 150,
    description:
      "Developed a mobile app that uses GPS to automate payroll, tracking work hours, breaks, and overtime accurately. This solution streamlines workforce management, reduces manual errors, and enables location-based compensation adjustments, enhancing transparency and efficiency for mobile teams.",
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB"],
    links: ["https://github.com/NandishDPatel/GeoCompensate"],
  },
  {
    title: "EShoppy: E-commerce clothing website frontend design",
    link: "https://nandishdpatel.github.io/BTechProject/",
    image: project3,
    height: 350,
    width: 350,
    description:
      "Designed and implemented the front-end of an e-commerce clothing website based on initial prototypes, with a focus on creating an intuitive and seamless user experience. Prioritized responsive design and smooth navigation to ensure accessibility across devices. Applied key UI/UX principles to enhance product discovery, streamline the shopping process, and improve add-to-cart conversion rates.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    links: [
      "https://github.com/NandishDPatel/BTechProject",
      "https://nandishdpatel.github.io/BTechProject/",
    ],
  },
  {
    title: "Digiwheels: An iOS mobile application",
    link: "https://www.figma.com/file/F7DCzEMGs17EA10IySuPza/HCI-Project?node-id=0%3A1",
    image: project4,
    height: 150,
    width: 150,
    description:
      "Created a multi-functional iOS app using Figma, enabling users to access transport information, book appointments, and view essential documents like driver's licenses and vehicle registrations, enhancing user convenience and efficiency.",
    technologies: ["Figma"],
    links: [
      "https://github.com/NandishDPatel/HCI_Figma_DigiWheels",
      "https://www.figma.com/file/F7DCzEMGs17EA10IySuPza/HCI-Project?node-id=0%3A1",
    ],
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
    year: "April 2025",
    title: "Datathon - 24 hour challenge",
    description: "PediBot - ...."
  },
  {
    year: "May 2024",
    title: "HackUTA - 24 hour challenge",
    description:
      "SpotCrime - An interactive web application that displays real-time crime data across Los Angeles, filtered by type. Users can report suspicious activities by selecting a location on the map, with each report validated by geographic coordinates and categorized based on recent crime patterns. A community-driven voting system ensures the reliability of user-submitted reports, empowering locals to stay informed and engaged with neighborhood safety",
  },
  {
    year: "Mar 2024",
    title: "HackUTA - 8 hour long challenge",
    description:
      "Collaborated in a team to design and develop three websites on the Wix platform within short time span,focusing on Education, Residence, and Artificial Intelligence domains achieving runner-up position",
  },
  {
    year: "Apr 2024",
    title: "Datathon - 24 hour challenge",
    description:
      "Collaborated in a team of four during a 24-hour challenge to develop an image classification model and a BERT-based model for verifying the factual accuracy of tweets",
  },
];

export const CONTACT = {
  address: "Arlington, Texas, USA - 76013",
  phoneNo: "+12 4555 666 00",
  email: "nandishdpatel22@gmail.com",
};

export const NAVBAR_LINKS = [
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Curricular Activities", id: "activities" },
  { name: "Technologies", id: "technologies" },
  { name: "About Me", id: "aboutme" },
  { name: "Bootstrap Projects", id: "miniprojects" },
  { name: "Contact", id: "contact" },
];
