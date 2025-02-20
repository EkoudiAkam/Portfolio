import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import styles from '../../styles'
import { experiences } from '../js/constante'
import SectionWrap from '../navigation/SectionWrap'
import { textVariant } from '../js/motion'



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black`}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{background:'#000', color: '#ffffff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[100%] h-[100%] object-contain"        
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-primary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className="text-primary text-[14px] pl-1 tracking-wider">
            {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)



export default SectionWrap(Experience, "work")