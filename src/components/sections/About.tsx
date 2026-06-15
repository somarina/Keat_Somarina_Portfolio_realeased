import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-parallax-tilt';

import { somarina } from '../../assets';
import cvFile from '../../assets/Keat Somarina - CV&CL.pdf';
import { services } from '../../constants';
import { config } from '../../constants/config';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { Header } from '../atoms/Header';

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    glareColor="#00F0FF"
    glarePosition="all"
    glareBorderRadius="22px"
    className="transform-gpu"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
        className="relative w-full overflow-hidden rounded-[28px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-all duration-300 hover:shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/15 via-transparent to-[#915eff]/15 opacity-80" />
        <div className="relative bg-slate-950/90 backdrop-blur-xl px-6 py-6">
          <div className="mb-5 flex items-center justify-between gap-3 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
            <span>{title}</span>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="flex h-40 items-center justify-center rounded-[20px] bg-white/5">
              <img src={icon} alt={title} className="h-20 w-20 object-contain" />
            </div>
          </div>

          <div className="mt-6 text-center text-[15px] text-secondary leading-6">
            {title} services to help you build modern interfaces, meaningful interactions, and
            polished user journeys.
          </div>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200/10 bg-slate-50/90 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.12)] sm:p-10">
        <div className="grid items-center gap-8 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="absolute right-0 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-orange-200/60 blur-3xl" />
            <div className="relative mx-auto flex max-w-[360px] justify-center">
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-100 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <img
                  src={somarina}
                  alt={config.hero.name}
                  className="h-[360px] w-[360px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                Why Hire me?
              </p>
              <h3 className="mt-4 max-w-xl text-4xl font-bold text-slate-950 sm:text-5xl">
                Why Hire me?
              </h3>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              I design clean, high-performance mobile apps with thoughtful UX for real users.
            </p>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              I combine Flutter UI expertise with strong product thinking so your next app feels
              polished, usable, and ready for launch.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-white px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
                onClick={() => {
                  const section = document.getElementById('contact');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hire me
              </button>
              <a
                href={cvFile}
                download
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
