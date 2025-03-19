import nov from "../../public/nov.svg";

export const About = ({color}) => {
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
          About <span className="text-purple-400">Me</span>
        </h1>
        <p className={`mt-4 text-lg leading-relaxed ${color ? "text-gray-300":"text-black"}`}>
          Meet Rohan, a talented web developer with a passion for crafting 
          elegant and functional digital solutions. Armed with expertise in 
          <span className="text-purple-400"> HTML, CSS, JavaScript, React, </span>
          and more. Their keen eye for detail ensures that every project they 
          undertake is not only visually stunning but also optimized for peak 
          performance.
        </p>

        {/* Contact Button */}
        <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-purple-600 transition">
          Contact Me
        </button>
      </div>

    </div>
  );
};

