// Organized project images by folder. Add your images as described below.
import studVerifyMain from '../assets/projects/studverify/main.jpeg';
import studVerifyGallery1 from '../assets/projects/studverify/main.jpeg';
import studVerifyGallery2 from '../assets/projects/studverify/main.jpeg';

import pcBuddyMain from '../assets/projects/pcbuddy/main.jpeg';
import pcBuddyGallery1 from '../assets/projects/pcbuddy/main.jpeg';
import pcBuddyGallery2 from '../assets/projects/pcbuddy/main.jpeg';

import uniConnectMain from '../assets/projects/uniconnect/main.jpeg';
import uniConnectGallery1 from '../assets/projects/uniconnect/main.jpeg';
import uniConnectGallery2 from '../assets/projects/uniconnect/main.jpeg';

import timetableMain from '../assets/projects/timetabling-system/main.png';
import timetableGallery1 from '../assets/projects/timetabling-system/gallery1.png';
import timetableGallery2 from '../assets/projects/timetabling-system/gallery1.png';

import tuyaMain from '../assets/projects/tuya-billing/main.png';
import tuyaGallery1 from '../assets/projects/tuya-billing/main.png';
import tuyaGallery2 from '../assets/projects/tuya-billing/main.png';

import smartSpaceMain from '../assets/projects/smart-space/main.png';
import smartSpaceGallery1 from '../assets/projects/smart-space/main.png';
import smartSpaceGallery2 from '../assets/projects/smart-space/main.png';

export const projectsData = {
  "mobile-apps": [
    {
      id: 1,
      slug: "studverify",
      title: "StudVerify",
      shortDescription: "An app that allows examiners to verify student information and fee balances using QR codes.",
      fullDescription: "StudVerify is a comprehensive mobile application designed to streamline the student verification process in educational institutions. The app utilizes QR code technology to instantly verify student information and fee payment status, making it an essential tool for examiners and administrators.\n\nKey features include real-time database synchronization, offline capabilities for areas with poor connectivity, and a secure authentication system. The app significantly reduces verification time from minutes to seconds and eliminates the need for manual paperwork.",
      technologies: ["Jetpack Compose", "Firebase", "Material-UI", "QR Code Scanner", "Authentication"],
      category: "mobile-apps",
      image: studVerifyMain,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore",
      features: [
        "QR code scanning for instant verification",
        "Real-time student data retrieval",
        "Fee balance checking",
        "Offline mode support",
        "Secure user authentication",
        "Admin dashboard for data management"
      ],
      challenges: [
        "Implementing reliable QR code scanning in various lighting conditions",
        "Ensuring data synchronization between offline and online modes",
        "Optimizing app performance for older Android devices"
      ],
      outcomes: [
        "Reduced verification time by 85%",
        "Eliminated manual paperwork errors",
        "Improved examination efficiency"
      ],
      gallery: [
        studVerifyGallery1,
        studVerifyGallery2
      ]
    },
    {
      id: 2,
      slug: "pc-buddy",
      title: "PC Buddy",
      shortDescription: "An Android app that displays PC specifications and allows users to compare different models.",
      fullDescription: "PC Buddy is an innovative Android application that serves as a comprehensive PC specification viewer and comparison tool. Built with modern Android development practices, it provides users with detailed hardware information and enables side-by-side comparisons of different computer models.\n\nThe app integrates with the OSHI (Operating System and Hardware Information) library to gather real-time system information and uses Ktor for efficient networking. It features a clean, intuitive interface built with Jetpack Compose, making it easy for both tech enthusiasts and casual users to understand complex hardware specifications.",
      technologies: ["Jetpack Compose", "Ktor", "OSHI", "Material Design 3", "Kotlin Coroutines"],
      category: "mobile-apps",
      image: pcBuddyMain,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore",
      features: [
        "Real-time PC specification detection",
        "Side-by-side model comparison",
        "Performance benchmarking",
        "Hardware compatibility checking",
        "Detailed component information",
        "Export specifications to PDF"
      ],
      challenges: [
        "Handling diverse hardware configurations",
        "Optimizing network requests for specification data",
        "Creating an intuitive comparison interface"
      ],
      outcomes: [
        "Simplified PC buying decisions for users",
        "Provided accurate hardware information",
        "Streamlined comparison process"
      ],
      gallery: [
        pcBuddyGallery1,
        pcBuddyGallery2
      ]
    },
    {
      id: 3,
      slug: "uni-connect",
      title: "Uni Connect",
      shortDescription: "An Android app that allows students to connect with each other and share resources.",
      fullDescription: "Uni Connect is a social networking application specifically designed for university students to connect, collaborate, and share academic resources. The app creates a digital campus environment where students can form study groups, share notes, ask questions, and build meaningful academic relationships.\n\nBuilt with Jetpack Compose and Firebase, the app offers real-time messaging, file sharing capabilities, and a robust user authentication system. The platform encourages academic collaboration while maintaining a safe and moderated environment for all users.",
      technologies: ["Jetpack Compose", "Firebase", "Cloud Firestore", "Firebase Auth", "Material Design 3"],
      category: "mobile-apps",
      image: uniConnectMain,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore",
      features: [
        "Student profile creation and management",
        "Real-time messaging and chat rooms",
        "Resource sharing (notes, documents, links)",
        "Study group formation and management",
        "Academic calendar integration",
        "Course-based communities"
      ],
      challenges: [
        "Implementing real-time messaging at scale",
        "Ensuring content moderation and safety",
        "Managing file uploads and storage efficiently"
      ],
      outcomes: [
        "Improved student collaboration",
        "Enhanced resource sharing",
        "Stronger academic community building"
      ],
      gallery: [
        uniConnectGallery1,
        uniConnectGallery2
      ]
    }
  ],
  "fullstack": [
    {
      id: 4,
      slug: "timetabling-system",
      title: "Timetabling System",
      shortDescription: "A web application for creating and managing University timetables.",
      fullDescription: "The Timetabling System is a comprehensive web application designed to automate and streamline the complex process of creating university course schedules. The system addresses the challenging task of scheduling courses while considering multiple constraints such as room availability, instructor schedules, and student enrollment.\n\nBuilt with React for a responsive user interface and powered by a robust backend, the system uses advanced algorithms to optimize schedule generation. The application includes features for conflict detection, automatic scheduling suggestions, and real-time updates to accommodate last-minute changes.",
      technologies: ["React", "PostgreSQL", "Ktor", "Material-UI", "Redux", "WebSocket"],
      category: "fullstack",
      image: timetableMain,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore",
      features: [
        "Automated timetable generation",
        "Conflict detection and resolution",
        "Real-time schedule updates",
        "Multi-constraint optimization",
        "Interactive calendar interface",
        "Export to multiple formats (PDF, Excel, iCal)"
      ],
      challenges: [
        "Implementing complex scheduling algorithms",
        "Handling multiple scheduling constraints simultaneously",
        "Ensuring real-time synchronization across users"
      ],
      outcomes: [
        "Reduced timetable creation time by 70%",
        "Eliminated scheduling conflicts",
        "Improved resource utilization"
      ],
      gallery: [
        timetableGallery1,
        timetableGallery2
      ]
    },
    {
      id: 5,
      slug: "tuya-billing",
      title: "Tuya Billing System",
      shortDescription: "A comprehensive billing system with M-Pesa integration for seamless payments.",
      fullDescription: "Tuya Billing System is a full-stack web application designed to streamline the billing process for businesses in Kenya and across East Africa. The system integrates seamlessly with M-Pesa, the region's most popular mobile money platform, enabling instant and secure payment processing.\n\nBuilt with React for the frontend and Node.js/Express for the backend, Tuya offers an intuitive interface for both businesses and customers. It features real-time payment tracking, automated receipts, and detailed analytics to help businesses manage their finances efficiently.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "M-Pesa API", "JWT Authentication"],
      category: "fullstack",
      image: tuyaMain,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore",
      features: [
        "M-Pesa integration for real-time payments",
        "Automated invoice generation and delivery",
        "Payment tracking and notifications",
        "Financial reporting and analytics",
        "Customer management system",
        "Multi-currency support"
      ],
      challenges: [
        "Ensuring secure integration with M-Pesa API",
        "Handling payment reconciliation in real-time",
        "Building a scalable system for high transaction volumes"
      ],
      outcomes: [
        "Reduced payment processing time by 90%",
        "Increased payment collection rate",
        "Improved business financial visibility"
      ],
      gallery: [
        tuyaGallery1,
        tuyaGallery2
      ]
    },
    {
      id: 6,
      slug: "smart-space",
      title: "Smart Space",
      shortDescription: "An event space management system for seamless venue booking and management.",
      fullDescription: "Smart Space is a comprehensive event venue management platform that simplifies the process of booking and managing event spaces. The system provides a seamless experience for both venue owners and clients looking to book spaces for events.\n\nThe platform includes features for real-time availability checking, automated booking confirmation, payment processing, and detailed venue analytics. Venue owners can manage multiple spaces, customize availability, and track bookings and revenue through a powerful dashboard.",
      technologies: ["React", "Firebase", "Cloud Functions", "Google Calendar API", "Stripe", "Material-UI"],
      category: "fullstack",
      image: smartSpaceMain,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore",
      features: [
        "Real-time venue availability calendar",
        "Instant booking and confirmation",
        "Secure payment processing",
        "Venue capacity and facility management",
        "Event scheduling and conflict resolution",
        "Analytics dashboard for venue owners"
      ],
      challenges: [
        "Implementing complex booking logic with conflict prevention",
        "Synchronizing with external calendar systems",
        "Building a responsive UI for both mobile and desktop"
      ],
      outcomes: [
        "Streamlined booking process from hours to minutes",
        "Improved venue utilization rates",
        "Enhanced customer satisfaction with instant confirmations"
      ],
      gallery: [
        smartSpaceGallery1,
        smartSpaceGallery2
      ]
    }
  ]
};

export const getProjectBySlug = (slug) => {
  for (const category in projectsData) {
    const project = projectsData[category].find(p => p.slug === slug);
    if (project) return project;
  }
  return null;
};

export const getAllProjects = () => {
  return Object.values(projectsData).flat();
};
