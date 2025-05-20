import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Full-Screen Dynamic Cloud Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://cdn.pixabay.com/video/2022/02/15/22/07/clouds-7017095_1280.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 drop-shadow-xl">
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




