import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { Search, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  link: string;
  image?: string;
}

const certifications: Certification[] = [
  {
    title: "Grit and Growth Mindset",
    issuer: "Arizona State University",
    date: "Jun 2025",
    id: "72MIK4N4HQ6H",
    link: "https://coursera.org/verify/72MIK4N4HQ6H",
    image: "/certificates/Coursera-72MIK4N4HQ6H.png",
  },
  {
    title: "Introduction to Personal Branding",
    issuer: "University of Virginia",
    date: "Jun 2025",
    id: "69GPATQI4299",
    link: "https://coursera.org/verify/69GPATQI4299",
    image: "/certificates/Coursera-69GPATQI4299.png",
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2025",
    id: "1LRZWR79304I",
    link: "https://coursera.org/verify/1LRZWR79304I",
    image: "/certificates/Coursera-1LRZWR79304I.png",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    date: "Mar 2025",
    id: "4FLIYFX5KSN5",
    link: "https://coursera.org/verify/4FLIYFX5KSN5",
    image: "/certificates/Coursera-4FLIYFX5KSN5.png",
  },
  {
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    date: "May 2025",
    id: "5C55GRQPEBVI",
    link: "https://coursera.org/verify/5C55GRQPEBVI",
    image: "/certificates/Coursera-5C55GRQPEBVI.png",
  },
  {
    title: "Leading with Impact: Team Dynamics, Strategy and Ethics",
    issuer: "Coursera Instructor Network",
    date: "Jun 2025",
    id: "7I6K1AXUNR0I",
    link: "https://coursera.org/verify/7I6K1AXUNR0I",
    image: "/certificates/Coursera-7I6K1AXUNR0I.png",
  },
  {
    title: "Positive Psychology: Resilience Skills",
    issuer: "University of Pennsylvania",
    date: "Jun 2025",
    id: "9B60KURFZYNA",
    link: "https://coursera.org/verify/9B60KURFZYNA",
    image: "/certificates/Coursera-9B60KURFZYNA.png",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "Mar 2025",
    id: "0AY0X7JIOQ83",
    link: "https://coursera.org/verify/0AY0X7JIOQ83",
    image: "/certificates/Coursera-0AY0X7JIOQ83.png",
  },
  {
    title: "CompTIA A+, Network+ & CCNA Routing and Switching",
    issuer: "Optimi College",
    date: "Aug 2024",
    id: "OC2591",
    link: "#",
    image: "/lovable-uploads/Certificate.jpg",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "May 2025",
    id: "N8SY1TUKJWCU",
    link: "https://coursera.org/verify/N8SY1TUKJWCU",
  },
  {
    title: "Active Listening: Enhancing Communication Skills",
    issuer: "Coursera Instructor Network",
    date: "Mar 2025",
    id: "HCFGE4BL7FQI",
    link: "https://coursera.org/verify/HCFGE4BL7FQI",
  },
  {
    title: "Cloud Computing Foundations",
    issuer: "Duke University",
    date: "Mar 2025",
    id: "QH200NTBBIPJ",
    link: "https://coursera.org/verify/QH200NTBBIPJ",
  },
  {
    title: "Introduction to Networking and Cloud Computing",
    issuer: "Microsoft",
    date: "Mar 2025",
    id: "NFHAM0TBZEFR",
    link: "https://coursera.org/verify/NFHAM0TBZEFR",
  },
  {
    title: "Verbal Communications and Presentation Skills",
    issuer: "Starweaver",
    date: "Mar 2025",
    id: "NNTM0DJMU6Y9",
    link: "https://coursera.org/verify/NNTM0DJMU6Y9",
  },
  {
    title: "Write Professional Emails in English",
    issuer: "Georgia Institute of Technology",
    date: "Mar 2025",
    id: "CDI63MS6WCY6",
    link: "https://coursera.org/verify/CDI63MS6WCY6",
  },
  {
    title: "Introduction to Microsoft Azure Cloud Services",
    issuer: "Microsoft",
    date: "May 2025",
    id: "KELY2TCWXD1Y",
    link: "https://coursera.org/verify/KELY2TCWXD1Y",
  },
  {
    title: "Work Smarter, Not Harder: Time Management",
    issuer: "University of California, Irvine",
    date: "May 2025",
    id: "514VSLW9RCJ9",
    link: "https://www.coursera.org/account/accomplishments/certificate/514VSLW9RCJ9",
  },
  {
    title: "SFIA Infrastructure Engineer",
    issuer: "Coursera",
    date: "Aug 2025",
    id: "9dD-XNUKRfmQ_lzVCjX5PQ",
    link: "https://www.coursera.org/account/accomplishments/badge/9dD-XNUKRfmQ_lzVCjX5PQ",
  },
  {
    title: "Building Data Lakes on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2025",
    id: "0WWWSY3C23S7",
    link: "https://coursera.org/verify/0WWWSY3C23S7",
  },
  {
    title: "Introduction to Software, Programming, and Databases",
    issuer: "IBM",
    date: "Aug 2025",
    id: "HDLL62JMIFZG",
    link: "https://coursera.org/verify/HDLL62JMIFZG",
  },
];

const CertCard: React.FC<{ cert: Certification; onClick: () => void }> = ({ cert, onClick }) => (
  <div
    className="flex-shrink-0 w-[calc(20%-1.2rem)] min-w-[220px] cursor-pointer group/card"
    onClick={onClick}
  >
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300">
      {cert.image ? (
        <div className="overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-44 object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-44 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary/30 select-none">
            {cert.issuer.charAt(0)}
          </span>
        </div>
      )}
      <div className="p-3">
        <h3 className="font-semibold text-card-foreground text-xs leading-snug mb-1 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-[11px] text-muted-foreground">{cert.issuer}</p>
        <p className="text-[11px] text-muted-foreground mb-1.5">{cert.date}</p>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:text-primary/80 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Verify <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  </div>
);

const MarqueeRow: React.FC<{
  certs: Certification[];
  direction?: "left" | "right";
  onSelect: (img: string) => void;
}> = ({ certs, direction = "left", onSelect }) => {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden py-3">
      <div className={`flex gap-5 w-max ${animationClass}`}>
        {[...certs, ...certs].map((cert, i) => (
          <CertCard
            key={`${cert.id}-${i}`}
            cert={cert}
            onClick={() => cert.image && onSelect(cert.image)}
          />
        ))}
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const half = Math.ceil(filtered.length / 2);
  const row1 = filtered.slice(0, half);
  const row2 = filtered.slice(half);

  const isSearching = searchTerm.length > 0;

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-foreground">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Professional certifications and qualifications"
          />

          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {isSearching ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
              {filtered.map((cert) => (
                <div key={cert.id}>
                  <CertCard cert={cert} onClick={() => cert.image && setSelectedImage(cert.image)} />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              <MarqueeRow certs={row1} direction="left" onSelect={setSelectedImage} />
              <MarqueeRow certs={row2} direction="right" onSelect={setSelectedImage} />
            </div>
          )}
        </Section>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </Layout>
  );
};

export default Certifications;
