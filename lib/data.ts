import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import covid from "@/public/covid.png";
import metrobite from "@/public/metrobite.png";
import superstore from "@/public/superstore.png";
import jdih from "@/public/jdih.png";
import tea from "@/public/teh_classification.jpg"
import wades from "@/public/wades.png"
import beam_locator from "@/public/beam_locator.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Majoring in IT - State Polytechnic of Malang",
    location: "Malang, East Java",
    description:
      "Studying Information Technology at State Polytechnic of Malang with deep interest in data science field.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Data/Software Engineer",
    location: "Central Jakarta, DKI Jakarta",
    description:
      "I took an MSIB Batch 6 internship program at Kementrian Keuangan Republik Indonesia as a Data/Software Engineer. I was responsible for developing a legal analytics web-app using NextJS, TailwindCSS, and Prisma for the web development and Python for data and insight extraction.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb - June 2024",
  },
  {
    title: "Data Scientist",
    location: "Bogor, West Java",
    description:
      "I took an internship program at PT Telkom Satelit Indonesia as a Data Scientist. I was responsible for developing a Beam mapping web-app using Streamlit, Pandas, and Plotly for the data visualization and Python for the data processing. I also developed a RAG system with LLaMA 3.2-1B models for internal data analysis.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug - Dec 2024",
  }
] as const;

export const projectsData = [
  {
    title:"Beam Locator",
    description:"Beam Locator is a web-based system to locate satellite beams and their coverage area on the map.",
    tags:["Streamlit", "Pandas", "Plotly", "Python"],
    imageUrl:beam_locator,
  },
  {
    title:"WADES",
    description:"WADES is an innovative WhatsApp bot and web-based system for Kelurahan Dinoyo",
    tags:["React", "Laravel", "MySQL", "Tailwind", "Node.js"],
    imageUrl:wades,
  },
  {
    title:"Legalytics JDIH Kemenkeu",
    description:"Legal analytics web-app for Kementrian Keuangan Republik Indonesia to analyze legal documents and extract insights.",
    tags:["React", "Next.js", "OpenSearch", "Tailwind", "Prisma", "Python"],
    imageUrl:jdih,
  },
  {
    title: "Tea Classification",
    description:
      "An end-to-end machine learning project to classify tea types from arduino sensor data. It uses PyQT for the GUI and Arduino for data collection.",
    tags: ["Python", "PyQT", "Pandas", "Arduino-Serial"],
    imageUrl: tea,
  },
  {
    title: "Metro Bite",
    description:
      "Metro Bite is a end-to-end data analytics dashboard for vending machine in Jakarta to analyze total sales and vending machine peroformance.",
    tags: ["Python", "Looker Studio", "Microsoft Excel", "SQL"],
    imageUrl: metrobite,
  },
  {
    title: "Post-Covid Economy Analysis",
    description:
      "A data analytics project to analyze the world's post-covid economy using Python and Looker Studio.",
    tags: ["Python", "Looker Studio", "Microsoft Excel", "SQL"],
    imageUrl: covid,
  },
  {
    title: "SuperStore Analysis",
    description:
      "A data analytics project to analyze SuperStore sales data and extract insights using Python and Looker Studio.",
    tags: ["Python", "Microsoft Power BI", "Microsoft Excel", "SQL"],
    imageUrl: superstore,
  },
] as const;

export const skillsData = [
  "Computer Vision",
  "Large Language Models",
  "Git",
  "Python",
  "FastAPI",
  "Flask"
] as const;
