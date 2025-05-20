import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-screen video background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src="https://cdn.pixabay.com/video/2017/05/23/9153-217588676_1920x1080.mp4"
        autoPlay 
        muted 
        loop 
        playsInline
      />
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Foreground text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold opacity-0 animate-fadeIn">
          Sibusiso Botya
        </h1>
        <p className="text-gray-200 text-xl sm:text-2xl md:text-3xl mt-4 opacity-0 animate-fadeIn delay-500">
          Transforming cloud infrastructure into agile, scalable solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;

