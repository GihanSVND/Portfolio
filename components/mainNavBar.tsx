// components/Navbar.tsx
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const navItems = [
    { id: 0, name: 'About', href: '#about' },
    { id: 1, name: 'Time Line', href: '#timeline' },
    { id: 2, name: 'Work', href: '#work' },
    { id: 3, name: 'Contact', href: '#contact' }
  ];

  // Scroll to section smoothly
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center space-x-10 py-4 backdrop-blur-lg bg-black/50 z-50 transition-all duration-300 ease-in-out">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setActiveIndex(item.id)}
          className={`${
            activeIndex === item.id
              ? 'bg-[#FF4401] text-white font-semibold scale-110'
              : 'text-white font-light'
          } px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
