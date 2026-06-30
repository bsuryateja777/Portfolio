import { useEffect } from 'react'
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import About from "./Components/About"
import TechnologyStack from "./Components/TechnologyStack"
import MyWork from "./Components/MyWork"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience"
import Footer from "./Components/Footer"


function App() {

  useEffect(() => {
    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const smoothScroll = (target) => {
      const scrollMargin = Number.parseInt(getComputedStyle(target).scrollMarginTop) || 0;
      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + window.scrollY - scrollMargin;
      const distance = end - start;
      const duration = 700;
      let startTime = null;

      const step = (now) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + distance * ease(progress));
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      smoothScroll(target);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className='dark:bg-[#111827] dark:text-white'>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <TechnologyStack />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
