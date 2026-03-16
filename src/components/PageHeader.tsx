
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-gradient mb-4 animate-fade-up glow-text">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-fade-up" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export default PageHeader;
