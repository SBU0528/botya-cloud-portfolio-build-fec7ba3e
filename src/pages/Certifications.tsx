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
  // New certificates
  {
    id: "72MIK4N4HQ6H",
    title: "Grit and Growth Mindset",
    provider: "Arizona State University",
    year: "2025",
    image: "/lovable-uploads/Coursera-72MIK4N4HQ6H.png",
    link: "https://coursera.org/verify/72MIK4N4HQ6H",
  },
  {
    id: "69GPATQJ4299",
    title: "Introduction to Personal Branding",
    provider: "University of Virginia",
    year: "2025",
    image: "/lovable-uploads/Coursera-69GPATQJ4299.png",
    link: "https://coursera.org/verify/69GPATQJ4299",
  },
  {
    id: "4FLIYFX5KSN5",
    title: "Introduction to Cloud Computing",
    provider: "IBM",
    year: "2025",
    image: "/lovable-uploads/Coursera-4FLIYFX5KSN5.png",
    link: "https://coursera.org/verify/4FLIYFX5KSN5",
  },
  {
    id: "0AY0X7JIOQ83",
    title: "Introduction to Hardware and Operating Systems",
    provider: "IBM",
    year: "2025",
    image: "/lovable-uploads/Coursera-0AY0X7JIOQ83.png",
    link: "https://coursera.org/verify/0AY0X7JIOQ83",
  },
  {
    id: "5C55GRQPEBVI",
    title: "Generative AI: Introduction and Applications",
    provider: "IBM",
    year: "2025",
    image: "/lovable-uploads/Coursera-5C55GRQPEBVI.png",
    link: "https://coursera.org/verify/5C55GRQPEBVI",
  },
  {
    id: "9B60KURFZYNA",
    title: "Positive Psychology: Resilience Skills",
    provider: "University of Pennsylvania",
    year: "2025",
    image: "/lovable-uploads/Coursera-9B60KURFZYNA.png",
    link: "https://coursera.org/verify/9B60KURFZYNA",
  },
];

// Split into rows of 5, alternating directions
const rows: { certs: typeof certifications; direction: "left" | "right"; speed: number }[] = [];
for (let i = 0; i < certifications.length; i += 5) {
  const rowIndex = rows.length;
  rows.push({
    certs: certifications.slice(i, i + 5),
    direction: rowIndex % 2 === 0 ? "left" : "right",
    speed: 45 + rowIndex * 5,
  });
}

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
            {rows.map((row, idx) => (
              <CertificateMarquee
                key={idx}
                certs={row.certs}
                direction={row.direction}
                speed={row.speed}
              />
            ))}
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
