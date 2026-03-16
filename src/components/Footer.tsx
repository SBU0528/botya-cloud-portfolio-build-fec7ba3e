
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-background/50 backdrop-blur-sm pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-montserrat font-bold text-xl text-foreground">
              Sibusiso <span className="text-primary">Botya</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm max-w-xs">
              Cloud Associate at CAPACITI, driving innovations in cloud computing.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-montserrat font-medium mb-2 text-center md:text-left text-foreground">Connect</h4>
              <div className="flex justify-center space-x-4">
                <a href="mailto:botyasibusiso@gmail.com" aria-label="Email"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10">
                  <Mail size={18} />
                </a>
                <a href="https://linkedin.com/in/sibusiso-botya-7a807224a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/SBU0528" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10">
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-medium mb-2 text-center md:text-left text-foreground">Navigation</h4>
              <nav>
                <ul className="flex justify-center md:justify-start space-x-4">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About" },
                    { to: "/certifications", label: "Certifications" },
                    { to: "/contact", label: "Contact" },
                  ].map(link => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 mt-8 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Sibusiso Botya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
