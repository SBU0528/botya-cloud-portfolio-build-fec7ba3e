
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  href, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40",
    outline: "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary"
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-12 px-8 text-lg"
  };
  
  const buttonStyles = cn(baseStyles, variants[variant], sizes[size], className);
  
  if (href) {
    return <Link to={href} className={buttonStyles}>{children}</Link>;
  }
  
  return <button className={buttonStyles} {...props}>{children}</button>;
};

export default Button;
