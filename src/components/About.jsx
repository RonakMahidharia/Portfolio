import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { myphoto } from "../assets"
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    
    <div className="flex flex-col xl:flex-row justify-between item-center">
      <div className="flex flex-col">

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>


      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[40px]'
      >
        I am deeply passionate about UI/UX designer and front-end developer. With a robust technical background, I understand the synergy between technology and design—a harmonious blend that transforms a concept into a complete package. My approach integrates functionality with aesthetic finesse, ensuring that every product not only meets the technological requirements but also delivers a compelling user experience. It's about creating solutions that are not just technologically sound but also intuitively designed to cater to the needs and delight of the end-user.
      </motion.p>
      </div>

     
    <img src={myphoto} className="mt-10 w-[20rem] h-[24rem] rounded-[20px] border-2 border-[#804dee] text-center"/>
    </div>
      
  );
};

export default SectionWrapper(About, "about");
