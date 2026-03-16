"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import {
  ExternalLink,
  Search,
  Cloud,
  Cpu,
  Code,
  Headphones,
  HardDrive,
  Server,
  MessageCircle,
  Mail,
  Award,
} from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  skills: string[];
  link: string;
  icon: React.ComponentType<any>;
}

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCertId, setOpenCertId] = useState<string | null>(null);

  const toggleCertImage = (id: string) => {
    setOpenCertId(openCertId === id ? null : id);
  };

  const certifications: Certification[] = [
    { title: "CompTIA A+, Network+ & CCNA Routing and Switching", issuer: "Optimi College", date: "August 2024", id: "OC2591", skills: ["CompTIA A+", "CompTIA Network+", "CCNA Routing and Switching"], link: "#", icon: Server },
    { title: "Generative AI: Introduction and Applications", issuer: "IBM", date: "May 2025", id: "5C55GRQPEBVI", skills: ["Generative AI", "Artificial Intelligence"], link: "https://coursera.org/verify/5C55GRQPEBVI", icon: Cpu },
    { title: "Generative AI: Prompt Engineering Basics", issuer: "IBM", date: "May 2025", id: "N8SY1TUKJWCU", skills: ["Prompt Engineering", "Generative AI"], link: "https://coursera.org/verify/N8SY1TUKJWCU", icon: Code },
    { title: "Active Listening: Enhancing Communication Skills", issuer: "Coursera Instructor Network", date: "Mar 2025", id: "HCFGE4BL7FQI", skills: ["Cross-Cultural Communication Skills"], link: "https://coursera.org/verify/HCFGE4BL7FQI", icon: Headphones },
    { title: "Cloud Computing Foundations", issuer: "Duke University", date: "Mar 2025", id: "QH200NTBBIPJ", skills: ["Cloud Infrastructure"], link: "https://coursera.org/verify/QH200NTBBIPJ", icon: Cloud },
    { title: "Introduction to Cloud Computing", issuer: "United Latino Students Association", date: "Mar 2025", id: "4FLIYFX5KSN5", skills: ["Cloud Computing", "Cloud Infrastructure"], link: "https://coursera.org/verify/4FLIYFX5KSN5", icon: Cloud },
    { title: "Introduction to Hardware and Operating Systems", issuer: "IBM", date: "Mar 2025", id: "0AY0X7JIOQ83", skills: ["Computer Hardware Troubleshooting", "Hardware Installation", "Networking", "Operating Systems"], link: "https://coursera.org/verify/0AY0X7JIOQ83", icon: HardDrive },
    { title: "Introduction to Networking and Cloud Computing", issuer: "Microsoft", date: "Mar 2025", id: "NFHAM0TBZEFR", skills: ["Cloud Computing", "Networking and Cloud Computing"], link: "https://coursera.org/verify/NFHAM0TBZEFR", icon: Server },
    { title: "Verbal Communications and Presentation Skills", issuer: "Starweaver", date: "Mar 2025", id: "NNTM0DJMU6Y9", skills: ["Oral Communication", "Speech", "Verbal Behavior", "Communication Training"], link: "https://coursera.org/verify/NNTM0DJMU6Y9", icon: MessageCircle },
    { title: "Write Professional Emails in English", issuer: "Georgia Institute of Technology", date: "Mar 2025", id: "CDI63MS6WCY6", skills: ["Email Communications", "Professional Writing"], link: "https://coursera.org/verify/CDI63MS6WCY6", icon: Mail },
    { title: "Introduction to Microsoft Azure Cloud Services", issuer: "Microsoft", date: "May 2025", id: "KELY2TCWXD1Y", skills: ["Microsoft Azure", "Cloud Services"], link: "https://coursera.org/verify/KELY2TCWXD1Y", icon: Award },
    { title: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity", issuer: "University of California, Irvine", date: "May 2025", id: "514VSLW9RCJ9", skills: ["Time Management", "Productivity", "Workplace Skills"], link: "https://www.coursera.org/account/accomplishments/certificate/514VSLW9RCJ9", icon: Award },
    { title: "SFIA Infrastructure Engineer", issuer: "Coursera", date: "Aug 2025", id: "9dD-XNUKRfmQ_lzVCjX5PQ", skills: ["Infrastructure Engineering", "SFIA"], link: "https://www.coursera.org/account/accomplishments/badge/9dD-XNUKRfmQ_lzVCjX5PQ?utm_source=ln", icon: Award },
    { title: "Building Data Lakes on AWS", issuer: "Amazon Web Services (AWS)", date: "Aug 2025", id: "0WWWSY3C23S7", skills: ["Data Lakes", "AWS", "Cloud Storage"], link: "https://coursera.org/verify/0WWWSY3C23S7", icon: Cloud },
    { title: "Introduction to Software, Programming, and Databases", issuer: "IBM", date: "Aug 2025", id: "HDLL62JMIFZG", skills: ["Software Development", "Databases", "Programming"], link: "https://coursera.org/verify/HDLL62JMIFZG", icon: Code },
  ];

  const filtered = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Professional certifications and qualifications earned on my cloud journey"
          />

          {/* Search Input */}
          <div className="mb-12 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((cert, index) => (
              <div
                key={cert.id}
                className="glass-card-hover p-6 group animate-fade-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <cert.icon className="text-primary w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-1.5 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary/70 font-mono text-xs">Provider</span> · {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary/70 font-mono text-xs">Year</span> · {cert.date}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((skill, j) => (
                    <span key={j} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action */}
                {cert.id === "OC2591" ? (
                  <>
                    <button
                      onClick={() => toggleCertImage(cert.id)}
                      className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors duration-300"
                    >
                      {openCertId === cert.id ? "Hide Certificate" : "Show Credential"}
                      <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                    </button>
                    {openCertId === cert.id && (
                      <img src="/lovable-uploads/Certificate.jpg" alt="Optimi College Certificate" className="mt-4 w-full rounded-lg border border-border" />
                    )}
                  </>
                ) : (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors duration-300">
                    Show Credential <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No certifications match your search.</p>
            </div>
          )}
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
