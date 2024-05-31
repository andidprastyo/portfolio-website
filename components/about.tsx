"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an undergraduate student majoring in{" "}
        <span className="font-medium">Information Technology</span>, I decided to pursue my
        passion for applied statistics, data analysis, machine learning and also web development.{" "}
        My core stack for web development
        is{" "}
        <span className="font-medium">
          Next.js, Laravel, TypeScript, Tailwind-CSS, Prisma and OpenSearch
        </span>. I am also familiar with {" "}
        <span className="font-medium">
          Python, Pandas, Scikit-Learn, Microsoft Excel, SQL, Tableau, Power BI, and Google Looker Studio
        </span> for data analysis and predictive modelling. {" "}
        I am always looking to
        learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">internship</span> in the field of data science or web development.
      </p>
    </motion.section>
  );
}
