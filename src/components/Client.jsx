import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Client = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reviews = [
    {
      name: "Priya Sharma",
      position: "CEO, TechStart India",
      rating: 5,
      review: "Bablu delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. Highly recommended!",
      color: "from-blue-600 to-purple-700"
    },
    {
      name: "Rajesh Kumar",
      position: "Founder, Digital Solutions",
      rating: 5,
      review: "Working with Bablu was a pleasure. He understood our requirements perfectly and delivered a modern, responsive website that perfectly represents our brand.",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Anjali Patel",
      position: "Marketing Director, GrowthCo",
      rating: 5,
      review: "Bablu's development skills are outstanding. He created a beautiful, functional website that has significantly improved our online presence and user engagement.",
      color: "from-blue-600 to-purple-700"
    },
    {
      name: "Amit Singh",
      position: "CTO, Innovation Labs",
      rating: 5,
      review: "Professional, reliable, and incredibly talented. Bablu transformed our ideas into a stunning reality. The website performance and user experience are exceptional.",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Neha Gupta",
      position: "Product Manager, StartupXYZ",
      rating: 5,
      review: "Bablu's expertise in MERN stack development is remarkable. He delivered a scalable solution that perfectly fits our business needs. Excellent communication throughout!",
      color: "from-blue-600 to-purple-700"
    },
    {
      name: "Vikram Malhotra",
      position: "Director, Creative Agency",
      rating: 5,
      review: "Outstanding work quality and professionalism. Bablu created a website that not only looks amazing but also performs flawlessly. Highly satisfied with the results!",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
                   <section className="w-full bg-[#191919] text-white py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#191919] via-[#1a1a2e] to-[#16213e] opacity-80"></div>
      
                           {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
                                           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Kind Words from Satisfied Clients
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover what our valued clients have to say about their experience working with us
            </p>
        </div>

        {/* Reviews Container */}
        <div className={`relative transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Scrollable Cards */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 bg-gradient-to-br ${review.color} p-6 rounded-2xl shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-3xl cursor-pointer group`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  minWidth: '320px'
                }}
              >
                                 {/* Quote Icon */}
                 <div className="flex justify-between items-start mb-4">
                   <FaQuoteLeft className="text-3xl text-white/80 group-hover:text-white transition-colors duration-300" />
                   <div className="flex gap-1">
                     {[...Array(review.rating)].map((_, i) => (
                       <FaStar key={i} className="text-yellow-400 text-lg animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                     ))}
                   </div>
                 </div>

                 {/* Review Text */}
                 <p className="text-white/90 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                   "{review.review}"
                 </p>

                 {/* Client Info */}
                 <div className="border-t border-white/20 pt-4">
                   <h4 className="text-white font-semibold text-lg mb-1">
                     {review.name}
                   </h4>
                   <p className="text-white/70 text-sm">
                     {review.position}
                   </p>
                 </div>

                 {/* Hover Glow Effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

                     {/* Scroll Indicators */}
           <div className="flex justify-center mt-8 gap-2">
             {[...Array(6)].map((_, i) => (
                                 <div
                    key={i}
                    className="w-3 h-3 bg-white/30 rounded-full transition-all duration-300 hover:bg-white/60 cursor-pointer"
                  />
             ))}
           </div>
         </div>
      </div>
    </section>
  );
};

export default Client;
