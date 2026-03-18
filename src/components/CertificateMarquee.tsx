import React from "react";

interface CertData {
  id: string;
  title: string;
  provider: string;
  year: string;
  image: string;
  link: string;
}

interface CertificateMarqueeProps {
  certs: CertData[];
  direction?: "left" | "right";
  speed?: number;
}

const CertificateMarquee: React.FC<CertificateMarqueeProps> = ({
  certs,
  direction = "left",
  speed = 40,
}) => {
  // Duplicate for seamless loop
  const items = [...certs, ...certs];

  return (
    <div className="overflow-hidden py-4 group/marquee">
      <div
        className="flex gap-6 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {items.map((cert, i) => (
          <a
            key={`${cert.id}-${i}`}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[240px] md:w-[260px] lg:w-[280px] rounded-xl bg-card border border-border shadow-md 
                       transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl 
                       hover:[animation-play-state:paused] cursor-pointer group/card"
            style={{ animationPlayState: "inherit" }}
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-[170px] md:h-[180px] object-cover object-top transition-transform duration-300 group-hover/card:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="p-3 space-y-1">
              <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.provider}</p>
              <p className="text-xs text-muted-foreground">{cert.year}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificateMarquee;
