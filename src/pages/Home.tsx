import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Full-Screen Cloud Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2017/05/23/9153-217588676_1920x1080.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Sibusiso Botya
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8 drop-shadow-md">
            Transforming cloud infrastructure into agile, scalable solutions.
          </p>
          <Button variant="outline" size="lg" href="/about">
            Explore My Work <ChevronRight className="ml-2 h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;



