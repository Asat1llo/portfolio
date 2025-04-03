import {data} from '../data/data'
import {VideoCard} from '../global/card'


export const Project = ({color,lan,ldata}) => {

  return (
    <div className={`relative ${color ? "bg-gradient-to-br from-[#0b0718] to-[#1a093c] text-white" : "bg-white text-black"} py-24 px-6 overflow-hidden`}>
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 tracking-wide">{ldata[lan].project.title}</h2>
      
      {/* Responsive Projects Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {data.map((item, i) => (
          <VideoCard key={i} item={item}/>
          // <a href={item.link} key={i} className="group relative w-full max-w-sm h-80 overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-purple-500/50 project-card">
          //   <img src={item.img} className="w-full h-full object-cover rounded-2xl group-hover:brightness-50" alt='Project-img' />
          //   {/* Overlay with text */}
          //   <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
          //     <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg uppercase">{item.name}</p>
          //   </div>
          // </a>
        ))}
      </div>
    </div>
  );
};