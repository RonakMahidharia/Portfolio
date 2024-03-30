import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,

  starbucks,
  tesla,
  
  carrent,
  jobit,
  tripguide,
  threejs,
  AmazonSocial,
  Prodly,
} from "../assets";

import jobimage from '../assets/Photo 1.jpeg'
import jobimage1 from '../assets/Photo 2.jpeg'
import jobimage2 from '../assets/Photo 3.jpeg'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  }
  
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Innovative Data Solutions Private Limited",
    icon: starbucks,
    date: "Nov 2022 - Apr 2023",
    points: [
      "Crafted interactive, responsive web pages using HTML, CSS, and JavaScript, increasing device compatibility by 60%.",
      "Implemented advanced JavaScript methods, such as Arrow functions, Promises, and Asynchronous programming, to significantly elevate website functionality, leading to a 50% improvement in operational efficiency and overall user experience.",
      "Directed and managed a team of 5-6 web developers, leading project initiatives and ensuring timely, high-quality deliverables.",
      "Employed CSS and SASS for efficient coding, incorporating mixins and nesting to simplify design work compared to plain CSS.",
    ],
  },
  {
    title: "Web Content Developer",
    company_name: "Innovative Data Solutions Private Limited",
    icon: tesla,
    date: "May 2022 - Oct 2022",
    points: [
      "Addressed the need for flexible website updates by creating banners and templates in Adobe Experience Manager (AEM).",
      "Customized teaser components for efficient content publishing and resolved link integration issues using accordion helpers.",
      "Enhanced user engagement and content clarity on the website, tailoring components to meet specific client requirements.",
      "Achieved a 45% improvement in application performance over the previous version through strategic form container utilization.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Ronak is very dedicated to his work and the amount of effort he puts into the projects is worth applauding. He was the only sole member in the night shift and managed publishing/rewards activity single-handedly. Due to his outstanding work, we got appreciation from the client. He is very confident and focused regarding any work assigned to him. Congratulations and keep up the good work, Ronak!",
    name: "Harshada Khatavkar",
    designation: "Project Manager",
    company: "Ex-Hurix digital",
    image: jobimage,
  },
  {
    testimonial:
      "Your designs and prototypes are exemplary, showcasing a deep understanding of customer needs and a keen eye for problem-solving. You have consistently delivered solutions that not only meet but exceed expectations. Keep up the outstanding work, and continue to inspire with your creativity and dedication!",
    name: "Malini Sankaran",
    designation: "Senior Engineer",
    company: "Ex-Tata Elxsi",
    image: jobimage1,
  },
  {
    testimonial:
      "It was truly a pleasure collaborating with you, Ronak. Your expertise in navigating the intricacies of project structure and design was exceptional and greatly contributed to our success. Your dedication and talent are commendable. Keep up the fantastic work, and I look forward to the opportunity to work together again in the future.",
    name: "Jay Parekh",
        designation: "Associate Analyst",
    company: "Ex-Analog device",
    image: jobimage2,
  },
];

const projects = [
  {
    source:'figma',
    name: "Unity Hub",
    description:
      "Led the development of Unity Hub, a virtual community platform integrating messaging, multimedia sharing, and specialized sections for matrimony, jobs, and property. Conducted user research to inform age-tailored design decisions. Managed full development cycle from concept to high-fidelity prototype using Figma. Executed usability testing resulting in enhanced user experience.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "product designing",
        color: "green-text-gradient",
      },
      {
        name: "wireframes",
        color: "pink-text-gradient",
      },
      {
        name: "usability testing",
        color: "pink-text-gradient",
      },
      {
        name: "prototyping",
        color: "green-text-gradient",
      },
      {
        name: "sketching",
        color: "blue-text-gradient",
      },
      {
        name: "user-centered design",
        color: "green-text-gradient",
      },
      {
        name: "user flow",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.figma.com/file/euOY7ucVh2Mb1Cey18L7oc/Unity-Hub?type=design&node-id=2318%3A2&mode=design&t=DvEV9oIEpOQULzey-1",
  },
  {
    source:'figma',
    name: "Amazon Social",
    description:
      "Initiated the design of 'Amazon Socia' on Figma, integrating social features into Amazon's app to boost user engagement and community interaction. Designed features for product-related posts, 'Trending Products,' an 'Influencers Hub,' and discussion threads, fostering community engagement, driving sales, and enhancing user trust and support within the app.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "user-centered design",
        color: "green-text-gradient",
      },
      {
        name: "usability testing",
        color: "pink-text-gradient",
      },
      {
        name: "product designing",
        color: "green-text-gradient",
      },
      {
        name: "user flow",
        color: "blue-text-gradient",
      },
      {
        name: "wireframes",
        color: "pink-text-gradient",
      },
      
      {
        name: "prototyping",
        color: "green-text-gradient",
      },
      {
        name: "sketching",
        color: "blue-text-gradient",
      }
    ],
    image: AmazonSocial,
    source_code_link: "https://www.figma.com/file/OeW5xNjp3vZXgKB2ffa4hg/Amazon-Social?type=design&node-id=0%3A1&mode=design&t=TrGiy2nlEKFuUEea-1",
  },
  {
    source:'figma',
    name: "Prodly",
    description:
      "Prodly is an innovative app designed to combat digital distractions by providing an all-in-one platform for focus-enhancing videos, podcasts, and articles. Developed through extensive user research and iterative design processes, including user interviews, empathy mapping, and usability testing, Prodly stands out with its intuitive interface and a vibrant color palette tailored to boost productivity. The app effectively bridges the gap in the market for a holistic productivity tool, promoting deep focus, personal growth, and professional development.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "product designing",
        color: "green-text-gradient",
      },
      {
        name: "user flow",
        color: "blue-text-gradient",
      },
      {
        name: "sketching",
        color: "blue-text-gradient",
      },
      {
        name: "usability testing",
        color: "pink-text-gradient",
      },
      
      
      {
        name: "user-centered design",
        color: "green-text-gradient",
      },
      {
        name: "wireframes",
        color: "pink-text-gradient",
      },
      
      {
        name: "prototyping",
        color: "green-text-gradient",
      },
    ],
    image: Prodly,
    source_code_link: "https://www.figma.com/file/skYNmmxpyTqBKj8CJmw8iy/Prodly?type=design&node-id=0%3A1&mode=design&t=N34Do6r9vpUEwKO2-1",
  },
  {
    source:'github',
    name: "Connect Engine",
    description:
      "Developed ConnectEngine, a dynamic social media platform targeting young adults and professionals. Utilized React for interactive components, Node.js and Express.js for backend development, WebSocket for real-time updates, and MongoDB for optimized performance. Implemented JWT for secure authentication and utilized Webpack for efficient asset management, resulting in an engaging and secure user experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "MERN stack",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "CRUD operation",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/adityaprakashneu/ConnectEngine-SocialMediaApplication.git",
  },
  {
    source:'github',
    name: "Crisis Responsive System",
    description:
      "Created a Java-based Emergency Management System to optimize government response to critical incidents. Optimized startup data management by integrating DB4, achieving a 60% increase in application flexibility. Designed a role-based system with super admin, admin, and user levels, and departmental categorization for hospitals, fire services, shelters, and police, enhancing efficiency in complaint management and service responsiveness.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "agile crisis management",
        color: "green-text-gradient",
      },
      {
        name: "java-swing",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/aed5100/final-project-team-rjs-1.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
