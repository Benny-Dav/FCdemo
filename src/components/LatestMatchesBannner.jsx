
import fa5 from "../assets/fa5.png"
import logo from "../assets/logo.png"
import fa6 from "../assets/fa6.png"

const LatestMatchesBanner = () => {

    return (

        <section className="py-12 w-full h-auto px-4 sm:px-6 lg:px-16 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* text */}
          <div className="flex flex-col gap-6 pr-0 lg:pr-12 items-start">
            <p className="text-[#FF6F00] text-sm">The Results</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Latest Matches</h1>
          </div>
      
          {/* match cards */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-6">
            {/* Match Card 1 */}
            <div className="relative h-36 w-[300px] shadow-lg hover:scale-105 transition-all duration-300 transform flex justify-between items-center px-4 gap-2">
              {/* diagonal background */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  clipPath: "polygon(70% 0, 100% 0, 100% 100%, 0 100%, 30% 100%)",
                  backgroundColor: "#dcdcdc",
                }}
              ></div>
      
              {/* content */}
              <div className="z-10 grid grid-cols-3 gap-2">
                <div className="flex flex-col justify-center items-center">
                  <img src={fa5} alt="" className="w-14 " />
                  <p className="text-sm font-bold text-[#FF6F00]">Atlantis FC</p>
                </div>
                <div className="flex justify-center items-center ml-4 ">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">1 - 1</h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={logo} alt="" className="w-20" />
                  <p className="text-sm font-bold text-[#FF6F00]">Socca S.C</p>
                </div>
              </div>
            </div>
      
            {/* Match Card 2 */}
            <div className="relative h-36 w-[300px] shadow-lg hover:scale-105 transition-all duration-300 transform flex justify-between items-center px-4 gap-2">
              {/* diagonal background */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  clipPath: "polygon(70% 0, 100% 0, 100% 100%, 0 100%, 30% 100%)",
                  backgroundColor: "#dcdcdc",
                }}
              ></div>
      
              {/* content */}
              <div className="z-10 grid grid-cols-3 gap-2 ">
                <div className="flex flex-col justify-center items-center">
                  <img src={logo} alt="" className="w-20 " />
                  <p className="text-sm font-bold text-[#FF6F00]">Socca FC</p>
                </div>
                <div className="flex justify-center items-center ml-4 ">
                  <h2 className="font-extrabold text-2xl sm:text-3xl">3 - 2</h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={fa6} alt="" className="w-20" />
                  <p className="text-sm font-bold text-[#FF6F00]">BlueEye FC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
export default LatestMatchesBanner;