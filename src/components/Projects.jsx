import { PROJECTS } from "../constants"
import {motion} from "framer-motion"
import React, { useState } from "react";


const Projects = () => {
  return (
    <div className="pb-4">
        <motion.h2
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
        <div >
           {PROJECTS.map((project, index) => {
            const [expanded, setExpanded] = useState(false);

            return (
                <div key={index} className="mb-12 overflow-hidden text-center">
                {/* Image */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`z-10  lg:w-2/5   mx-auto`}
                >
                    <img
                    src={project.image}
                    alt={project.title}
                    width={250}
                    height={250}
                    className="rounded-3xl mx-auto"
                    />
                </motion.div>

                {/* Show More / Show Less Button */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 inline-block rounded-md border border-stone-600 bg-stone-800/40 px-4 py-2 text-stone-400 backdrop-blur-sm hover:text-stone-300 transition"
                >
                    {expanded ? "Show less" : "Show more"}
                </button>

                {/* Info Panel */}
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{
                    x: expanded ? "0%" : "100%",
                    opacity: expanded ? 1 : 0,
                    }}
                    transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: expanded ? 0.1 : 0,
                    }}
                    className="w-full lg:w-3/5 mx-auto mt-4"
                >
                    {expanded && (
                    <div className="bg-stone-900/70 backdrop-blur-md p-4 rounded-2xl text-stone-300">
                        <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                        <p className="mb-4 text-stone-400">{project.description}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <span
                            key={techIndex}
                            className="bg-stone-800 rounded px-3 py-1 text-sm"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                    )}
                </motion.div>
                </div>
            );
            })}
        </div>        
     </div>
  )
}

export default Projects