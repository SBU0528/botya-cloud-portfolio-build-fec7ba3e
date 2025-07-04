import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home: React.FC = () => (
  <Layout>
    <div className="relative w-full h-screen overflow-hidden">
      {/* IT Cloud Computing Animation Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2019/10/10/27725-365890983_large.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Subtle Blue Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/30 to-transparent" />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl animate-fade-in">
          Sibusiso Botya
        </h1>
        <p className="mt-4 text-blue-200 text-lg md:text-2xl drop-shadow-lg animate-fade-in delay-200">
          Transforming cloud infrastructure into agile, scalable solutions.
        </p>
        <div className="mt-8 animate-fade-in delay-400">
          <Button
            variant="outline"
            size="lg"
            href="/about"
            className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white"
          >
            Explore My Work <ChevronRight className="ml-2 h-5 w-5 text-blue-300" />
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
