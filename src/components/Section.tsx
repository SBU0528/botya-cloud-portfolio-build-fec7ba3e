
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "alt" | "white" | "gray";
  padding?: "sm" | "md" | "lg" | "xl" | "none";
}

const Section = ({ 
  children, 
  className, 
  background = "default",
  padding = "lg" 
}: SectionProps) => {
  const bgColors: Record<string, string> = {
    default: "",
    alt: "bg-secondary/30",
    white: "",
    gray: "bg-secondary/30",
  };
  
  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16 md:py-24",
    xl: "py-24 md:py-32"
  };
  
  return (
    <section className={cn(
      bgColors[background],
      paddingClasses[padding],
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
