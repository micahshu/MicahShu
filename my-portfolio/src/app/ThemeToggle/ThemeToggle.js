import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";


import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="">
      
        
        
        <div className='absolute right-16 top-2'>
          {currentTheme === 'dark' ? (
            <button
              className=""
              onClick={() => setTheme('light')}
            >
              
              <MdOutlineWbSunny size={28} />
            </button>
          ) : (
            <button
              className="transition-all ease-in-out"
              onClick={() => setTheme('dark')}
            >
              <FaMoon color="#313639"size={28} />
            </button>
          )}
        </div>
      
    </div>
  );
}