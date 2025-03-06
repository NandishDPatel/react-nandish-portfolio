
import { motion } from "motion/react";
// import { EDUCATION } from '../constants';
// import { CURRICULAR_ACTIVITIES } from '../constants';

const CurricularActivities = () => {
    return (
        <div className='border-b border-neutral-900 pb-4' id="activities">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl text-blue-400'>Curricular Activities</motion.h2>
            <div>
                    <div  className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                            <p className='mb-2 text-lg text-neutral-400'>May 2023</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 text-lg text-semibold'> <span className='font-semibold'>HackUTA - 24 hour challenge</span>
                            </h6>
                            <p className='mb-4 text-neutral-200'> <span className='text-neutral-400 text-sm'> <a href='https://devpost.com/software/spotcrime' target='_blank' className='text-green-400 border-b-2 border-green-400 hover:text-black hover:border-b-black hover:bg-white '>SpotCrime</a> - An interactive web application that displays real-time crime data across Los Angeles, filtered by type. Users can report suspicious activities by selecting a location on the map, with each report validated by geographic coordinates and categorized based on recent crime patterns. A community-driven voting system ensures the reliability of user-submitted reports, empowering locals to stay informed and engaged with neighborhood safety</span></p>
                        </motion.div>
                    </div>

                    <div  className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                            <p className='mb-2 text-lg text-neutral-400'>Mar 2023</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 text-lg text-semibold'> <span className='font-semibold'>HackUTA - 8 hour challenge</span>
                            </h6>
                            <p className='mb-4 text-neutral-200'> <span className='text-neutral-400 text-sm'> Collaborated in a team to design and develop three websites on the Wix platform within short time span,focusing on <a href='https://khadkaanamol87.wixsite.com/my-site-2' target='_blank' className='text-green-400 border-b-2 border-green-400 hover:text-black hover:border-b-black hover:bg-white'>Education</a>, <a href='https://khadkaanamol87.wixsite.com/my-site-6' target='_blank' className='text-green-400 border-b-2 border-green-400 hover:text-black hover:border-b-black hover:bg-white'>Residence</a>, and <a href='https://khadkaanamol87.wixsite.com/my-site-3' target='_blank' className='text-green-400 border-b-2 border-green-400 hover:text-black hover:border-b-black hover:bg-white'>Artificial Intelligence</a> domains achieving <strong className='text-bold text-lg'>runner-up</strong> position</span></p>
                        </motion.div>
                    </div>

                    <div  className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                            <p className='mb-2 text-lg text-neutral-400'>Apr 2023</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 text-lg text-semibold'> <span className='font-semibold'>Datathon - 24 hour challenge</span>
                            </h6>
                            <p className='mb-4 text-neutral-200'> <span className='text-neutral-400 text-sm'> Collaborated in a team of four during a 24-hour challenge to develop an image classification model and a BERT-based model for verifying the factual accuracy of tweets</span></p>
                        </motion.div>
                    </div>
            </div>
        </div>
    )
}

export default CurricularActivities
