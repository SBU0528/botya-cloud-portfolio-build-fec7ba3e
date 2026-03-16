import React from 'react';
import { ChevronRight, Cloud, Server, Shield } from 'lucide-react';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Home: React.FC = () => (
  <Layout>
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '3s' }} />
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono mb-8 animate-fade-up">
          <Cloud className="w-4 h-4" />
          Cloud Associate at CAPACITI
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat text-foreground tracking-tight animate-fade-up glow-text" style={{ animationDelay: '0.1s' }}>
          Sibusiso <span className="text-gradient">Botya</span>
        </h1>
        
        <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Transforming cloud infrastructure into agile, scalable solutions.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="primary" size="lg" href="/about">
            Explore My Work <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" href="/certifications">
            View Certifications
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: Shield, label: "Certifications", value: "15+" },
            { icon: Cloud, label: "Cloud Platforms", value: "3+" },
            { icon: Server, label: "Projects", value: "5+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
