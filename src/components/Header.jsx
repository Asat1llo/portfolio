import './global.css'
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { language } from '../data/localization';
import { Select, Space } from 'antd';
import {ColorButton,ContactButton} from '../global'

  
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


  const handleChange = value => {
   setLan(value)
  };

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
            </li>
          ))}
        </ul>

        <Space wrap className='w-4 hidden md:flex'>
        <Select
        variant='borderless'
      defaultValue="en"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'uz', label: 'UZ' },
        { value: 'ru', label: 'RU' },
        { value: 'en', label: 'EN' },
      ]}
      size='small'
    />
        </Space>

            
        <div className='hidden md:flex items-center gap-4 pr-4'>
         {/* Right Side: Theme Toggle & Contact Button */}
          <ColorButton setColor={setColor} color={color} lan={lan}/>
        </div>
          {/* Contact Me Button */}
          <ContactButton lan={lan} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>      
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

    <Space wrap className='w-4'>
        <Select
      defaultValue="en"
      variant='borderless'
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'uz', label: 'uz' },
        { value: 'ru', label: 'ru' },
        { value: 'en', label: 'en' },
      ]}
      size='small'
    />
        </Space>
         
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
         
          <ContactButton lan={lan}/>    
        </div>
      )}
    </nav>
  );
};


