import React from 'react';

const Home: React.FC = () => (
  <div className="relative w-screen h-screen overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="https://cdn.pixabay.com/video/2017/05/23/9153-217588676_1920x1080.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
);

export default Home;



