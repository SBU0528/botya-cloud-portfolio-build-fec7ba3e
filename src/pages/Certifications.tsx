"use client";
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

// ✅ All certificate files inside /public
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

// ✅ Split into rows of 4 certificates
const chunkArray = (arr: string[], size: number) =>
  arr.reduce<string[][]>((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);

const Certifications: React.FC = () => {
  const rows = chunkArray(certificateFiles, 4);

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Floating certificate gallery"
          />

          {/* Floating Gallery */}
          <div className="space-y-12 mt-12">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex space-x-6 animate-marquee ${
                  rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
                }`}
              >
                {row.map((file, idx) => (
                  <div
                    key={idx}
                    className="relative flex-shrink-0 w-72 h-48 overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
                  >
                    <img
                      src={`/Certificates/${file}`}
                      alt={file}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
