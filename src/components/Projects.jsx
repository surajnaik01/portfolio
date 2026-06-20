import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Videos');

  const tabs = ['Videos', 'Podcasts', 'Reels'];

  const projects = {
    Videos: [
      { id: 1, title: 'Cinematic B-Roll', type: 'Video', url: 'https://youtu.be/F_JpqALL_sc?si=Cr9d5sQ70tTDRE_5', videoId: 'F_JpqALL_sc' },
      { id: 2, title: 'Event Highlight', type: 'Video', url: 'https://youtu.be/fkDz9IWGJjY?si=HLMVe-pTQjUtNY-J', videoId: 'fkDz9IWGJjY' },
      { id: 3, title: 'Music Video Edit', type: 'Video', url: 'https://youtu.be/yh6dnKD2X7s?si=cccNE4BlR0ONPwSE', videoId: 'yh6dnKD2X7s' },
    ],
    Podcasts: [
      { id: 4, title: 'Podcast Episode', type: 'Podcast', url: 'https://youtu.be/HQKjwNZ25cE', videoId: 'HQKjwNZ25cE' },
      { id: 5, title: 'Creative Minds', type: 'Podcast', url: 'https://youtu.be/mJa5ZFKdJOY', videoId: 'mJa5ZFKdJOY' },
      { id: 6, title: 'Interview Snippet', type: 'Podcast', url: 'https://youtu.be/JvRTuqgRQ5s?si=jdqjzKmE0zZ_2lDQ', videoId: 'JvRTuqgRQ5s' },
    ],
    Reels: [
      { id: 7, title: 'Travel Reel', type: 'Reel', url: 'https://www.youtube.com/shorts/tt9-6hJAcls', videoId: 'tt9-6hJAcls' },
      { id: 8, title: 'Fitness Promo', type: 'Reel', url: 'https://youtube.com/shorts/LXb3EKWsInQ', videoId: 'LXb3EKWsInQ' },
      { id: 9, title: 'Food VLog snippet', type: 'Reel', url: 'https://youtube.com/shorts/LXb3EKWsInQ', videoId: 'LXb3EKWsInQ' },
    ]
  };

  return (
    <section id="projects" className="bg-black text-white pt-24 pb-32 px-6 md:px-12 w-full relative font-sans">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Content */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Selected <span className="text-[#ff2a2a]">Works</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of my recent projects, demonstrating creative editing, engaging storytelling, and high-quality production.
          </p>
        </div>

        {/* Tabs */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === tab
                ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((item, index) => {
            const CardWrapper = item.url ? 'a' : 'div';
            const wrapperProps = item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <CardWrapper
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ aspectRatio: item.type === 'Reel' ? '9/16' : '16/9' }}
                className={`group relative rounded-2xl overflow-hidden ${item.type === 'Reel' ? 'max-w-sm mx-auto w-full' : ''} bg-gray-900 border border-white/10 hover:border-[#ff2a2a]/50 transition-all duration-500 cursor-pointer block`}
                {...wrapperProps}
              >
                {/* Background image or gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                  {item.videoId && (
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                  )}
                  {/* Play icon placeholder */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#ff2a2a] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <span className="text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-2">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
