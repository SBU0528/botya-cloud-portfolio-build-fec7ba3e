"use client";
import React, { useRef } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

// Certificate image files directly inside /public
const certificateFiles = [
  "CERTIFICATE~0WWWSY3C23S7.jpeg",
  "CERTIFICATE~4FLIYFX5KSN5.jpeg",
  "CERTIFICATE~5C55GRQPEBVI.jpeg",
  "CERTIFICATE~CDI63MS6WCY6.jpeg",
  "CERTIFICATE~HCFGE4BL7FQI.jpeg",
  "CERTIFICATE~HDLL62JMIFZG.jpeg",
  "CERTIFICATE~KELY2TCWXD1Y.jpeg",
  "CERTIFICATE~N8SY1TUKJWCU.jpeg",
  "CERTIFICATE~NFHAM0TBZEFR.jpeg",
  "CERTIFICATE~NNTM0DJMU6Y9.jpeg",
  "CERTIFICATE~QH200NTBBIPJ.jpeg",
  "Certificate~OC2591.jpg",
  "Coursera NFHAM0TBZEFR.jpg",
  "Coursera-0AY0X7JIOQ83.jpg",
  "Coursera-1LRZWR79304I.jpg",
  "Coursera-4FLIYFX5KSN5.jpg",
  "Coursera-5C55GRQPEBVI.jpg",
  "Coursera-CDI63MS6WCY6.jpg",
  "Coursera-GCRBLA42Y93U.jpg",
  "Coursera-HCFGE4BL7FQI.jpg",
  "Coursera-N8SY1TUKJWCU.jpg",
  "Coursera-NNTM0DJMU6Y9.jpg",
  "Coursera-QH200NTBBIPJ.jpg",
  "Coursera 72MIK4N4HQ6H-1.png",
  "Coursera APJ8V6YHFMDJ-1.png",
  "Coursera CY6HQJW520UD-1.png",
  "Coursera GQMNQRVRT1GR-1.png",
  "Coursera MNBRXP9YG2VM-1.png",
  "Coursera QLS4XCMXPRTM-1.png",
  "Coursera Y8VTEE5VILQ7-1.png",
  "Coursera YWRXVNNMICFJ-1.png",
];

// Utility: duplicate gallery for infinite scroll illusion
const getLoopedGallery = (files: string[], loops = 2) => {
  const arr: string[] = [];
  for (let i = 0; i < loops; i++) arr.push(...files);
  return arr;
};

const Certifications: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Infinite horizontal auto-scroll + user scroll
  // Pause animation on hover
  // - Tailwind custom classes below

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Floating certificate gallery"
          />

          <div className="mt-12">
            <div className="relative">
              <div
                ref={marqueeRef}
                className="group overflow-x-auto whitespace-nowrap scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
              >
                {/* Marquee animation */}
                <div
                  className="flex items-center gap-8 animate-marquee group-hover:[animation-play-state:paused]"
                  style={{
                    animation: "marquee 45s linear infinite",
                    // Pause animation on hover
                  }}
                >
                  {getLoopedGallery(certificateFiles, 2).map((file, idx) => (
                    <div
                      key={idx}
                      className="relative flex-shrink-0 w-72 h-48 rounded-xl shadow-lg bg-white dark:bg-gray-800
                        transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl
                        cursor-pointer"
                    >
                      <img
                        src={`/${file}`}
                        alt={file}
                        className="w-full h-full object-contain rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Manual scroll indicator */}
              <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400 z-10 bg-white/70 dark:bg-gray-900/70 px-2 py-1 rounded">
                Scroll sideways &rarr;
              </div>
            </div>
          </div>

          {/* Custom marquee keyframes */}
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 45s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
