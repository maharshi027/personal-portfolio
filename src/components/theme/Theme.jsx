import React, { useState, useEffect } from 'react';
import { CiBrightnessUp } from "react-icons/ci";
import './theme.css';

function Theme() {
  const themes = ["dark-theme", "light-theme", "neon-theme"];
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark-theme";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const nextIndex = (themes.indexOf(prev) + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  return (
    <button onClick={toggleTheme} className="btn">
      <CiBrightnessUp className='theme-icon' />
    </button>
  );
}

export default Theme;
