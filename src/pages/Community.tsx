import React from 'react'

export default function Community() {
    const videos = [
        { thumbnail: "/video1.jpg" },
        { thumbnail: "/video2.jpg" },
        { thumbnail: "/video2.jpg" },
        { thumbnail: "/video2.jpg" },
        { thumbnail: "/video2.jpg" },
        { thumbnail: "/video2.jpg" },
        { thumbnail: "/video2.jpg" },
        { thumbnail: "/video2.jpg" },
        // Add more videos here...
      ];
    
      return (
        <section className="container px-4 mx-auto my-8">
          <h2 className="mb-6 text-2xl font-semibold text-center">
            Social media content that's good for you
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {videos.map((video, index) => (
              <div key={index} className="relative">
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  className="object-cover w-full h-32 rounded"
                />
                <button className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white bg-black bg-opacity-30">
                  ▶
                </button>
              </div>
            ))}
          </div>
        </section>
      );
}
