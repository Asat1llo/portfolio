import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";




export const Hero = ({color,lan,ldata}) => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/resume.pdf"; // public ichidagi faylga yo'l
    link.download = "Asadulloh_Resume.pdf"; // Fayl nomi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
<div className={`relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen ${color ? "bg-gradient-to-br from-purple-900 to-black " : "bg-white"} px-6 md:px-16 lg:px-20 overflow-hidden`}>      
      {/* 1. Chap tarafdagi yozuvlar */}
      <div className="text-white max-w-lg text-center md:text-left flex flex-col justify-center md:h-screen">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${color ? "text-white ":" text-black"}`}>
          Iminjonov <br /> Asadulloh
        </h1>
        <p className={`mt-4 md:mt-6 text-base md:text-lg opacity-80 border-l-2  pl-4 ${color ? "text-white border-white ":" text-black border-black"}`}>
         {ldata[lan].hero.text}
        </p>
      </div>

      {/* 2. O‘ng tarafdagi animatsiyali doiralar (500px dan kichik ekranda yo‘qoladi) */}
      <div className="relative translate-y-1/3 hidden sm:block">
        {/* Katta doira */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border-x-[3px] rounded-full  animate-spinn-slow">
          {/* Ichki gradient doira */}
          <div className="absolute inset-0 m-auto w-[90%] h-[90%] bg-gradient-to-br from-blue-400 to-pink-500 rounded-full"></div>
        </div>

        {/* Kichik doira (CV tugmasi bilan) */}
        <div onClick={handleDownload} className="absolute top-[35%] left-[-40px] md:left-[-60px] w-[60px] h-[60px] md:w-[90px] md:h-[90px] bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-floatt cursor-pointer">
          <span className="text-white text-lg md:text-lg font-semibold flex items-center gap-1">
            <TbFileCv className={`text-4xl ${window.innerWidth === '768px' ? 'text-blue-500' : '' }`}/>
          </span>
        </div>

        {/* Ikkinchi kichik doira */}
        <div className="absolute top-[10%] right-[-30px] md:right-[-50px] w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-gradient-to-br from-blue-400 to-pink-500 rounded-full"></div>
      </div>

      {/* 3. O‘ng tomonda joylashgan ijtimoiy tarmoq ikonkalari */}
      <div className="flex flex-row md:flex-col gap-4 md:gap-6 text-white text-2xl md:text-3xl absolute md:right-12 top-auto md:top-1/2 -translate-y-1/2 md:translate-y-0 bottom-6 md:bottom-auto">
        <a href="https://github.com/Asat1llo">
        <FaGithub className="hover:text-gray-400 cursor-pointer" />
        </a>
        <a href="https://t.me/asadu1loh">
        <FaTelegram className={`${color ? "hover:text-blue-400" : "text-blue-400"}`} />
        </a>
        <a href="https://www.linkedin.com/in/asadulloh-iminjonov-b55549294/">
        <FaLinkedin className={`${color ? "hover:text-blue-400" : "text-blue-400"}`}  />
        </a>
      </div>
      
    </div>
  );
};
