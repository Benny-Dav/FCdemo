import React, { useState } from 'react'
import Modal from './Modal'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1500&auto=format&fit=crop&q=60",
      alt: "Football Match",
      category: "Matches"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1599204606468-5c63999e6e26?w=1200&auto=format&fit=crop&q=60",
      alt: "Training Session",
      category: "Training"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1200&auto=format&fit=crop&q=60",
      alt: "Our Stadium",
      category: "Facilities"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/97/65/ca/9765ca932641b02242b78a55f8eeb515.jpg",
      alt: "Youth Training",
      category: "Training"
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/b6/5d/94/b65d94fd769ad2f84f44447ca7a8c345.jpg",
      alt: "Team Practice",
      category: "Training"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/7188092/pexels-photo-7188092.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Academy Life",
      category: "Events"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1577223625816-6cf13c1d4b8d?w=500&auto=format&fit=crop&q=60",
      alt: "Training Equipment",
      category: "Facilities"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=500&auto=format&fit=crop&q=60",
      alt: "Team Spirit",
      category: "Events"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      {/* <div 
        className="relative h-[50vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1500&auto=format&fit=crop&q=60')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto pt-12 px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Capturing moments of excellence, dedication, and achievement at our academy.
            </p>
          </div>
        </div>
      </div> */}

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs opacity-75">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </div>
  )
}

export default Gallery 