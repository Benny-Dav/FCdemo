import { Link } from 'react-router-dom'
import illustration from '../assets/illustration.svg'
import Button from './Button'

const CTASection = () => {
    return (
        <section className="w-full py-16 px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
                    {/* text */}
                    <div className='flex flex-col justify-center text-center lg:text-left gap-4'>
                        <h2 className="text-sm uppercase tracking-wider text-[#FF6F00]">JOIN THE ACADEMY</h2>
                        <p className='text-2xl md:text-3xl lg:text-4xl w-full lg:w-[60%] font-extrabold text-gray-900'>Register today and become part of our winning team!</p>
                        <div className='w-full md:w-[40%] lg:w-[20%] mx-auto lg:mx-0'>
                            <Button to="/registration">Get Started</Button>
                        </div>
                    </div>

                    {/* illustration */}
                    <div className="flex justify-center items-center scale-x-[-1] w-full lg:w-auto">
                        <img src={illustration} alt="" className='w-full max-w-[300px] lg:w-full object-cover'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection;