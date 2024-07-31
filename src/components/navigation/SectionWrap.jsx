import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles'
import { staggerContainer } from '../js/motion'

const SectionWrap = (Component, idName) => 
function HOC() {
    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25}}
            className={`${styles.padding} mx-w-7xl mx-ato reative z-20`}
        > 
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )
}   

export default SectionWrap


