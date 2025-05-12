
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

const Home = () => {
  useEffect(() => {
    // Set up scroll animation for elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = "1";
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".initially-hidden");
    hiddenElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        observer.observe(el);
      }
    });

    return () => {
      hiddenElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-navy/70 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-cloudscape-2602/1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-white mb-6 animate-fade-up">
            Sibusiso Botya
          </h1>
          <h2 className="text-xl md:text-3xl font-montserrat text-white mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Cloud Associate at CAPACITI | Driving Innovations in Cloud Computing
          </h2>
          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Let's connect and explore how my expertise can benefit your projects.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="outline" size="lg" href="/certifications">
              Explore My Work <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-navy mb-4 initially-hidden opacity-0">
            Cloud Computing Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto initially-hidden opacity-0">
            Bringing innovation and technical excellence to cloud infrastructure and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Cloud Infrastructure",
              description: "Building scalable and reliable cloud architectures with industry best practices"
            },
            {
              title: "Networking & Security", 
              description: "Implementing secure network solutions with CCNA-level expertise"
            },
            {
              title: "Technical Communication",
              description: "Effectively communicating complex technical concepts to diverse audiences"
            }
          ].map((item, index) => (
            <Card key={index} className={cn("p-8 initially-hidden opacity-0")}>
              <h3 className="text-xl font-bold font-montserrat text-navy mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray" padding="lg" className="text-center">
        <div className="max-w-3xl mx-auto initially-hidden opacity-0">
          <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-navy mb-6">
            Let's connect!
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            I'm excited to explore how my cloud expertise can help drive your projects forward.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
