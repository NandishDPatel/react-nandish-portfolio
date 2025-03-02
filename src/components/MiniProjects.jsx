import { motion } from 'framer-motion';
import image1 from '../assets/mini-projects/pineVale_Website.png';
import image2 from '../assets/mini-projects/eduVibeWebsite.png';
import image3 from '../assets/mini-projects/tshirtWebsite.png';

const MiniProjects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Mini Projects</motion.h2>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
                >
                    <a href="https://nandishdpatel.github.io/PineVale-Website/" target='_blank' className=" flex justify-center">
                        <img src={image1} alt="" className="rounded h-auto" />
                    </a>
                    <a href="https://nandishdpatel.github.io/ToolM5-Website/" target='_blank' className="flex justify-center">
                        <img src={image3} alt="" className="rounded   h-auto" />
                    </a>
                    <a href="https://nandishdpatel.github.io/EduVibe-Website/" target='_blank' className="flex justify-center">
                        <img src={image2} alt="" className="rounded h-auto" />
                    </a>
                    
                </motion.div>

            </div>
        </div>
    )
}

export default MiniProjects;
