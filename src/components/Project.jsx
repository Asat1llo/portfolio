import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'
import { NavLink as Link } from 'react-router-dom'


export const Project = ({color}) => {
  const projects = [
    { img: project1, title: "Project 1", date: "March 2025",link:"https://movie-orcin-nine.vercel.app/" },
    { img: project2, title: "Project 2", date: "April 2025",link:"https://shop-mocha-theta.vercel.app/" },
    { img: project3, title: "Project 3", date: "May 2025"  ,link:"https://crypto-eight-rho.vercel.app/" },
    { img: project4, title: "Project 4", date: "June 2025" ,link:"https://head-phones-pi.vercel.app/market" },
  ];

  return (
    <div className={`relative ${color ? "bg-gradient-to-br from-[#0b0718] to-[#1a093c] text-white" : "bg-white text-black"} py-24 px-6 overflow-hidden`}>
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 tracking-wide">My Projects</h2>
      
      {/* Responsive Projects Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projects.map((p, i) => (
          <a href={p.link} key={i} className="group relative w-full max-w-sm h-80 overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-purple-500/50 project-card">
            <img src={p.img} className="w-full h-full object-cover rounded-2xl group-hover:brightness-50" />
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">{p.title}</p>
              <span className="text-gray-300 text-lg md:text-xl font-medium drop-shadow-lg">{p.date}</span>
            </div>
          </a>
        ))}
      </div>
      
      {/* Custom Animation */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(50px) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        .project-card {
          animation: floatUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};