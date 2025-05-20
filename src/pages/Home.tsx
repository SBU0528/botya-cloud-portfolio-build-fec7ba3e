import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2017/05/23/9153-217588676_1920x1080.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Sibusiso Botya
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl mb-8 drop-shadow-md">
            Transforming cloud infrastructure into agile, scalable solutions.
          </p>
          <Button variant="outline" size="lg" href="/about">
            Explore My Work <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;



