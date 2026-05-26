import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number; onComingSoon: () => void } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  onComingSoon,
}) => {
  const featuredImageHeight =
    index < 3 ? "h-[300px] sm:h-[330px]" : "h-[230px]";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div
          onClick={() => {
            if (sourceCodeLink) {
              window.open(sourceCodeLink, "_blank");
            } else {
              onComingSoon();
            }
          }}
          className="bg-tertiary w-full rounded-2xl p-5 cursor-pointer"
        >
          <div className={`relative w-full ${featuredImageHeight}`}>
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            {sourceCodeLink && sourceCodeLink.includes("github.com") && (
              <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(sourceCodeLink, "_blank");
                  }}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            onComingSoon={() => setShowModal(true)} 
          />
        ))}
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-tertiary border-secondary w-full max-w-[400px] rounded-2xl border p-8 text-center shadow-2xl"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-secondary/20 flex h-16 w-16 items-center justify-center rounded-full">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
              <h3 className="mb-4 text-[24px] font-bold text-white">Coming Soon!</h3>
              <p className="text-secondary mb-8 text-[16px]">
                We are working hard to bring this project to life. Stay tuned!
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-secondary w-full rounded-xl px-8 py-3 font-bold text-white transition-colors hover:bg-white hover:text-black outline-none"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");
