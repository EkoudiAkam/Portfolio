import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-black "/>
          <div className="w-1 sm:h-80 h-40 black-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-red-500`}>Hi, I'm <span className="text-black">Akam</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            I develop user interfaces, web <br className="sm:block hidden"/> applications, mobile applications 
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-black mb-1"  
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero