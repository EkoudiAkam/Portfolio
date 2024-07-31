import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import styles from '../../styles'
import { services } from '../js/constante'
import { fadeIn, textVariant } from '../js/motion'
import SectionWrap from '../js/wrap'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black`} >Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]" 
      >
        I'm skilled software developer with Experience
        in Javascript and python, and expertise in frameworks
        like React, Node.js, React-Native, NextJS, Three.js and Django.
        I'm a quick learner and collaborate closely with clients to 
        create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let's work together to
        bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> 
    </>
  )
}



const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[5px] rounded-[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-primary text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )

}

export default SectionWrap(About, "about")