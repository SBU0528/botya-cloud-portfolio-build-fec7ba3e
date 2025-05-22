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

interface Item {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
  link?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const certifications: Item[] = [
    // … your existing certifications …
  ];

  const badges: Item[] = [
    {
      id: "JJM0D17QQzm5tA9e0OM5UQ-1",
      title: "Generative AI Essentials",
      issuer: "Coursera / IBM",
      date: "5 May 2025",
    },
    {
      id: "JJM0D17QQzm5tA9e0OM5UQ-2",
      title: "Introduction to Cloud Computing",
      issuer: "Coursera / IBM",
      date: "12 May 2025",
    },
  ];

  const filteredCerts = certifications.filter(
    c =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.skills || []).some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications & Badges"
            subtitle="Click ‘Show Credential’ to view details"
          />

          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              />
              <input
                type="text"
                placeholder="Filter by title or issuer…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-skyblue dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredCerts.map(cert => {
              const Icon = cert.icon!;
              return (
                <div key={cert.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
                  <div className="flex items-center mb-4">
                    {Icon && <Icon className="text-skyblue mr-3" size={24} />}
                    <h3 className="font-semibold text-navy dark:text-gray-100">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Issuer:</strong> {cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4"><strong>Date:</strong> {cert.date}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-skyblue hover:text-navy"
                  >
                    Show Credential <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Badges Section */}
          <h2 className="text-2xl font-bold mb-6 text-center text-navy dark:text-gray-100">Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {badges.map(badge => (
              <div key={badge.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-navy dark:text-gray-100 mb-2">{badge.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1"><strong>Issuer:</strong> {badge.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4"><strong>Date:</strong> {badge.date}</p>
                <button
                  onClick={() => toggle(badge.id)}
                  className="inline-flex items-center text-skyblue hover:text-navy"
                >
                  {openId === badge.id ? "Hide Credential" : "Show Credential"} <ExternalLink className="ml-1" size={16} />
                </button>
                {openId === badge.id && (
                  <img
                    src={`/badges/${badge.id}.png`}
                    alt={`${badge.title} Badge`}
                    className="mt-4 w-full rounded shadow"
                  />
                )}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
