import React from 'react'

const Alumni = () => {
  const alumni = [
    {
      id: 1,
      name: "David Williams",
      image: "https://img.freepik.com/free-photo/young-afro-american-sporty-man-wearing-headband-wristband-holding-water-bottle_141793-80428.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "Professional player at Manchester United",
      year: "2018",
      bio: "Started his journey with us at age 12 and now plays professionally in the Premier League."
    },
    {
      id: 2,
      name: "James Rodriguez",
      image: "https://img.freepik.com/free-photo/looking-side-young-afro-american-sporty-man-wearing-headband-wristband-holding-bat-head-putting-hand-hip-isolated-white-background_141793-63647.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "National Team Player",
      year: "2019",
      bio: "Represented Ghana at various youth levels and now plays for the senior national team."
    },
    {
      id: 3,
      name: "Emma Thompson",
      image: "https://img.freepik.com/free-photo/looking-camera-young-afro-american-sporty-man-wearing-headband-wristband-crossing-hands-isolated-white-background_141793-63604.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "Women's Premier League Star",
      year: "2020",
      bio: "Breaking barriers in women's football and inspiring the next generation."
    },
    {
      id: 4,
      name: "Michael Brown",
      image: "https://img.freepik.com/free-photo/concerned-young-afro-american-sporty-man-wearing-headband-wristband-holding-out-hands_141793-80424.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "Professional Coach",
      year: "2017",
      bio: "Transitioned from player to coach and now leads youth development at a top club."
    },
    {
      id: 5,
      name: "Michael Brown",
      image: "https://img.freepik.com/free-photo/smiling-young-sporty-man-wearing-headband-wristband-holding-ball-shoulder-isolated-white-background_141793-72615.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "Professional Coach",
      year: "2017",
      bio: "Transitioned from player to coach and now leads youth development at a top club."
    },
    {
      id: 6,
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
      achievement: "Professional Coach",
      year: "2017",
      bio: "Transitioned from player to coach and now leads youth development at a top club."
    },
    {
      id: 7,
      name: "Michael Brown",
      image: "https://img.freepik.com/free-photo/happy-football-player-holding-soccer-ball_1368-8741.jpg?ga=GA1.1.163419551.1732735476&semt=ais_hybrid&w=740",
      achievement: "Professional Coach",
      year: "2017",
      bio: "Transitioned from player to coach and now leads youth development at a top club."
    },
    {
      id: 8,
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
      achievement: "Professional Coach",
      year: "2017",
      bio: "Transitioned from player to coach and now leads youth development at a top club."
    },
    {
      id: 9,
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
      achievement: "Professional Coach",
      year: "2017",
      bio: "Transitioned from player to coach and now leads youth development at a top club."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&auto=format&fit=crop&q=60')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto pt-12 px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Alumni</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Discover the success stories of our former students who have gone on to achieve great things in football.
            </p>
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {alumni.map((person) => (
            <div key={person.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                <p className="text-[#FF6F00] font-medium mb-2">Class of {person.year}</p>
                <p className="text-gray-600 font-medium mb-2">{person.achievement}</p>
                <p className="text-gray-500 text-sm">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Alumni 