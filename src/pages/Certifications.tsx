"use client";
import React, { useState, useRef, useEffect } from "react";
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
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  image?: string;
}

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalCert, setModalCert] = useState<Certification | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const certifications: Certification[] = [
    {
      title: "CompTIA A+, Network+ & CCNA Routing and Switching",
      issuer: "Optimi College",
      date: "August 2024",
      id: "OC2591",
      skills: ["CompTIA A+", "CompTIA Network+", "CCNA Routing and Switching"],
      link: "#",
      icon: Server,
    },
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      date: "May 2025",
      id: "5C55GRQPEBVI",
      skills: ["Generative AI", "Artificial Intelligence"],
      link: "https://coursera.org/verify/5C55GRQPEBVI",
      icon: Cpu,
    },
    {
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "IBM",
      date: "May 2025",
      id: "N8SY1TUKJWCU",
      skills: ["Prompt Engineering", "Generative AI"],
      link: "https://coursera.org/verify/N8SY1TUKJWCU",
      icon: Code,
    },
    // ... add the rest of your certifications here (same structure)
  ];

  const filtered = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Duplicate list for infinite marquee
  const marqueeItems = [...filtered, ...filtered];

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches && trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  }, []);

  // Close modal with Escape key (accessibility)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalCert(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /**
   * IMAGE RESOLUTION STRATEGY
   * 1) Try an explicit map for filenames you uploaded (case-sensitive).
   * 2) If not found, try a list of likely filename patterns in /Certificates/
   * 3) If all attempts fail, fallback to /preview.png
   *
   * NOTE: This uses `onError` attempts counter on the <img> element.
   */
  const explicitImageMap: Record<string, string> = {
    // mappings derived from the filenames you pasted earlier
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
    // add more explicit mappings as needed
  };

  const getInitialSrc = (cert: Certification) => {
    if (cert.image) return cert.image;
    if (explicitImageMap[cert.id]) return explicitImageMap[cert.id];
    // initial guess (this will trigger onError fallbacks)
    return `/Certificates/CERTIFICATE~${cert.id}.jpeg`;
  };

  const fallbackPatterns = (certId: string) => [
    `/Certificates/CERTIFICATE~${certId}.jpeg`,
    `/Certificates/CERTIFICATE~${certId}.jpg`,
    `/Certificates/CERTIFICATE~${certId}.JPG`,
    `/Certificates/CERTIFICATE~${certId}.JPEG`,
    `/Certificates/Coursera-${certId}.jpg`,
    `/Certificates/Coursera-${certId}.png`,
    `/Certificates/${certId}.jpg`,
    `/Certificates/${certId}.jpeg`,
    `/Certificates/${certId}.png`,
    `/Certificates/${certId}.JPG`,
    `/Certificates/${certId}.JPEG`,
    `/Certificates/CERTIFICATE~${certId}.png`,
    `/Certificates/Certificate~${certId}.jpg`,
    `/Certificates/Certificate~${certId}.jpeg`,
    "/preview.png",
  ];

  const resolveBestModalSrc = (cert: Certification | null) => {
    if (!cert) return "/preview.png";
    if (cert.image) return cert.image;
    if (explicitImageMap[cert.id]) return explicitImageMap[cert.id];
    return `/Certificates/CERTIFICATE~${cert.id}.jpeg`;
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Professional certifications and qualifications"
          />

          {/* Search */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:border-gray-600"
                aria-label="Search certifications"
              />
            </div>
          </div>

          {/* Marquee */}
          <div className="relative">
            <div
              className="overflow-hidden"
              onMouseEnter={() => {
                if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                if (trackRef.current) trackRef.current.style.animationPlayState = "running";
              }}
            >
              <div
                ref={trackRef}
                className="flex gap-6 items-stretch will-change-transform"
                style={{
                  // marquee animation: translateX from 0 -> -50% of content (since duplicated)
                  // If you want left -> right, invert translate sign in the keyframes below.
                  animation: `marquee 28s linear infinite`,
                }}
              >
                {marqueeItems.map((cert, idx) => (
                  <article
                    key={`${cert.id}-${idx}`}
                    className="marquee-item bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex-shrink-0"
                    style={{
                      flex: "0 0 calc(100% / 3 - 1rem)",
                      maxWidth: "calc(100% / 3 - 1rem)",
                    }}
                  >
                    <div
                      className="cursor-pointer overflow-hidden rounded-md bg-gray-50 dark:bg-gray-800"
                      role="button"
                      tabIndex={0}
                      onClick={() => setModalCert(cert)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setModalCert(cert);
                        }
                      }}
                      aria-label={`Open certificate for ${cert.title}`}
                    >
                      <img
                        src={getInitialSrc(cert)}
                        alt={`${cert.title} certificate`}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        // onError will try a sequence of fallbacks based on dataset.attempt
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
                      <h4 className="text-sm font-semibold text-navy dark:text-gray-100">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-sky-600 hover:underline"
                        >
                          Open Certificate
                          <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Modal */}
          {modalCert && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              role="dialog"
              aria-modal="true"
              aria-label={`Certificate for ${modalCert.title}`}
              onClick={() => setModalCert(null)}
            >
              <div
                className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-3 border-b dark:border-gray-800">
                  <div>
                    <h3 className="text-lg font-semibold text-navy dark:text-gray-100">
                      {modalCert.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {modalCert.issuer} • {modalCert.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={modalCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-sky-600 inline-flex items-center hover:underline"
                    >
                      Open verification
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setModalCert(null)}
                      className="ml-3 text-gray-600 dark:text-gray-300 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-label="Close certificate viewer"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <img
                    src={resolveBestModalSrc(modalCert)}
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

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @media (max-width: 1024px) {
              .marquee-item {
                flex: 0 0 calc(50% - 1rem) !important;
                max-width: calc(50% - 1rem) !important;
              }
            }
            @media (max-width: 640px) {
              .marquee-item {
                flex: 0 0 calc(100% - 1rem) !important;
                max-width: calc(100% - 1rem) !important;
              }
            }
            /* respect reduced motion: target the track element class */
            @media (prefers-reduced-motion: reduce) {
              .will-change-transform {
                animation: none !important;
              }
            }
          `}</style>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
