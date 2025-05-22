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
} from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  skills: string[];
  link: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCertId, setOpenCertId] = useState<string | null>(null);

  const toggleCertImage = (id: string) => {
    setOpenCertId((current) => (current === id ? null : id));
  };

  const certifications: Certification[] = [
    { title: "CompTIA A+, Network+ & CCNA Routing and Switching", issuer: "Optimi College", date: "August 2024", id: "OC2591", skills: ["CompTIA A+", "CompTIA Network+", "CCNA Routing and Switching"], link: "#", icon: Server },
    { title: "Generative AI: Introduction and Applications", issuer: "IBM", date: "May 2025", id: "5C55GRQPEBVI", skills: ["Generative AI", "Artificial Intelligence"], link: "https://coursera.org/verify/5C55GRQPEBVI", icon: Cpu },
    { title: "Generative AI: Prompt Engineering Basics", issuer: "IBM", date: "May 2025", id: "N8SY1TUKJWCU", skills: ["Prompt Engineering", "Generative AI"], link: "https://coursera.org/verify/N8SY1TUKJWCU", icon: Code },
    { title: "Active Listening: Enhancing Communication Skills", issuer: "Coursera Instructor Network", date: "Mar 2025", id: "HCFGE4BL7FQI", skills: ["Cross‑Cultural Communication Skills"], link: "https://coursera.org/verify/HCFGE4BL7FQI", icon: Headphones },
    { title: "Cloud Computing Foundations", issuer: "Duke University", date: "Mar 2025", id: "QH200NTBBIPJ", skills: ["Cloud Infrastructure"], link: "https://coursera.org/verify/QH200NTBBIPJ", icon: Cloud },
    { title: "Introduction to Cloud Computing", issuer: "United Latino Students Association", date: "Mar 2025", id: "4FLIYFX5KSN5", skills: ["Cloud Computing", "Cloud Infrastructure"], link: "https://coursera.org/verify/4FLIYFX5KSN5", icon: Cloud },
    { title: "Introduction to Hardware and Operating Systems", issuer: "IBM", date: "Mar 2025", id: "0AY0X7JIOQ83", skills: ["Computer Hardware Troubleshooting", "Hardware Installation", "Networking", "Operating Systems"], link: "https://coursera.org/verify/0AY0X7JIOQ83", icon: HardDrive },
    { title: "Introduction to Networking and Cloud Computing", issuer: "Microsoft", date: "Mar 2025", id: "NFHAM0TBZEFR", skills: ["Cloud Computing", "Networking and Cloud Computing"], link: "https://coursera.org/verify/NFHAM0TBZEFR", icon: Server },
    { title: "Verbal Communications and Presentation Skills", issuer: "Starweaver", date: "Mar 2025", id: "NNTM0DJMU6Y9", skills: ["Oral Communication", "Speech", "Verbal Behavior", "Communication Training"], link: "https://coursera.org/verify/NNTM0DJMU6Y9", icon: MessageCircle },
    { title: "Write Professional Emails in English", issuer: "Georgia Institute of Technology", date: "Mar 2025", id: "CDI63MS6WCY6", skills: ["Email Communications", "Professional Writing"], link: "https://coursera.org/verify/CDI63MS6WCY6", icon: Mail },
  ];

  const filtered = certifications.filter((cert) =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader title="Certifications" subtitle="Professional certifications and qualifications" />

          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow transition transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <Icon size={24} className="text-skyblue mr-3 dark:text-skyblue" />
                    <h3 className="font-semibold text-navy dark:text-gray-100">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    <strong>Issuer:</strong> {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Date:</strong> {cert.date}
                  </p>
                  {cert.id === "OC2591" ? (
                    <>
                      <button
                        onClick={() => toggleCertImage(cert.id)}
                        className="inline-flex items-center text-skyblue hover:text-navy transition-colors dark:text-skyblue dark:hover:text-navy"
                      >
                        {openCertId === cert.id ? "Hide Certificate" : "Show Certificate"}{" "}
                        <ExternalLink className="ml-1" size={16} />
                      </button>
                      {openCertId === cert.id && (
                        <img
                          src="/lovable-uploads/optimi-cert.jpg"
                          alt="Optimi Certificate"
                          className="mt-4 w-full rounded shadow"
                        />
                      )}
                    </>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-skyblue hover:text-navy transition-colors dark:text-skyblue dark:hover:text-navy"
                    >
                      Show Credential <ExternalLink className="ml-1" size={16} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Badges Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-navy dark:text-gray-100">Badges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
                <img
                  src="/lovable-uploads/jjm0D17QQzm5tA9e0OM5UQ-1.png"
                  alt="IBM Generative AI Credential Badge"
                  className="w-32 h-auto mb-2"
                />
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  IBM Generative AI – Credential Badge
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
                <img
                  src="/lovable-uploads/jjm0D17QQzm5tA9e0OM5UQ-2.png"
                  alt="Duke Cloud Computing Credential Badge"
                  className="w-32 h-auto mb-2"
                />
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Duke Cloud Computing – Credential Badge
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
