import { CONTACT } from '../constants'
import { motion } from 'motion/react';
import resume from '../assets/NandishPatel.pdf'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' id="contact">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Get In Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='text-blue-500'><a href={resume} download="NandishPatel.pdf" className='border-b  border-b-blue-500 text-2xl '>Resume</a></motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='my-4'>{CONTACT.address}</motion.p>
        <a href="mailto:nandishdpatel22@gmail.com" className='border-b' rel="noopener noreferrer">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact;
