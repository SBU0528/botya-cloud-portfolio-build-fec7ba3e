
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Code, Rocket, Calendar } from "lucide-react";

interface TechnologyBadgeProps {
  name: string;
}

const TechnologyBadge = ({ name }: TechnologyBadgeProps) => (
  <span className="inline-block bg-softgray text-navy px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
    {name}
  </span>
);

interface CaseStudyProps {
  title: string;
  date: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string;
  image?: string;
  children?: ReactNode;
  orientation?: "left" | "right";
}

const CaseStudy = ({ 
  title, 
  date, 
  problem, 
  solution, 
  technologies, 
  results, 
  image, 
  children,
  orientation = "left"
}: CaseStudyProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-8 py-12 border-b border-gray-200 last:border-0",
      orientation === "right" && "md:flex-row-reverse"
    )}>
      {/* Image Section */}
      {image && (
        <div className="w-full md:w-2/5">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
            <img 
              src={image} 
              alt={`${title} case study illustration`} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <div className={cn(
        "w-full",
        image ? "md:w-3/5" : "md:w-full"
      )}>
        <div className="flex items-center gap-2 text-skyblue mb-2">
          <Calendar size={16} />
          <span className="text-sm">{date}</span>
        </div>
        
        <h3 className="text-2xl font-bold font-montserrat text-navy mb-4">{title}</h3>
        
        <div className="mb-6">
          <h4 className="flex items-center gap-2 font-semibold text-lg mb-2">
            <Code size={18} className="text-skyblue" /> Problem Statement
          </h4>
          <p className="text-gray-700">{problem}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="flex items-center gap-2 font-semibold text-lg mb-2">
            <Rocket size={18} className="text-skyblue" /> Solution
          </h4>
          <p className="text-gray-700">{solution}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
          <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
              <TechnologyBadge key={index} name={tech} />
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-lg mb-2">Results & Impact</h4>
          <p className="text-gray-700">{results}</p>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default CaseStudy;
