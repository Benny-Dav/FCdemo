import Button from './Button'

const WhoWeAreSection = () => {
    return (
        <section className="w-full py-16 px-8 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-[#FF6F00]">Who We Are</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 lg:w-[60%]">
              The True Spirit Of Football
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:w-[70%]">
              At our football academy, we believe in nurturing not just skilled players, but complete athletes. Our comprehensive training program focuses on technical skills, tactical understanding, physical development, and mental strength. We create an environment where young talents can thrive and develop their full potential.
            </p>
            <div className='flex justify-center'>
            <Button to="/about-us" variant="primary">Learn More</Button>
            </div>
            
          </div>
      
          {/* Right Image Grid */}
          <div className="grid grid-cols-6 grid-rows-2 gap-3 h-[60vh] sm:h-[70vh] lg:h-[80vh] -mt-6 sm:-mt-12 lg:-mt-16">
            {/* Main Top Image */}
            <div className="col-span-6 row-span-1 h-full">
              <img 
                src="https://i.pinimg.com/736x/97/65/ca/9765ca932641b02242b78a55f8eeb515.jpg" 
                alt="Young football players celebrating"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
      
            {/* Bottom Two Images */}
            <div className="col-span-3 h-full">
              <img 
                src="https://i.pinimg.com/736x/b6/5d/94/b65d94fd769ad2f84f44447ca7a8c345.jpg" 
                alt="Football training session"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 h-full">
              <img 
                src="https://images.pexels.com/photos/7188092/pexels-photo-7188092.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Football field"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default WhoWeAreSection;