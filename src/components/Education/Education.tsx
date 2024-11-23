import College from "@/components/College";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ConstrainedTitle } from "@/components/SectionTitle";
import styles from "./Education.module.css";

const COLLEGES = [
    {
        degree: "Master of Science in Information Systems",
        school: "University of North Texas",
        courses: [
            "Information Sysytems Development",
            "Information Systems Security",
            "Web-based Systems Development",
            "Enterprise Data Warehousing",
            "Programming for Business Analytics",
            "Data Visualization",
            "Blockchain and Cryptocurrency",
        ],
        start: 2022,
        end: 2024,
        gpa: "4.0",
        imgSrc: "/Portfolio/images/unt.jpeg",
    },
    {
        degree: "Bachelor of Technology",
        school: "Indian Institute of Technology, Ropar",
        courses: [
            "Data Structures & Algorithms",
            "Introduction to Computing",
            "Probability theory and Stochastic Processes"
        ],
        start: 2016,
        end: 2020,
        gpa: "",
        imgSrc: "/Portfolio/images/iitr.jpeg",
    },
];

const Education: React.FC = () => {
  return (
    <div className={styles.education}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Education</ConstrainedTitle>
        <div className={styles.collegeList}>
          <College {...COLLEGES[0]} side="left" />
          <College {...COLLEGES[1]} side="right" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Education;
