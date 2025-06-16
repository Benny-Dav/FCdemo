import hero from "../assets/hero.jpg";
import Navbar from "./Navbar.jsx";

const Hero = () => (
    <section className="relative w-full h-[100vh] font-['Montserrat']">
     <Navbar/>
  
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={hero}
          alt="Football players"
          className="w-full h-full object-cover object-top-center"
        />
        <div className="absolute inset-0 bg-black/60 to-transparent"></div>
      </div>
  
      {/* Hero Content */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <p className="text-[#F9F9F9] text-base lg:text-lg mb-4">We Are Socca S.C</p>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight mb-4 lg:mb-8">
            Firing The Spirit Of<br />
            <span className="text-[#FF6F00]">Fairplay</span> and <span className="text-[#FF6F00]">Football</span>
          </h1>
          
        </div>
      </div>
    </section>
  )
  export default Hero;