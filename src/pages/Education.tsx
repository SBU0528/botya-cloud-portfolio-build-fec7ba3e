
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { GraduationCap, Briefcase, Calendar, ExternalLink, Github, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up intersection observer for animation
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select timeline items to observe
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader 
            title="Education" 
            subtitle="My academic journey and professional development in IT and cloud computing"
          />
          
          {/* Timeline Section */}
          <div className="px-4 md:px-10 max-w-full mx-auto py-12" ref={timelineRef}>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-navy mb-12 text-center">
              My Journey
            </h2>
            
            <div className="relative">
              {/* Center line - visible on desktop only */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 md:space-y-24 relative">
                {/* Item 1 - IT Journey Begins */}
                <div className="timeline-item opacity-0 md:flex md:justify-end md:pr-[52%] md:odd:justify-start md:odd:pl-[52%] md:odd:pr-4">
                  <div className={cn(
                    "bg-white p-6 rounded-lg shadow-md relative z-10 border-l-4 border-skyblue",
                    "md:border-l-0 md:even:border-r-4 md:w-full"
                  )}>
                    {/* Timeline dot - desktop */}
                    <div className="hidden md:flex absolute top-6 -right-11 md:odd:-left-11 md:odd:right-auto w-6 h-6 rounded-full bg-skyblue items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-full md:order-1">
                        <GraduationCap size={28} className="text-skyblue" />
                      </div>
                      <div className="flex-1">
                        <span className="text-skyblue text-lg font-semibold">2018</span>
                        <h3 className="text-xl font-bold mt-1 mb-2 text-navy">IT Journey Begins</h3>
                        <p className="text-gray-600">
                          Started exploring IT fundamentals through self-study and online resources, developing a passion for technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 - Optimi College */}
                <div className="timeline-item opacity-0 md:flex md:justify-start md:pl-[52%] md:even:justify-end md:even:pr-[52%] md:even:pl-4">
                  <div className={cn(
                    "bg-white p-6 rounded-lg shadow-md relative z-10 border-l-4 border-skyblue",
                    "md:border-l-0 md:odd:border-l-4 md:odd:border-r-0 md:w-full"
                  )}>
                    {/* Timeline dot - desktop */}
                    <div className="hidden md:flex absolute top-6 -left-11 md:even:-right-11 md:even:left-auto w-6 h-6 rounded-full bg-skyblue items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-full">
                        <Calendar size={28} className="text-skyblue" />
                      </div>
                      <div className="flex-1">
                        <span className="text-skyblue text-lg font-semibold">2023 - 2024</span>
                        <h3 className="text-xl font-bold mt-1 mb-2 text-navy">A+, Network+, CCNA Bundle</h3>
                        <p className="text-gray-600">
                          Comprehensive online program covering computer hardware, networking fundamentals, and Cisco networking technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 - CAPACITI */}
                <div className="timeline-item opacity-0 md:flex md:justify-end md:pr-[52%] md:odd:justify-start md:odd:pl-[52%] md:odd:pr-4">
                  <div className={cn(
                    "bg-white p-6 rounded-lg shadow-md relative z-10 border-l-4 border-skyblue",
                    "md:border-l-0 md:even:border-r-4 md:w-full"
                  )}>
                    {/* Timeline dot - desktop */}
                    <div className="hidden md:flex absolute top-6 -right-11 md:odd:-left-11 md:odd:right-auto w-6 h-6 rounded-full bg-skyblue items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-full md:order-1">
                        <Briefcase size={28} className="text-skyblue" />
                      </div>
                      <div className="flex-1">
                        <span className="text-skyblue text-lg font-semibold">2025 - Present</span>
                        <h3 className="text-xl font-bold mt-1 mb-2 text-navy">Cloud Associate</h3>
                        <p className="text-gray-600">
                          Working with cloud technologies to design, implement, and maintain scalable and secure cloud infrastructure solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Professional Development Section */}
        <Section background="gray" padding="lg">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent text-center py-8 mb-12 drop-shadow-lg animate-fade-up">
            Professional Development
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 animate-fade-up">
              <h3 className="text-xl font-bold font-montserrat text-navy mb-6">Continuous Learning Journey</h3>
              <p className="text-gray-700 mb-6">
                My passion for technology drives me to continuously expand my knowledge and skills. Beyond formal education, I engage in self-directed learning through various platforms:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-skyblue flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy">Online Platforms</h4>
                    <p className="text-gray-600">Regular participation in courses on platforms like Coursera, Udemy, and Microsoft Learn to stay current with cloud technologies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-skyblue flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy">Technical Communities</h4>
                    <p className="text-gray-600">Active member of cloud computing communities and forums where I both learn from and contribute to discussions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-skyblue flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy">Hands-on Projects</h4>
                    <p className="text-gray-600">Regular implementation of personal projects to apply theoretical knowledge and develop practical skills in cloud services.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section background="white" padding="lg">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent text-center py-8 mb-12 drop-shadow-lg animate-fade-up">
            Projects
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 animate-fade-up">
              <h3 className="text-2xl font-bold font-montserrat text-navy mb-4">My First Project</h3>
              <p className="text-gray-700 mb-6">
                A comprehensive cloud portfolio website showcasing my journey in cloud computing and IT. Built with modern web technologies and deployed using GitHub Pages, this project demonstrates my skills in web development, responsive design, and cloud deployment strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-6">
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="https://sbu0528.github.io/botya-cloud-portfolio-build-fec7ba3e/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 bg-skyblue text-white font-medium rounded-lg hover:bg-navy transition-colors duration-200 gap-2"
                        >
                          <ExternalLink size={18} />
                          View Live
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Opens in new tab</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    Live – Deployed via GitHub Pages
                  </Badge>
                </div>
                <a
                  href="https://github.com/SBU0528/botya-cloud-portfolio-build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-skyblue text-skyblue font-medium rounded-lg hover:bg-skyblue hover:text-white transition-colors duration-200 gap-2"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>

              {/* GitHub Pages Setup Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-900 mb-2">GitHub Pages Setup Instructions</h4>
                    <p className="text-xs text-blue-700 mb-2">To deploy your own project via GitHub Pages:</p>
                    <ol className="text-xs text-blue-700 space-y-1 list-decimal list-inside">
                      <li>Navigate to your repository Settings</li>
                      <li>Click on Pages in the left sidebar</li>
                      <li>Select "Deploy from a branch" under Source</li>
                      <li>Choose "main" branch and "/ (root)" folder</li>
                      <li>Click Save and wait for deployment</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Education;
