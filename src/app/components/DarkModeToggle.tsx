import { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-1 text-black dark:bg-transparent dark:text-white rounded">
      {isDarkMode ? <CiLight  size={24}/>
 : <MdDarkMode size={24} />
}
    </button>
  );
};

export default DarkModeToggle;