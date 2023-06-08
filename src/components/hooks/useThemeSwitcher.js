import React, { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState('');

  useEffect(() => {
    const userPref = window.localStorage.getItem('theme');
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = (event) => {
      const check = event.matches ? 'dark' : 'light';
      setMode(check);
      document.documentElement.classList.toggle('dark', check === 'dark');
    };

    if (userPref) {
      setMode(userPref);
      document.documentElement.classList.toggle('dark', userPref === 'dark');
    } else {
      handleChange(mediaQuery);
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
