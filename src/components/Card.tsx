
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1",
      className
    )}>
      {children}
    </div>
  );
};

export default Card;
