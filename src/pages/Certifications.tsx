"use client";
import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
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
  ChevronDown,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  skills: string[];
  link: string;
  icon: LucideIcon;
}

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const certifications: Certification[] = [
    /* your certifications array here, e.g.: */
    { title: "Generative AI: Introduction and Applications", issuer: "IBM", date: "May 2025", id: "5C55GRQPEBVI", skills: ["Generative AI","Artificial Intelligence"], link: "https://coursera.org/verify/5C55GRQPEBVI", icon: Cpu },
    /* …etc… */
  ];

  const filteredCertifications = certifications.filter(cert =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Professional certifications and qualifications that demonstrate my expertise and knowledge in various domains"
          />

          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search certifications by title, issuer, or skill..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500"
              />
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, idx) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 p-6 animate-fade-up"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-skyblue dark:text-skyblue mr-3 flex-shrink-0" size={24} />
                    <h3 className="text-lg font-bold font-montserrat text-navy dark:text-gray-100">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="mb-4 text-gray-700 dark:text-gray-300">
                    <p><span className="font-medium">Issuer:</span> {cert.issuer}</p>
                    <p><span className="font-medium">Date:</span> {cert.date}</p>
                    <p><span className="font-medium">Credential ID:</span> {cert.id}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-navy dark:text-gray-100 mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-softgray dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-skyblue hover:text-navy transition-colors dark:text-skyblue dark:hover:text-navy"
                  >
                    Show Credential <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCertifications.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              No certifications found matching your search.
            </div>
          )}
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
