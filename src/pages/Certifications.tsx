"use client";
import React, { useState, useEffect } from "react";
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

// Utility: group images into arrays of 5; pad last group if needed to avoid blank spaces
const groupCertificates = (files: string[], groupSize = 5) => {
  const groups: string[][] = [];
  for (let i = 0; i < files.length; i += groupSize) {
    const group = files.slice(i, i + groupSize);
    // If last group is smaller, pad with images from start
    while (group.length < groupSize) {
      group.push(files[(group.length + i) % files.length]);
    }
    groups.push(group);
  }
  return groups;
};

const certificateGroups = groupCertificates(certificateFiles, 5);

// Modal component
function Modal({
  isOpen,
  imageSrc,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  total,
}: {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !imageSrc) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center">
        <button
          className="absolute top-2 right-2 text-white text-2xl bg-black/60 rounded-full p-2 hover:bg-black"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={`/${imageSrc}`}
          alt={imageSrc}
          className="max-w-full max-h-[75vh] rounded-xl shadow-2xl"
        />
        <div className="flex justify-between w-full mt-4 items-center px-4">
          <button
            onClick={onPrev}
            className="text-white text-xl px-4 py-2 bg-black/60 rounded hover:bg-black"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <span className="text-white text-sm">{currentIndex + 1} / {total}</span>
          <button
            onClick={onNext}
            className="text-white text-xl px-4 py-2 bg-black/60 rounded hover:bg-black"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

const Certifications: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  // Modal navigation
  const handleOpenModal = (idx: number) => {
    setSelectedIdx(idx);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);
  const handlePrevModal = () =>
    setSelectedIdx((idx) => (idx - 1 + certificateFiles.length) % certificateFiles.length);
  const handleNextModal = () =>
    setSelectedIdx((idx) => (idx + 1) % certificateFiles.length);

  // Marquee animation durations (slower for more images)
  const baseDuration = 30;
  const rowDurations = certificateGroups.map(
    (_, i) => baseDuration + i * 6
  );

  return (
    <Layout>
      <div className="pt-24 md:pt-28 dark:text-gray-100">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Floating certificate gallery"
          />

          <div className="mt-12 w-full">
            <div className="flex flex-col gap-6">
              {certificateGroups.map((group, rowIdx) => (
                <div
                  key={rowIdx}
                  className="relative overflow-x-hidden w-full"
                >
                  <div
                    className={`flex gap-6 items-center group whitespace-nowrap`}
                    style={{
                      animation: `marqueeRow${rowIdx} ${rowDurations[rowIdx]}s linear infinite`,
                      animationDirection: rowIdx % 2 === 0 ? "normal" : "reverse",
                    }}
                  >
                    {/* Duplicate group for infinite scroll illusion */}
                    {[...group, ...group].map((file, idx) => {
                      // Find real index in certificateFiles for modal navigation
                      const realIdx = certificateFiles.findIndex(f => f === file);
                      // If not found (padded), fallback to first matching index
                      const certIdx = realIdx !== -1 ? realIdx : 0;
                      return (
                        <div
                          key={idx}
                          className="relative flex-shrink-0 w-[150px] h-[100px] md:w-[260px] md:h-[170px] rounded-xl shadow-lg bg-white dark:bg-gray-800
                            transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl
                            cursor-pointer"
                          onClick={() => handleOpenModal(certIdx)}
                          tabIndex={0}
                          role="button"
                          aria-label={`View certificate ${file}`}
                        >
                          <img
                            src={`/${file}`}
                            alt={file}
                            className="w-full h-full object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </div>
                  {/* Marquee keyframes for each row */}
                  <style jsx>{`
                    @keyframes marqueeRow${rowIdx} {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  `}</style>
                </div>
              ))}
            </div>
            <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400 z-10 bg-white/70 dark:bg-gray-900/70 px-2 py-1 rounded">
              Scroll to explore & click to view
            </div>
          </div>

          {/* Modal */}
          <Modal
            isOpen={modalOpen}
            imageSrc={certificateFiles[selectedIdx]}
            onClose={handleCloseModal}
            onPrev={handlePrevModal}
            onNext={handleNextModal}
            currentIndex={selectedIdx}
            total={certificateFiles.length}
          />
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
