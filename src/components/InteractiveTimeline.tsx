
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, Briefcase, Award, Rocket, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: number;
  type: 'education' | 'work' | 'certification' | 'achievement';
  date: string;
  title: string;
  organization: string;
  description: string;
  icon?: React.ReactNode;
  current?: boolean;
}

const InteractiveTimeline = () => {
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const events: TimelineEvent[] = [
    {
      id: 1,
      type: 'achievement',
      date: '2018',
      title: 'IT Journey Begins',
      organization: 'Self-study',
      description: 'Started exploring IT fundamentals through self-study and online resources, developing a passion for technology.',
      icon: <Rocket className="text-skyblue" size={24} />
    },
    {
      id: 2,
      type: 'education',
      date: '2023 - 2024',
      title: 'A+, Network+, CCNA Bundle',
      organization: 'Optimi College',
      description: 'Comprehensive online program covering computer hardware, networking fundamentals, and Cisco networking technologies.',
      icon: <Award className="text-skyblue" size={24} />
    },
    {
      id: 3,
      type: 'work',
      date: '2024 - 2025',
      title: 'Cloud Associate',
      organization: 'CAPACITI',
      description: 'Working with cloud technologies to design, implement, and maintain scalable and secure cloud infrastructure solutions.',
      icon: <Briefcase className="text-skyblue" size={24} />,
      current: true
    },
    {
      id: 4,
      type: 'certification',
      date: 'May 2025',
      title: 'Generative AI: Introduction and Applications',
      organization: 'IBM',
      description: 'Mastered core concepts of generative AI and its practical applications in business and technology contexts.',
      icon: <Code className="text-skyblue" size={24} />
    },
    {
      id: 5,
      type: 'certification',
      date: 'May 2025',
      title: 'Generative AI: Prompt Engineering Basics',
      organization: 'IBM',
      description: 'Developed skills in crafting effective prompts for generative AI systems to produce desired outputs.',
      icon: <Code className="text-skyblue" size={24} />
    }
  ];

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (direction === 'prev' && activeEvent > 0) {
      setActiveEvent(activeEvent - 1);
    } else if (direction === 'next' && activeEvent < events.length - 1) {
      setActiveEvent(activeEvent + 1);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveEvent(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        handleNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeEvent, isAnimating]);

  return (
    <div ref={timelineRef} className="max-w-4xl mx-auto relative px-4 py-12">
      {/* Timeline navigation */}
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={() => handleNavigate('prev')}
          disabled={activeEvent === 0 || isAnimating}
          className={cn(
            "p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors",
            (activeEvent === 0 || isAnimating) && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Previous event"
        >
          <ChevronLeft size={24} className="text-navy" />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold font-montserrat text-navy mb-2">My Journey</h3>
          <p className="text-gray-600">Navigate through key milestones</p>
        </div>
        
        <button 
          onClick={() => handleNavigate('next')}
          disabled={activeEvent === events.length - 1 || isAnimating}
          className={cn(
            "p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors",
            (activeEvent === events.length - 1 || isAnimating) && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Next event"
        >
          <ChevronRight size={24} className="text-navy" />
        </button>
      </div>
      
      {/* Timeline dots */}
      <div className="flex justify-center items-center mb-12 relative">
        <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>
        {events.map((event, index) => (
          <button
            key={event.id}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-4 h-4 rounded-full mx-2 z-10 transition-all duration-300 relative",
              index === activeEvent 
                ? "bg-skyblue scale-150" 
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`View ${event.title}`}
          >
            <span className="sr-only">{event.date}</span>
            {index === activeEvent && (
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-skyblue whitespace-nowrap">
                {event.date}
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Event details */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-500">
        <div className={cn(
          "transition-opacity duration-300",
          isAnimating ? "opacity-0" : "opacity-100"
        )}>
          <div className="flex items-center gap-3 mb-6">
            {events[activeEvent].icon || <Calendar size={24} className="text-skyblue" />}
            <div>
              <span className={cn(
                "text-sm px-3 py-1 rounded-full",
                {
                  'bg-blue-100 text-blue-800': events[activeEvent].type === 'education',
                  'bg-green-100 text-green-800': events[activeEvent].type === 'work',
                  'bg-purple-100 text-purple-800': events[activeEvent].type === 'certification',
                  'bg-orange-100 text-orange-800': events[activeEvent].type === 'achievement'
                }
              )}>
                {events[activeEvent].type.charAt(0).toUpperCase() + events[activeEvent].type.slice(1)}
              </span>
              {events[activeEvent].current && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Current
                </span>
              )}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold font-montserrat text-navy mb-2">
            {events[activeEvent].title}
          </h3>
          
          <h4 className="text-lg text-skyblue mb-4">
            {events[activeEvent].organization}
          </h4>
          
          <p className="text-gray-700">
            {events[activeEvent].description}
          </p>
          
          <div className="mt-8 text-sm text-gray-500 flex items-center">
            <span className="flex items-center mr-2">
              <Calendar size={14} className="mr-1" />
              {events[activeEvent].date}
            </span>
            
            <span className="ml-auto text-navy">
              {activeEvent + 1} of {events.length}
            </span>
          </div>
        </div>
      </div>
      
      {/* Keyboard navigation hint */}
      <div className="text-center mt-4 text-sm text-gray-500">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
};

export default InteractiveTimeline;
