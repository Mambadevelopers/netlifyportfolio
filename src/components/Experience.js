import React, { useRef } from "react";
import {motion,useScroll} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
    items-center justify-between md:w-[80%]">
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Independent Jewelry Designer"
            company="JohnDoe-Jewelry"
            companyLink="www.gia.com"
            time="1998-2010"
            address="Mountain View, Greece"
            work="Created custom jewelry pieces for clients, 
            specializing in engagement rings, wedding bands, and personalized jewelry. Collaborated closely with clients to understand their vision and translate it into unique designs. Utilized traditional techniques and modern technologies to bring designs to life, 
            ensuring the highest quality craftsmanship and customer satisfaction."
          />

          <Details
            position="Freelance Graphic Designer"
            company="JaneSmith-Designs"
            companyLink="www.janesmithdesigns.com"
            time="2010-2005"
            address="New York City, USA"
            work="Developed custom graphic designs for clients across various industries, including branding, print materials, and digital assets. Collaborated closely with clients to comprehend their creative vision and transform it into visually appealing designs. Leveraged a combination of traditional design principles and cutting-edge software tools to deliver high-quality artwork that met client specifications and exceeded their expectations."
          />

          <Details
            position="Independent Fashion Designer"
            company="SophieTaylor-Fashion"
            companyLink="www.sophietaylorfashion.com"
            time="2005-2012"
            address="Paris, France"
            work="Designed and crafted unique fashion pieces for clients, specializing in haute couture and ready-to-wear collections. Worked closely with clients to understand their style preferences and translate them into distinctive designs. Incorporated a blend of traditional craftsmanship and innovative techniques to create garments that showcased impeccable quality and attention to detail. Collaborated with skilled artisans and manufacturers to ensure the production of high-end fashion pieces that exceeded client expectations."
          />

          <Details
            position="Independent Interior Designer"
            company="OliviaAnderson-Interiors"
            companyLink="www.oliviaandersoninteriors.com"
            time="2012-Present"
            address="London, United Kingdom"
            work="Provided personalized interior design services to clients, specializing in residential and commercial spaces. Collaborated closely with clients to ascertain their unique aesthetic preferences, functional requirements, and budget constraints. Developed comprehensive design plans, including space layout, color schemes, furniture selection, and lighting design. Utilized a combination of traditional design principles and contemporary trends to create visually stunning and functional spaces. Managed projects from concept to completion, ensuring timely execution and client satisfaction."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
