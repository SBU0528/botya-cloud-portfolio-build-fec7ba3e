"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import {
  ExternalLink,
  Search,
  Server,
  Cpu,
  Code,
} from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  skills: string[];
  link: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  image?: string;
}

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalCert, setModalCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    // put your full list here (same as before)
    { title: "CompTIA A+, Network+ & CCNA Routing and Switching", issuer: "Optimi College", date: "August 2024", id: "OC2591", skills: ["CompTIA A+", "CompTIA Network+", "CCNA Routing and Switching"], link: "#", icon: Server },
    { title: "Generative AI: Introduction and Applications", issuer: "IBM", date: "May 2025", id: "5C55GRQPEBVI", skills: ["Generative AI"], link: "https://coursera.org/verify/5C55GRQPEBVI", icon: Cpu },
    { title: "Generative AI: Prompt Engineering Basics", issuer: "IBM", date: "May 2025", id: "N8SY1TUKJWCU", skills: ["Prompt Engineering"], link: "https://coursera.org/verify/N8SY1TUKJWCU", icon: Code },
    // ... add the rest
  ];

  const filtered = certifications.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // explicit mapping based on filenames you uploaded (case-sensitive!)
  const explicitImageMap: Record<string, string> = {
    OC2591: "/Certificates/Certificate~OC2591.jpg",
    "5C55GRQPEBVI": "/Certificates/CERTIFICATE~5C55GRQPEBVI.jpeg",
    N8SY1TUKJWCU: "/Certificates/CERTIFICATE~N8SY1TUKJWCU.jpeg",
    HCFGE4BL7FQI: "/Certificates/CERTIFICATE~HCFGE4BL7FQI.jpeg",
    HDLL62JMIFZG: "/Certificates/CERTIFICATE~HDLL62JMIFZG.jpeg",
    KELY2TCWXD1Y: "/Certificates/CERTIFICATE~KELY2TCWXD1Y.jpeg",
    NFHAM0TBZEFR: "/Certificates/CERTIFICATE~NFHAM0TBZEFR.jpeg",
    NNTM0DJMU6Y9: "/Certificates/CERTIFICATE~NNTM0DJMU6Y9.jpeg",
    QH200NTBBIPJ: "/Certificates/CERTIFICATE~QH200NTBBIPJ.jpeg",
    "4FLIYFX5KSN5": "/Certificates/CERTIFICATE~4FLIYFX5KSN5.jpeg",
    CDI63MS6WCY6: "/Certificates/CERTIFICATE~CDI63MS6WCY6.jpeg",
    "0WWWSY3C23S7": "/Certificates/CERTIFICATE~0WWWSY3C23S7.jpeg",
    "0AY0X7JIOQ83": "/Certificates/Coursera-0AY0X7JIOQ83.jpg",
    // add any extra mappings here if needed
  };

  // fallback patterns tried in order (onError will cycle)
  const fallbackPatterns = (id: string) => [
    explicitImageMap[id] ?? `/Certificates/CERTIFICATE~${id}.jpeg`,
    `/Certificates/CERTIFICATE~${id}.jpg`,
    `/Certificates/CERTIFICATE~${id}.png`,
    `/Certificates/Coursera-${id}.jpg`,
    `/Certificates/Coursera-${id}.png`,
    `/Certificates/${id}.jpg`,
    `/Certificates/${id}.jpeg`,
    `/Certificates/${id}.png`,
    "/preview.png",
  ];

  const resolveInitialSrc = (id: string) => explicitImageMap[id] ?? `/Certificates/CERTIFICATE~${id}.jpeg`;

  // Escape to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalCert(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader title="Certifications" subtitle="Professional certifications and qualifications" />

          {/* Search */}
          <div className="mb-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                aria-label="Search certifications"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search certifications..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-400"
              />
            </div>
          </div>

          {/* GRID: 1 / 2 / 3 / 5 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filtered.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-900 rounded-lg shadow p-3">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setModalCert(cert)}
                  onKeyDown={(e) => { if (e.key === "Enter") setModalCert(cert); }}
                  className="cursor-pointer rounded overflow-hidden bg-gray-50 dark:bg-gray-800"
                >
                  <img
                    src={resolveInitialSrc(cert.id)}
                    alt={`${cert.title} certificate`}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const attempt = img.dataset.attempt ? Number(img.dataset.attempt) : 0;
                      const patterns = fallbackPatterns(cert.id);
                      if (attempt < patterns.length) {
                        img.dataset.attempt = String(attempt + 1);
                        img.src = patterns[attempt];
                      } else {
                        img.src = "/preview.png";
                      }
                    }}
                  />
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-navy dark:text-gray-100">{cert.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                  <div className="mt-2">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-600 inline-flex items-center">
                      Open Certificate <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {modalCert && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setModalCert(null)}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-3 border-b">
                  <div>
                    <h3 className="text-lg font-semibold">{modalCert.title}</h3>
                    <p className="text-xs text-gray-500">{modalCert.issuer} • {modalCert.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={modalCert.link} target="_blank" rel="noopener noreferrer" className="text-sm text-sky-600 inline-flex items-center">
                      Open verification <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    <button onClick={() => setModalCert(null)} className="ml-3 px-3 py-1 rounded">Close</button>
                  </div>
                </div>
                <div className="p-4">
                  <img
                    src={resolveInitialSrc(modalCert.id)}
                    alt={`${modalCert.title} full`}
                    className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (!t.dataset.fallback) {
                        t.dataset.fallback = "true";
                        t.src = "/preview.png";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
