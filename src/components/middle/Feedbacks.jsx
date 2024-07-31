import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles'
import SectionWrap from '../js/wrap'
import { fadeIn, textVariant } from '../js/motion'
import { testimonials } from '../js/constante'



const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-red-100 rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What our clients say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-20 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) =>(
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}


const FeedbackCard = ({index, testimonial,name, designation, company, image}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div>
      {/*  <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="m-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary test-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img 
          src={image} 
          alt={`feedback-by-${name}`} 
          className="object-cover w-10 h-10 rounded-full"
        />
      </div> */}
    </div>
  </motion.div>
)



export default SectionWrap(Feedbacks, "")