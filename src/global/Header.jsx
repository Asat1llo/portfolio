import './global.css'
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { language } from '../data/localization';
  
export const Header = ({setColor,color,setLan,lan}) => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [active, setActive] = useState("HOME"); // Active link state


  const navs = [{
    id:1,
    name:`${language[lan].header.home}`,
    link:'../components/Hero.jsx'
  },{
    id:2,
    name:`${language[lan].header.project}`,
    link:'../components/Hero.jsx'
  },{
    id:3,
    name:`${language[lan].header.about}`,
    link:'../components/Hero.jsx'
  },{
    id:4,
    name:`${language[lan].header.contact}`,
    link:'../components/Hero.jsx'
  }]

  return (    
    <nav className={`w-full fixed top-5  z-[1] rounded-[50px]  p-4  transition-all duration-300 ${color ? "bg-gradient-to-r from-black to-blue-900 text-white" : "bg-gradient-to-r from-gray-100 to-white text-black"}`}>
      
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-lg font-bold pl-4">Iminjonov Asadulloh</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          {navs.map((item,i) => (
            <li
              key={item.id}
              className={`relative cursor-pointer transition-all duration-300 ${active === item.name ? "text-purple-400" : "text-gray-500"} hover:text-purple-400 uppercase`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
              {active === item.name && (
                <span className="absolute left-1/2 -bottom-1 w-6 h-1 bg-purple-400 transform -translate-x-1/2 transition-all duration-300"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle & Contact Button */}
        <div className="hidden md:flex items-center gap-4 pr-4">
          <span className="text-xs uppercase">{language[lan].header.light}</span>
          <Switch
            checked={color}
            onChange={setColor}
            className="relative inline-flex items-center h-5 w-10 rounded-full bg-gray-600 transition-all duration-300"
          >
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-300 ${color ? "translate-x-5" : "translate-x-1"}`} />
          </Switch>
          <span className="text-xs uppercase">{language[lan].header.dark}</span>

          {/* Contact Me Button */}
          <button className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300">
            {language[lan].header.button}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none pr-4">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col items-center gap-4 bg-transparent ${ color ? "text-white":"text-black"} py-6`}>
          {navs.map((item,i) => (
            <button
              key={item.id}
              className={`text-lg ${active === item.name   ? "text-purple-400" : "text-gray-300"} hover:text-purple-400 uppercase`}
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false); // Close menu after selection
              }}
            >
              {item.name}
            </button>
          ))}

          {/* Dark Mode & Contact Button */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase">{language[lan].header.light}</span>
            <Switch
              checked={color}
              onChange={setColor}
              className="relative inline-flex items-center h-5 w-10 rounded-full bg-gray-600 transition-all duration-300"
            >
              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-300 ${color ? "translate-x-5" : "translate-x-1"}`} />
            </Switch>
            <span className="text-xs uppercase">{language[lan].header.dark}</span>
          </div>

          <button className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-500 transition-all duration-300">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};


