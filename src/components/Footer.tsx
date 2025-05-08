
import { Link } from "react-router-dom";
import { GitHub, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-montserrat font-bold text-xl">
              Sibusiso <span className="text-skyblue">Botya</span>
            </Link>
            <p className="text-softgray mt-2 text-sm max-w-xs">
              Cloud Associate at CAPACITI, driving innovations in cloud computing.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-montserrat font-medium mb-2 text-center md:text-left">Connect</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:sibusiso.botya@example.com" 
                  aria-label="Email"
                  className="hover:text-skyblue transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/sibusiso-botya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-skyblue transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/sibusisobotya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-skyblue transition-colors duration-200"
                >
                  <GitHub size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-medium mb-2 text-center md:text-left">Navigation</h4>
              <nav>
                <ul className="flex justify-center md:justify-start space-x-4">
                  <li><Link to="/" className="text-sm hover:text-skyblue transition-colors duration-200">Home</Link></li>
                  <li><Link to="/about" className="text-sm hover:text-skyblue transition-colors duration-200">About</Link></li>
                  <li><Link to="/contact" className="text-sm hover:text-skyblue transition-colors duration-200">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-xs text-gray-400">
          <p>© {currentYear} Sibusiso Botya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
