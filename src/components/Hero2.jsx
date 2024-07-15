import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import { FiDownload } from "react-icons/fi";
import about from "../images/Vamshi-About.png";
import Cv from "../constants/Resume_VamshiKrishna.pdf";

const Hero2 = () => {
  const name = "About me.".split("");

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-800 ">
        {/*container*/}
        <div className="grid items-center gap-4 md:gap-6 lg:gap-8 justify-items-center lg:grid-cols-2">
          {/*image*/}
          <div className=" w-[200px] md:w-[200px] lg:w-[300px] xxl:w-[400px]">
            <motion.img
              variants={fadeIn("up", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              src={about}
              alt="A fun vector image depicting Giorgio Faini working on his pc"
            />
          </div>
          {/*text-box*/}
          <div className="grid items-center gap-1 md:gap-2 lg:gap-3 justify-items-center w-[500px] md:w-[500px]">
            {/*title*/}
            <motion.div
              className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v"
              variants={fadeIn("down", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              {name.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            {/*text*/}
            <div className="flex flex-col text-justify text-neutral-600">
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              I am a skilled Software Developer with nearly 3 years of experience specializing in ReactJS, Python, and Spring Boot. My expertise lies in full-stack development, microservices architecture, and leading complex projects. Currently, I am pursuing a Master’s in Information Systems and Technologies at the University of North Texas, with a perfect 4.0 GPA. And I hold a Bachelor's degree from the prestigious Indian Institute of Technology (IIT) Ropar.


            </motion.p>
            <div className="h-4"></div> {/* Empty line */}
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              I have successfully led teams, developed high-accuracy data-driven models, and optimized web applications for top-tier clients. I am seeking full-time opportunities in the USA to leverage my skills and contribute to innovative software solutions.
            </motion.p>
          </div>
            {/*cv button*/}
            <motion.div
              className="px-5 py-2 mt-2 text-sm font-bold text-white uppercase border-b-4 rounded-full bg-vBtn bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v"
              variants={fadeIn("down", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <a
                className="flex items-center gap-2"
                href={Cv}
                download="CV-Vamshi"
                rel="noopener noreferrer"
              >
                <FiDownload size={20} />
                <p className="font-semibold ">download cv</p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
