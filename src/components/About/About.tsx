"use client";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight/Highlight";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MIN_WIDTH } from "breakpoints";
import styles from "./About.module.css";
import { useTheme } from "@/context/ThemeContext";


interface Props {
    delegated?: any;
}

const About = ({ ...delegated }: Props) => {
    const downloadResume = () => {
        window.open("/Portfolio/resume", "_blank");
    };

    const { aboutUrl, aboutUrlSmall } = useTheme();

    return (
        <div className={styles.about} {...delegated} id="about">
            <div className={styles.aboutme}>
                <SectionTitle side={"left"}>About Me</SectionTitle>
                <p className={styles.description}>
                    Hi there! I am Vamshi Krishna, I am a passionate and results-driven 
                    Software Developer with over three years of professional experience 
                    in Full Stack Development and Cloud Technologies. Currently pursuing a Master’s 
                    in Information Systems and Technologies at the University of North Texas (GPA: 4.0), 
                    I hold a Bachelor’s degree from IIT Ropar. My expertise lies in building scalable, 
                    efficient, and impactful 
                    software solutions, specializing in transitioning monolithic systems to microservices, 
                    optimizing backend performance, and enhancing user experiences through modern web 
                    technologies.

                </p>
                <div className={styles.description}>
                    What I Bring to the Table:<br/>
                    <ul className="mt-2 space-y-2 list-inside">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            3+ Years of Professional Experience
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Proficiency in diverse range of programming languages, including Python, Java, TypeScript, JavaScript, and C++, complemented by expertise in frameworks and libraries such as ReactJS, Next.js, Spring Boot, Django, and FastAPI.

                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Strong foundation in Machine Learning and Predictive Modeling, leveraging frameworks like TensorFlow and scikit-learn to create impactful solutions such as recommendation systems and sales optimization models.
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            AWS Certified Developer Associate, with practical experience in cloud platforms like AWS, Google Cloud, and Kubernetes. Proficient in building and deploying containerized applications using Docker and CI/CD pipelines.
                        </li>

                    </ul>
                </div>
                <Button className={styles.download} onClick={downloadResume}>
                    Download Resume
                </Button>
            </div>
            <picture className={styles.picture}>
                <source media={MIN_WIDTH.desktop} srcSet={aboutUrl}/>
                <source media={MIN_WIDTH.tablet} srcSet={aboutUrlSmall}/>
                <img src={aboutUrl} alt="Vamshi Krishna"/>
            </picture>
        </div>
    );
};

export default About;