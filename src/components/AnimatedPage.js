import { motion } from 'framer-motion'

const animations = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -100}
}
//Component that enables transitions between pages
const AnimatedPage = ({children}) => {
    
    return (
        <motion.div
        className='card-wrapper'
        variants={animations} 
        initial='initial' 
        animate='animate' 
        exit='exit'
        transition={{duration: 0.15}}
        >
        {children}
        </motion.div>
    )
}

export default AnimatedPage