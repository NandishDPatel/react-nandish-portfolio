import { HERO_CONTENT } from '../constants/index';
// import profile from '../assets/heroImage.jpg';
import mainImage from '../assets/nandish-portfolio.jpg'
import { motion } from "motion/react";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1},
    transition: {duration: 0.5, delay: delay}
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb=4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col lg:items-start sm:items-center lg:ps-20 '>
                <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 font-medium tracking-tight lg:mt-16 text-8xl sm:text-center text-blue-400'>Nandish Patel</motion.h1>
                {/* <motion.span   variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-400 via-slate-50 to-blue-300 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span> */}
                <motion.span   variants={container(0.5)} initial="hidden" animate="visible" className='text-white text-3xl tracking-wide'>Full Stack Developer</motion.span>
                <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter text-xl sm:text-center md:text-center lg:text-start sm:py-2 lg:px-0 md:px-5 sm:px-10'>{HERO_CONTENT}</motion.p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5, delay:1.2}} className='rounded-2xl m:w-96' width={400} src={mainImage} alt="Profile Picture" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
