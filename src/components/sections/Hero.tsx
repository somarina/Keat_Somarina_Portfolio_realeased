import { useEffect, useState } from 'react';
import { somarina } from '../../assets';
import { config } from '../../constants/config';
import { styles } from '../../constants/styles';

const titleSegments = [
  { text: "I'm ", className: '', lineBreakAfter: false },
  { text: `${config.hero.name},`, className: 'text-cyan-400', lineBreakAfter: true },
  {
    text: 'Flutter Mobile App Developer',
    className: 'block text-[42px] sm:text-[48px] md:text-[54px] lg:text-[64px] leading-tight',
    lineBreakAfter: false,
  },
];

const Hero = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  const totalChars = titleSegments.reduce((sum, segment) => sum + segment.text.length, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount(prev => {
        if (prev >= totalChars) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [totalChars]);

  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden bg-[#020816]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[220px] w-[220px] rounded-full bg-slate-500/10 blur-3xl" />
      </div>

      <div
        className={`${styles.paddingX} relative mx-auto flex min-h-screen items-center max-w-7xl pt-24`}
      >
        <div className="grid w-full gap-10 xl:grid-cols-[1.25fr_0.9fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[13px] uppercase tracking-[0.3em] text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              Hello!
            </span>

            <h1 className="text-[40px] font-black tracking-tight leading-[0.95] text-white sm:text-[52px] md:text-[64px] lg:text-[72px]">
              {titleSegments.map((segment, index) => {
                const consumed = titleSegments
                  .slice(0, index)
                  .reduce((sum, s) => sum + s.text.length, 0);
                const remainingCount = Math.max(0, visibleCount - consumed);
                const segmentText = segment.text.slice(0, remainingCount);

                return (
                  <span key={index} className={segment.className}>
                    {segmentText}
                    {segment.lineBreakAfter ? <br /> : null}
                  </span>
                );
              })}
            </h1>

            <p className="max-w-2xl text-[17px] leading-7 text-slate-300 sm:text-[18px]">
              {config.sections.about.content}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-x-0 bottom-0 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/90 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <img
                src={somarina}
                alt={config.hero.name}
                className="h-[520px] w-full rounded-[32px] object-cover sm:h-[500px]"
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* <div className="rounded-[28px] bg-slate-900/90 px-5 py-4 text-center text-white shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Experience</p>
                <p className="mt-3 text-3xl font-bold text-cyan-400">10+</p>
                <p className="text-sm text-white/70">Years</p>
              </div> */}
              {/* <div className="rounded-[28px] bg-slate-900/90 px-5 py-4 text-center text-white shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Rating</p>
                <p className="mt-3 text-3xl font-bold text-cyan-400">★★★★★</p>
                <p className="text-sm text-white/70">Satisfied clients</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
