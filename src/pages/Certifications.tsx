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

  const filtered = certifications.filter(cert =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Click to expand and explore each credential"
          />

          {/* Search */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              />
              <input
                type="text"
                placeholder="Filter by title, issuer or skill…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-skyblue dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filtered.map((cert, idx) => {
              const Icon = cert.icon;
              const isOpen = openIndex === idx;
              return (
                <details
                  key={idx}
                  open={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? null : idx)}
                  className="group bg-white dark:bg-gray-900 rounded-lg shadow transition"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <div className="flex items-center">
                      <Icon
                        size={24}
                        className="text-skyblue dark:text-skyblue mr-4 flex-shrink-0"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-navy dark:text-gray-100">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      } text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200`}
                    />
                  </summary>
                  <div className="px-6 pb-6 space-y-4 border-t border-gray-100 dark:border-gray-700">
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Skills Demonstrated
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((s, i) => (
                          <span
                            key={i}
                            className="bg-softgray dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-skyblue hover:text-navy transition"
                    >
                      View Credential <ExternalLink className="ml-1" size={16} />
                    </a>
                  </div>
                </details>
              );
            })}
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-12">
                No certifications match your search.
              </p>
            )}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
