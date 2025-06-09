import aboutImg from '../assets/aboutSection.jpg';
import { ABOUT_FIRST, ABOUT_SECOND } from '../constants';
import {motion} from "motion/react";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 w-[80%] ms-14' id="aboutme">
        <h2 className='my-20 text-center text-4xl text-blue-400'>About Me</h2>
        <div className='flex flex-wrap'>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}}  className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center items-center'>
                    <img className="rounded-2xl sm:w-50" width={400} src={aboutImg} alt="about image" />
                </div>
                
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0} } initial={{opacity:0,x:100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
                <div className='flex justify-center'>
                    <p className='my-2 max-w-xl py-3 md:py-6 md:text-lg text-sm'>{ABOUT_FIRST}</p>
                </div>
                <div className='flex justify-center'>
                    <p className='my-2 max-w-xl py-3 md:py-6 md:text-lg text-sm'>{ABOUT_SECOND}</p>
                </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About;
