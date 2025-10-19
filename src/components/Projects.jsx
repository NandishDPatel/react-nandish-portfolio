import { PROJECTS } from '../constants'
import {motion} from "motion/react";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' id="projects">
    <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl text-blue-400 font-bold'>Projects</motion.h2>
    <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
                <motion.div  whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                <img src={project.image} height={project.height} width={project.width} alt={project.name} className='mb-6 rounded'/> 
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold text-green-400'><a href={project.link} target='_blank' className='border-b-2 border-b-green-400 hover:text-black hover:border-b-black hover:bg-white'>{project.title}</a></h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                <div>
                {project.technologies.map((technology, index) => (
                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400'>
                        {technology}
                        </span>
                ))}
                </div>
                <div className='mt-5'>
                {project.links.map((link,index)=>(
                    
                    <a key={index} href={link} target="_blank" className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500 hover:bg-white hover:text-black'>
                        {index==0 ? "Github" : "Website"}
                    </a>
                    
                ))
                }</div>
                </motion.div>

            </div>
        ))}
    </div>
    </div>
  )
}

export default Projects
