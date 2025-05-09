
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-navy dark:text-white mb-4 animate-fade-up">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
