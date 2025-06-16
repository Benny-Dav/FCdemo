import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  const benefits = [
    {
      title: "Professional Training",
      description: "Learn from UEFA-licensed coaches with years of experience in youth development.",
      icon: "🎯"
    },
    {
      title: "State-of-the-art Facilities",
      description: "Train in our modern facilities with the latest equipment and technology.",
      icon: "⚽"
    },
    {
      title: "Competitive Exposure",
      description: "Participate in local and international tournaments and showcase your talent.",
      icon: "🏆"
    },
    {
      title: "Academic Support",
      description: "Balance your football development with education through our academic partnerships.",
      icon: "📚"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Registration",
      description: "Fill out our comprehensive registration form with your details."
    },
    {
      number: "02",
      title: "Assessment",
      description: "Attend a skill assessment session with our professional coaches."
    },
    {
      number: "03",
      title: "Program Placement",
      description: "Get placed in the appropriate training program based on your age and skill level."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&auto=format&fit=crop&q=60')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto pt-12 px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Football Academy</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Take the first step towards your professional football career. Our academy provides world-class training and development opportunities.
            </p>
            <Link
              to="/registration/form"
              className="bg-[#FF6F00] text-white hover:bg-[#FF8F00] px-8 py-3 rounded-md text-lg font-medium inline-block"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Academy?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Registration Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                  <div className="text-[#FF6F00] text-4xl font-bold mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FF6F00] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our academy today and take the first step towards achieving your football dreams.
          </p>
          <Link
            to="/registration/form"
            className="bg-white text-[#FF6F00] hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium inline-block"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Registration 