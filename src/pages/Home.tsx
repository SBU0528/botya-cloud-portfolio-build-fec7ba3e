import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll animation setup
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          if (entry.target instanceof HTMLElement) entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".initially-hidden").forEach((el) => observer.observe(el));
    return () => document.querySelectorAll(".initially-hidden").forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* Hero Section with Cloud Video Background */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-cloudscape-2602/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            Sibusiso Botya
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white drop-shadow-md max-w-2xl">
            Transforming cloud infrastructure into agile, scalable solutions.
          </p>
          <div className="mt-8">
            <Button variant="outline" size="lg" href="/about">
              Explore My Work <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Experience Highlights */}
      <Section background="white" padding="lg">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-navy initially-hidden opacity-0")}>Cloud Computing Expertise</h2>
          <p className={cn("mt-4 text-lg text-gray-600 initially-hidden opacity-0")}>
            Delivering robust cloud, networking, and security solutions with precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Cloud Infrastructure", desc: "Designing and deploying scalable cloud architectures." },
            { title: "Networking & Security", desc: "Securing networks with CCNA-grade expertise." },
            { title: "Technical Communication", desc: "Conveying complex concepts to diverse audiences." }
          ].map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "p-8 bg-white rounded-lg shadow-lg initially-hidden opacity-0",
                "animate-fade-up",
              )}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray" padding="lg" className="text-center">
        <div className="max-w-3xl mx-auto initially-hidden opacity-0 animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Let’s Connect
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Ready to take your cloud journey to the next level? Get in touch!
          </p>
          <Button href="/contact" size="lg">
            Contact Me <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
