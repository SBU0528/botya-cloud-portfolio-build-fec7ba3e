import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home: React.FC = () => (
  <Layout>
    <div className="relative w-full h-screen">
      {/* Layered Video Background with Gradient Overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-data-network-2761/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

      {/* Animated Sparkle Overlay effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full animate-pulse bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/10 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0">
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl animate-fade-in">
          Sibusiso Botya
        </h1>
        <p className="mt-3 text-white text-base sm:text-lg md:text-2xl drop-shadow-lg animate-fade-in delay-200">
          Transforming cloud infrastructure into agile, scalable solutions.
        </p>
        <div className="mt-8 animate-fade-in delay-400">
          <Button variant="outline" size="lg" href="/about" className="border-white text-white hover:bg-white hover:text-black">
            Explore My Work <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
