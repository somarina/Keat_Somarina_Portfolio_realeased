import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import { projects } from '../../constants';
import { config } from '../../constants/config';
import { SectionWrapper } from '../../hoc';
import { TProject } from '../../types';
import { fadeIn } from '../../utils/motion';
import { Header } from '../atoms/Header';

const ProjectCard: React.FC<{ index: number; onComingSoon: () => void } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  onComingSoon,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="w-full">
      <Tilt glareEnable tiltEnable tiltMaxAngleX={25} tiltMaxAngleY={25} glareColor="#ffffff10">
        <div
          onClick={() => {
            if (sourceCodeLink) {
              window.open(sourceCodeLink, '_blank');
            } else {
              onComingSoon();
            }
          }}
          className="group cursor-pointer overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/95 shadow-[0_30px_80px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_45px_100px_rgba(15,23,42,0.75)]"
        >
          <div className="relative overflow-hidden rounded-b-none rounded-[34px] bg-slate-900">
            <div className="relative h-[240px] overflow-hidden">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 top-4 flex justify-end px-4">
                <div className="rounded-full border border-white/15 bg-black/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  {sourceCodeLink ? 'Live' : 'Soon'}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-slate-950 px-6 py-6 sm:px-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full bg-white/5 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Project
              </span>
              <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-secondary/80">
                2025
              </span>
            </div>

            <h3 className="text-[22px] font-semibold leading-tight text-white sm:text-[24px]">
              {name}
            </h3>
            <p className="mt-4 text-[14px] leading-[24px] text-secondary">{description}</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span
                    key={tag.name}
                    className={`rounded-full border border-white/10 px-3 py-1 text-[12px] font-medium text-white/80 ${tag.color}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {index === 2 && (
                  <button
                    type="button"
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                    onClick={() =>
                      window.open(
                        'https://www.mediafire.com/file/q6zl0a9k8eqlezw/cam_explore_group2.apk/file?fbclid=IwY2xjawSchMNleHRuA2FlbQIxMABicmlkETFEcTFFQUlLdGJiMmdyVVVWc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgBA9MTGbd05dBrgPDTJ41OAnQdNm-HTjvF6fcjIaDOKZ-xoSqglxJbwcT4B_aem_Ly1g06rbhdyV-8B0oSnlWw',
                        '_blank'
                      )
                    }
                  >
                    Download App
                  </button>
                )}
                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  {sourceCodeLink ? 'View' : 'Coming Soon'}
                </button>
              </div>
            </div>
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
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 rounded-[40px] border border-white/10 bg-slate-950/80 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <div className="grid gap-8">
          <div className="rounded-[28px] bg-slate-900/90 px-6 py-4">
            <h2 className="text-lg font-semibold uppercase tracking-[0.16em] text-white/90">
              Flutter Mobile App Projects
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                onComingSoon={() => setShowModal(true)}
              />
            ))}
          </div>

          {projects.length > 3 && (
            <>
              <div className="rounded-[28px] bg-slate-900/90 px-6 py-4">
                <h2 className="text-lg font-semibold uppercase tracking-[0.16em] text-white/90">
                  C++ OOP Project
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.slice(3, 4).map((project, index) => (
                  <ProjectCard
                    key={`project-${index + 3}`}
                    index={index + 3}
                    {...project}
                    onComingSoon={() => setShowModal(true)}
                  />
                ))}
              </div>
            </>
          )}

          {projects.length > 4 && (
            <>
              <div className="rounded-[28px] bg-slate-900/90 px-6 py-4">
                <h2 className="text-lg font-semibold uppercase tracking-[0.16em] text-white/90">
                  UX/UI Projects
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.slice(4).map((project, index) => (
                  <ProjectCard
                    key={`project-${index + 4}`}
                    index={index + 4}
                    {...project}
                    onComingSoon={() => setShowModal(true)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
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

export default SectionWrapper(Works, 'project');
