// components/Footer.tsx
import Link from 'next/link';
import { Poppins } from "next/font/google";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import phone and email icons


const poppins2 = Poppins({ weight: "200", subsets: ["latin"] });

const poppins4 = Poppins({ weight: "400", subsets: ["latin"] });




const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-6 md:p-10">
      {/* Horizontal line */}
      <div className="w-full border-t border-white mb-6"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className={`${poppins4.className} space-y-3 mb-6 md:mb-0`}>
          <Link href="#about" className="block text-white hover:text-gray-400">About</Link>
          <Link href="#timeline" className="block text-white hover:text-gray-400">Time Line</Link>
          <Link href="#work" className="block text-white hover:text-gray-400">Work</Link>
          <Link href="#contact" className="block text-white hover:text-gray-400">Contact</Link>
        </div>

        <div className={`${poppins2.className} text-[#FF4401] text-center md:text-right`}>
          <p className="font-bold text-lg md:text-[40px]">Gihan Savinda</p> {/* Increased font size */}
          <br />
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <p>+94 764613117</p>
            <FaPhoneAlt className="text-white" /> {/* Phone icon on the right */}
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <p>+94 711711050</p>
            <FaPhoneAlt className="text-white" /> {/* Phone icon on the right */}
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <a href="mailto:gihansvnd@gmail.com" className="hover:underline">gihansvnd@gmail.com</a>
            <FaEnvelope className="text-white" /> {/* Email icon on the right */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
