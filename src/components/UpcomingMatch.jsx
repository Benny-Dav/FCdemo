import fa5 from "../assets/fa5.png"
import logo from "../assets/logo.png"

const UpcomingMatch = () => {
    return (
        <section className="py-8 relative max-h-[80vh] bg-bottom-center bg-cover px-4 sm:px-6 lg:px-16 " style={{ backgroundAttachment:"fixed", backgroundImage: `url(https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=12000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D)` }}>
            <div className="absolute inset-0 bg-black/80 z-0">

            </div>

            <div className="relative flex flex-col justify-center items-center text-center gap-8">
                <h2 className="font-extrabold text-3xl text-white tracking-wider leading-tight">Upcoming Matches</h2>

                {/* upcoming match cards */}
                <div className='relative h-36 shadow-lg hover:scale-105 bg-white transition-all duration-300 transform flex justify-between items-center px-4 gap-2'>
                    {/* diagonal background */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            clipPath: "polygon(70% 0, 100% 0, 100% 100%, 0 100%, 30% 100%)",
                            backgroundColor: "#dcdcdc"
                        }}
                    ></div>


                    {/* card content */}
                    {/* teamA */}
                    <div className='z-10 grid grid-cols-3 gap-4 items-center '>
                        <div className=' flex flex-col justify-center items-center '>
                            <img src={fa5} alt="" className="w-14" />
                            <p className="text-sm font-bold text-[#FF6F00]">Atlantis FC</p>
                        </div>
                        {/* score */}
                        <div className='flex flex-col justify-center items-center text-center ml-8 '>
                            <h2 className='font-extrabold text-3xl mb-4'>VS</h2>
                            <p className="text-[#FF6F00] text-sm font-semibold">15/06/2025</p>
                            <p className="text-[#FF6F00] text-sm font-semibold">Israel Park</p>
                        </div>
                        {/* teamB */}
                        <div className='flex flex-col justify-center items-center'>
                            <img src={logo} alt="" className="w-20" />
                            <p className="text-sm font-bold text-[#FF6F00]">Socca S.C</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default UpcomingMatch;