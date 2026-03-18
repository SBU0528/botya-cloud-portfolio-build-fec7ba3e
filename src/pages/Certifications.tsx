import React from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CertificateMarquee from "@/components/CertificateMarquee";

const certifications = [
  {
    id: "OC2591",
    title: "CompTIA A+, Network+ & CCNA",
    provider: "Optimi College",
    year: "2024",
    image: "/lovable-uploads/Certificate.jpg",
    link: "#",
  },
  {
    id: "N8SY1TUKJWCU",
    title: "Generative AI: Prompt Engineering Basics",
    provider: "IBM",
    year: "2025",
    image: "/lovable-uploads/Coursera-N8SY1TUKJWCU.png",
    link: "https://coursera.org/verify/N8SY1TUKJWCU",
  },
  {
    id: "QH200NTBBIPJ",
    title: "Cloud Computing Foundations",
    provider: "Duke University",
    year: "2025",
    image: "/lovable-uploads/Coursera-QH200NTBBIPJ.png",
    link: "https://coursera.org/verify/QH200NTBBIPJ",
  },
  {
    id: "NFHAM0TBZEFR",
    title: "Introduction to Networking and Cloud Computing",
    provider: "Microsoft",
    year: "2025",
    image: "/lovable-uploads/Coursera-NFHAM0TBZEFR.png",
    link: "https://coursera.org/verify/NFHAM0TBZEFR",
  },
  {
    id: "NNTM0DJMU6Y9",
    title: "Verbal Communications and Presentation Skills",
    provider: "Starweaver",
    year: "2025",
    image: "/lovable-uploads/Coursera-NNTM0DJMU6Y9.png",
    link: "https://coursera.org/verify/NNTM0DJMU6Y9",
  },
  {
    id: "MNBRXP9YG2VM",
    title: "Architecting Solutions on AWS",
    provider: "Amazon Web Services",
    year: "2025",
    image: "/lovable-uploads/Coursera-MNBRXP9YG2VM.png",
    link: "https://coursera.org/verify/MNBRXP9YG2VM",
  },
  {
    id: "QLS4XCMXPRTM",
    title: "Exam Prep: AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    year: "2025",
    image: "/lovable-uploads/Coursera-QLS4XCMXPRTM.png",
    link: "https://coursera.org/verify/QLS4XCMXPRTM",
  },
  {
    id: "OSY9WEIEF7FG",
    title: "Financial Planning for Young Adults",
    provider: "University of Illinois",
    year: "2025",
    image: "/lovable-uploads/Coursera-OSY9WEIEF7FG.png",
    link: "https://coursera.org/verify/OSY9WEIEF7FG",
  },
  {
    id: "Y8VTEE5VILQ7",
    title: "Psychology of the Self",
    provider: "American Psychological Association",
    year: "2025",
    image: "/lovable-uploads/Coursera-Y8VTEE5VILQ7.png",
    link: "https://coursera.org/verify/Y8VTEE5VILQ7",
  },
  {
    id: "YWRXVNNMICFJ",
    title: "Cloud Architecture Design Patterns",
    provider: "Coursera Instructor Network",
    year: "2025",
    image: "/lovable-uploads/Coursera-YWRXVNNMICFJ.png",
    link: "https://coursera.org/verify/YWRXVNNMICFJ",
  },
];

// Split into rows of 5
const row1 = certifications.slice(0, 5);
const row2 = certifications.slice(5, 10);

const Certifications: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader
            title="Certifications"
            subtitle="Professional certifications and qualifications"
          />

          <div className="mt-10 space-y-6">
            <CertificateMarquee certs={row1} direction="left" speed={45} />
            <CertificateMarquee certs={row2} direction="right" speed={50} />
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Hover over a certificate to pause and view details • Click to verify
          </p>
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
