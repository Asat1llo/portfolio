import nov from "../../public/nov.svg";

export const About = ({color,lan,ldata}) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between min-h-screen ${ color ? "bg-gradient-to-br from-[#20002c] to-[#000000]" : "bg-white"} px-6 md:px-16 py-12`}>
      
      {/* Left Side - Image Container */}
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
        {/* Large black circular background */}
        <div className="absolute inset-0 w-full h-full bg-black rounded-full shadow-lg">
          <img src={nov} alt="Nov" />
        </div>

        {/* Small glowing circle at the bottom-left */}
        <div className="absolute bottom-[-15px] left-[-20px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-purple-500 rounded-full shadow-md"></div>
      </div>

      {/* Right Side - Text Content */}
      <div className="relative max-w-lg text-white text-center md:text-left mt-10 md:mt-0">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${color ? "text-white" : " text-black"}`}>
          {lan == 'en' ? ldata[lan].about.title.slice(0,5) : lan == 'ru' ? ldata[lan].about.title.slice(0,3) : ldata[lan].about.title.slice(0,3)} <span className="text-purple-400">{lan == 'en' ? ldata[lan].about.title.slice(5,8) : lan == 'ru' ? ldata[lan].about.title.slice(3,7) : ldata[lan].about.title.slice(3,11)}</span>
        </h1>
        <p className={`mt-4 text-lg leading-relaxed ${color ? "text-gray-300":"text-black"}`}>
          {lan == 'en'? ldata[lan].about.text.slice(0,130) :
           lan == 'ru'? ldata[lan].about.text.slice(0,160)  :
           ldata[lan].about.text.slice(0,117)
           }
          <span className="text-purple-400">
          {lan == 'en'? ldata[lan].about.text.slice(130,165) :
           lan == 'ru'? ldata[lan].about.text.slice(160,190)  :
           ldata[lan].about.text.slice(117,145)
           }
          </span>
          {lan == 'en'? ldata[lan].about.text.slice(165,500) :
           lan == 'ru'? ldata[lan].about.text.slice(190,500)  :
           ldata[lan].about.text.slice(145,500)
           }
        </p>

        {/* Contact Button */}
        <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-purple-600 transition">
          {ldata[lan].header.button}
        </button>
      </div>

    </div>
  );
};

