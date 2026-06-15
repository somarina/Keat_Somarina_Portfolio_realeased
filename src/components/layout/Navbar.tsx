import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { close, logo, menu } from '../../assets';
import { navLinks } from '../../constants';
import { config } from '../../constants/config';
import { styles } from '../../constants/styles';

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 w-full py-5 transition duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
            <p className="text-[18px] font-bold text-white">{config.html.title}</p>
          </Link>
        </div>

        <ul className="hidden list-none items-center gap-8 sm:flex">
          {navLinks.map(nav => (
            <li key={nav.id} className="cursor-pointer text-[16px] font-medium">
              <a
                href={`#${nav.id}`}
                className={`rounded-full px-4 py-2 transition ${
                  active === nav.id
                    ? 'bg-cyan-400 text-black'
                    : 'text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 sm:flex">
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black shadow-[0_20px_40px_rgba(0,240,255,0.22)] transition hover:bg-cyan-300"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? 'text-cyan-400' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
