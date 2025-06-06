import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollContextType = {
  activeLink: string;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

const sections = ['home', 'projects', 'about', 'tech'];

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveLink(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink('home');
      setTimeout(() => {
        if (location.hash) {
          const id = location.hash.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(id);
          }
        }
      }, 100);
    }
  }, [location]);

  return <ScrollContext.Provider value={{ activeLink }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
