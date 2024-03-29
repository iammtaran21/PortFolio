import {
    mobile,
    backend,
    creator,
    web,
    Gen_AI,
    IIT_M,
    DS_Port,
    Resume,
    javascript,
    typescript,
    html,
    big,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    ntt,
    t,
    github,
    tripguide,
    threejs,
    ljmu,
  } from "../assets";

  export const certificate = [
    { name: 'Advanced Cerificate in Machine Learning and Cloud', previewImage: IIT_M, link: 'https://www.credential.net/b6704f94-eac3-49f4-8b4f-ae704b951c2e' },
    { name: 'Advanced Certificate in Generative AI', previewImage: Gen_AI, link: 'https://www.credential.net/0e3b6bc9-13d3-4a37-b492-b27b5c653314' },
    { name: 'Machine Learning Projects', previewImage: DS_Port, link: 'https://iammtaran21.github.io/DS-Portfolio_T/' },
    { name: 'Resume', previewImage: Resume, link: 'https://drive.google.com/file/d/1W9AUyqmpt4meYc3uHrMpTp8_8Lx8ZDfP/view?usp=sharing' }
    // Add more certification objects as needed
  ];
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Big Data Engineer",
      icon: big,
    },
    {
      title: "Generative AI Practioner",
      icon: mobile,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Big Data Engineer",
      company_name: "NTT Data",
      icon: ntt,
      iconBg: "#383E56",
      date: " 2022 - Present",
      points: [
        "• Collaborated with a team to maintain a Big Data based Ticketing System",
        "• Utilized React and SQL for creating a Dashboard to analyse the Data incoming from Station terminals.",
        "• Automated and optimised the shell scripts in production, working with Ubuntu 20.04 , and deployed other Linux tools."
      ],
    },
    {
      title: "Master Thesis Project",
      company_name: "LJMU,UK",
      icon: ntt,
      iconBg: "#E6DEDD",
      date: " 2022 - 2023",
      points: [
        "Sentiment Analysis and Sarcasm Detection for MS.", 
        "A BERT based Transformers model to Detect Sarcasm Detection in Tweets."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "NTT Data",
      icon: ljmu,
      iconBg: "#E6DEDD",
      date: " 2022 - Present",
      points: [
        "Developed a full stack Flutter Application for calculating Carbon footprint of a user.",
        "Internationalized a React FoodStore Application to be available for different Regions of world",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };