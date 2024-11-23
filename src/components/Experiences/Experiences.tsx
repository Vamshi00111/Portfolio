import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline}/>
          {/*<div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/images/unt-small.jpeg"
                alt="UNT"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  height={100}
                  width={100}
                  className={styles.mobileImage}
                  src="/images/unt-small.jpeg"
                  alt="UNT"
              ></Image>
              <p className={styles.time}>Mar 2023 - Dec 2024</p>
              <h4 className={styles.company}>UNT College of Science</h4>
              <h4 className={styles.role}>Lead Technology Specialist</h4>
              <p className={styles.description}>
                // Add the text
              </p>
            </div> 
          </div>*/}

          <div className={styles.item}>
            <Image
                height={100}
                width={100}
                className={styles.image}
                src="/Portfolio/images/tcs.jpeg"
                alt="Tata Consultancy Services"
            ></Image>
            <div className={styles.connector}/>
            <div className={styles.infos}>
              <div className={styles.bullet}>
                <div className={styles.dotPrimary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <Image
                      className={styles.mobileImage}
                      height={100}
                      width={100}
                      src="/Portfolio/images/tcs.jpeg"
                      alt="Tata Consultancy Services"
                  ></Image>
                  <p className={styles.time}>April 2022 - Dec 2022</p>
                  <h4 className={styles.company}>Tata Consultancy Services</h4>
                  <h4 className={styles.role}>Senior Software Developer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Led a cross-functional team of 6 in developing and launching a comprehensive e-commerce solution, resulting in a 40% increase in client engagement and a 25% rise in sales within the first quarter.<br></br>
                    ⦿ &nbsp; &nbsp; Developed a recommendation model with Python and TensorFlow, achieving 90% accuracy and integrating APIs into the e-commerce platform.<br></br>
                    ⦿ &nbsp; &nbsp; Revamped deployment processes using Docker, Kubernetes, and CI/CD pipelines, reducing deployment time by 30% and achieving 96% uptime.
                  </p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Oct 2020 - April 2022</p>
                  <h4 className={styles.role}>Software Engineer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Pioneered the creation of the NiEOCOM project, a microservices-based, headless commerce platform for elite US-based clients like FreshThyme, Chobani, and Holiday Meals.<br></br>
                    ⦿ &nbsp; &nbsp; Implemented impactful UI enhancements using ReactJS and NextJS, boosting session duration by 20% and reducing bounce rates by 15%. Optimized state management, cutting loading times by 30%.<br></br>
                    ⦿ &nbsp; &nbsp; Designed and built 15+ RESTful APIs with Spring Boot, utilizing Java, MongoDB, Hibernate, and PostgreSQL, improving data processing efficiency by 25%.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/Portfolio/images/codeunity.jpeg"
                alt="Code Unity"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  className={styles.mobileImage}
                  height={100}
                  width={100}
                  src="/Portfolio/images/codeunity.jpeg"
                  alt="Code Unity"
              />
              <p className={styles.time}> Jan 2020 - Oct 2020</p>
              <h4 className={styles.company}>CodeUnity</h4>
              <h4 className={styles.role}>
                Software Developer
              </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Spearheaded the development of TS-bPASS Admin Console using ReactJS and React hooks, integrating GraphQL and RESTful APIs, resulting in a 25% reduction in data exchange latency.<br></br>
                ⦿ &nbsp; &nbsp; Crafted Admin and User Consoles for OHR using React, integrated Redux for state management, and implemented MVC architecture, achieving a 30% improvement in page loading speed and enhanced scalability through reusable components.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/Portfolio/images/azguard.jpeg"
                alt="Azguard"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  className={styles.mobileImage}
                  height={100}
                  width={100}
                  src="/Portfolio/images/azguard.jpeg"
                  alt="Azguard"
              />
              <p className={styles.time}> May 2019 - Oct 2019</p>
              <h4 className={styles.company}>Azguard</h4>
              <h4 className={styles.role}>
                Software Developer Intern
              </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Implemented scalable UI components using ReactJS with SCSS, optimizing performance by 30% through efficient styling and component reuse.<br></br>
                ⦿ &nbsp; &nbsp; Orchestrated KYC verification functionality and Redux state management, ensuring a seamless user experience and integration with GraphQL APIs for the WeInvest client’s website.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
