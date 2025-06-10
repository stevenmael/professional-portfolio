import { FaAngular, FaJava, FaJs, FaPython, FaUnity } from "react-icons/fa"
import { RiReactjsLine} from "react-icons/ri"
import { SiGodotengine, SiMongodb, SiOracle} from "react-icons/si"
import { TbBrandCSharp, TbBrandNextjs} from "react-icons/tb"
import { AiOutlineDotNet } from "react-icons/ai";
import { motion } from "framer-motion"
const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
             ease: "linear",
             repeat: Infinity,
             repeatType: "reverse",

        }
    }
})
const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
         whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)} className="p-4">
                <SiOracle className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)} className="p-4">
                <FaJava className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)} className="p-4">
                <FaJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)} className="p-4">
                <FaPython className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)} className="p-4">
                <SiGodotengine className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)} className="p-4">
                <FaUnity className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)} className="p-4">
                <AiOutlineDotNet className="text-7xl text-green-500" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies