import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const navItems = [
    { id: 0, name: 'About', href: '#about', sectionId: 'about' },
    { id: 1, name: 'Time Line', href: '#timeline', sectionId: 'timeline' },
    { id: 2, name: 'Work', href: '#work', sectionId: 'work' },
    { id: 3, name: 'Contact', href: '#contact', sectionId: 'contact' }
  ];

  // Scroll to section smoothly
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Function to handle scroll and update active nav item
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveIndex(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center space-x-[10px] sm:space-x-[50px] md:space-x-[100px] py-4 backdrop-blur-lg bg-black/50 z-50 transition-all duration-300 ease-in-out">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setActiveIndex(item.id)}
          className={`${
            activeIndex === item.id
              ? 'bg-[#FF4401] text-white font-semibold scale-110'
              : 'text-white font-light'
          } px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-100`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
