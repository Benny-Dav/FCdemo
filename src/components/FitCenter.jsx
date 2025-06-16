const FitCenter = () => {
    return (
        <section className="w-full py-16 px-8 lg:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Left Content */}
    <div className="space-y-4">
      <h2 className="text-sm uppercase tracking-wider text-[#FF6F00]">GYM & FITNESS CENTER</h2>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 lg:w-[60%]">
        We Help You Transform Your <span className="text-[#FF6F00]">Body and Mind</span>
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:w-[80%]">
        Our modern gym and fitness center is designed to help you achieve your fitness goals. We offer a wide range of equipment and classes to help you get in shape and stay in shape, with dedicated trainers to guide you every step of the way.
      </p>

      {/* Opening Hours and Pricing */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4 w-full lg:w-[80%]">
        <div>
          <h4 className="text-[#FF6F00] font-semibold text-lg">OPENING HOURS</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <p className="text-gray-600">Monday - Saturday</p>
            <div className="flex flex-col sm:items-end">
              <p className="text-[#FF6F00] font-medium">6:00 AM - 10:00 AM</p>
              <p className="text-[#FF6F00] font-medium">4:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t border-gray-200">
          <p className="flex justify-between items-center">
            <span className="text-gray-600">Registration Fee:</span>
            <span className="text-[#FF6F00] font-semibold">GHS 300</span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-gray-600">Monthly Subscription:</span>
            <span className="text-[#FF6F00] font-semibold">GHS 100</span>
          </p>
        </div>
      </div>
    </div>

    {/* Right Image Grid */}
    <div className="grid grid-cols-6 grid-rows-2 gap-3 h-[60vh] sm:h-[70vh] lg:h-[80vh] -mt-6 sm:-mt-12 lg:-mt-16">
      <div className="col-span-6 row-span-1 h-full">
        <img
          src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Gym interior"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3 h-full">
        <img
          src="https://images.unsplash.com/photo-1627483297929-37f416fec7cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJsYWNrJTIwZml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Fitness class"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3 h-full">
        <img
          src="https://images.unsplash.com/photo-1683147778222-7d136eb5538d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwYmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
          alt="People working out"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

    )
}

export default FitCenter;