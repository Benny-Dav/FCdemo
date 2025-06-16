import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import Modal from '../components/Modal'

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample data - replace with actual data
  const management = [
    {
      id: 1,
      name: "John Smith",
      position: "Academy Director",
      image: "https://img.freepik.com/free-photo/portrait-seriouslooking-determined-young-african-american-guy-with-bristle-cross-hands-chest-looking-confident-ready-action-starting-own-business-stand-white-background_176420-52653.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      bio: "20+ years of experience in football development"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Head Coach",
      image: "https://img.freepik.com/free-photo/young-african-man-standing-isolated_171337-9640.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      bio: "Former national team player and UEFA licensed coach"
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Technical Director",
      image: "https://img.freepik.com/free-photo/casual-young-african-man-posing-white-wall_231208-662.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      bio: "Specializes in youth player development"
    }
  ]

  const alumni = [
    {
      id: 1,
      name: "David Williams",
      image: "https://img.freepik.com/free-photo/confident-young-afro-american-sporty-man-wearing-haedband-wristband-holding-ball-putting-hand-hip-isolated-white-background_141793-63536.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "Professional player at Manchester United",
      year: "2018"
    },
    {
      id: 2,
      name: "James Rodriguez",
      image: "https://img.freepik.com/free-photo/smiling-young-sporty-man-wearing-headband_141793-74017.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "National Team Player",
      year: "2019"
    },
    {
      id: 3,
      name: "Emma Thompson",
      image: "https://img.freepik.com/free-photo/happy-man-with-ball_1149-1565.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "Women's Premier League Star",
      year: "2020"
    }
  ]

  const amenities = [
    {
      id: 1,
      name: "Training Fields",
      description: "Professional-grade football fields with state-of-the-art turf and lighting systems for optimal training conditions.",
      src: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&auto=format&fit=crop&q=60",
      alt: "Training Fields"
    },
    {
      id: 2,
      name: "Fitness Center",
      description: "Modern gym equipped with the latest fitness equipment for strength and conditioning training.",
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60",
      alt: "Fitness Center"
    },
    {
      id: 3,
      name: "Recovery Zone",
      description: "Dedicated area for post-training recovery with physiotherapy and rehabilitation facilities.",
      src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500&auto=format&fit=crop&q=60",
      alt: "Recovery Zone"
    },
    {
      id: 4,
      name: "Analysis Room",
      description: "High-tech room for video analysis and tactical discussions to improve player performance.",
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60",
      alt: "Analysis Room"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-[#1A1A1A] to-[#333] bg-no-repeat bg-cover" style={{backgroundImage:"url(https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb3RiYWxsfGVufDB8fDB8fHww)"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto pt-12 px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Academy</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Developing the next generation of football stars through excellence in training and education.
            </p>
          </div>
        </div>
      </div>

      {/* Our History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl w-[60%] font-extrabold text-gray-900">Our History</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, our academy has been at the forefront of youth football development. What started as a small training program has grown into one of the most respected football academies in the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we've produced numerous professional players and helped countless young athletes achieve their dreams. Our commitment to excellence and holistic development has made us a benchmark in football education.
              </p>
            </div>
            <div className="relative h-[300px] bg-gray-200 rounded-lg overflow-hidden">
              {/* Add historical image here */}
              <img src="https://images.unsplash.com/photo-1600551778275-0f76a4f1fa39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2NlciUyMHRyYWluaW5nfGVufDB8fDB8fHww" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#FF6F00] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class football training while fostering personal growth, leadership, and academic excellence in our students.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#FF6F00] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading football academy in Africa, recognized globally for producing well-rounded athletes who excel both on and off the field.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Meet the Management */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl w-full lg:w-[60%] font-extrabold text-gray-900 mb-8">Meet the Management</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {management.map((person) => (
              <div key={person.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-gray-200">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{person.name}</h3>
                  <p className="text-[#FF6F00] font-medium mb-3">{person.position}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl w-full lg:w-[60%] font-extrabold text-gray-900">Gallery</h2>
          <Gallery />
        </div>
      </section>

      {/* Meet our Alumni */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl w-[60%] font-extrabold text-gray-900">Meet our Alumni</h2>
            <Link to="/alumni" className="text-[#FF6F00] font-medium hover:text-[#FF8F00] transition-colors">
              See all alumni →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((person) => (
              <div key={person.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-square bg-gray-200">
                  <img src={person.image} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{person.name}</h3>
                  <p className="text-[#FF6F00] mb-2">Class of {person.year}</p>
                  <p className="text-gray-600">{person.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Our Amenities</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity) => (
              <div 
                key={amenity.id} 
                className="group relative aspect-square rounded-lg overflow-hidden shadow-sm cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedImage(amenity)}
              >
                <img
                  src={amenity.src}
                  alt={amenity.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Dark overlay that's always visible */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Additional overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <div className="transform group-hover:translate-y-[-10px] transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{amenity.name}</h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view details
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl w-[60%] font-extrabold text-gray-900">Our Location</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Visit Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF6F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    123 Academy Street, Accra, Ghana
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF6F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +233 123 456 789
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF6F00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@footballacademy.com
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Training Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7298872707584!2d-0.1866046!3d5.6568568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0x5e0c76d3f0c3c25e!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1635927146044!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Academy Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </div>
  )
}

export default About 