"use client";
import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

// ✅ List of all certificates (make sure they’re in /public/Certificates/)
const certificates = [
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
  "Certificate~OC2591.jpg", // Optimi College
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

const Certifications: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="All professional certificates displayed below"
          />

          {/* Floating Certificate Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {certificates.map((file) => (
              <div
                key={file}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
              >
                <img
                  src={`/Certificates/${file}`}
                  alt={file}
                  className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm px-2 text-center">
                  {file.replace(/^(CERTIFICATE~|Coursera[- ]|Certificate~)/, "")
                      .replace(/\.(jpg|jpeg|png)$/i, "")}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;

  );
};

export default Certifications;
