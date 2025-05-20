import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home: React.FC = () => (
  <Layout>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Digital Cloud-Computing Animation Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-cloud-networks-1579/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-2xl">
          Sibusiso Botya
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl drop-shadow-xl">
          Transforming cloud infrastructure into agile, scalable solutions.
        </p>
        <div className="mt-8">
          <Button variant="outline" size="lg" href="/about">
            Explore My Work <ChevronRight className="ml-2 h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;





