import React from 'react'
import Ball from '../animation/Ball'
import SectionWrap from '../navigation/SectionWrap'
import {technologies} from '../js/constante'
import BallCanvas from '../animation/Ball'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrap(Tech, "")