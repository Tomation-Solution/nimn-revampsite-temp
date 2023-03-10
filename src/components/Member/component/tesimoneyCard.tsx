import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import classes from "../../styles/comp_bg.module.css";

const EmblaCarousel = (props:any) => {
  const { options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className={`${classes.embla} bg-pri lg:ml-60 ml-0 rounded-lg  mt-32 lg:w-4/5 flex items-center justify-center`}>
      <div className={`${classes.embla__viewport} ` } ref={emblaRef}>
        <div className={`${classes.embla__container} `}>
          {props.descriptions.map((description:any, index:any) => (
            <div className={`${classes.embla__slide} flex items-center justify-center `} key={index}>
              <div className={`${classes.embla__slide__number} `}>
                <span>{index + 1}</span>
              </div>

              <p className={`${classes.embla__slide__content} text-center text-white font-bold lg:px-40 px-0  lg:mt-20 mt-0`}>
                <span className=' lg:text-2xl text-center text-sm'>{description.description}</span>
                <span className=' lg:text-xl text-sm'>{description.des}</span>
                <span className=' lg:text-xl  text-sm'>{description.des2}</span>
                <span className=' lg:text-xl text-p_gray text-sm'>{description.des3}</span> 
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
