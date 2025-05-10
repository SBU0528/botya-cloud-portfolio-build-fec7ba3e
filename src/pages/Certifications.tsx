
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { FileCheck, ExternalLink, Search } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  skills: string[];
  link: string;
}

const Certifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const certifications: Certification[] = [
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      date: "May 2025",
      id: "5C55GRQPEBVI",
      skills: ["Generative AI", "Artificial Intelligence"],
      link: "https://coursera.org/verify/5C55GRQPEBVI"
    },
    {
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "IBM",
      date: "May 2025",
      id: "N8SY1TUKJWCU",
      skills: ["Prompt Engineering", "Generative AI"],
      link: "https://coursera.org/verify/N8SY1TUKJWCU"
    },
    {
      title: "Active Listening: Enhancing Communication Skills",
      issuer: "Coursera Instructor Network",
      date: "Mar 2025",
      id: "HCFGE4BL7FQI",
      skills: ["Cross‑Cultural Communication Skills"],
      link: "https://coursera.org/verify/HCFGE4BL7FQI"
    },
    {
      title: "Cloud Computing Foundations",
      issuer: "Duke University",
      date: "Mar 2025",
      id: "QH200NTBBIPJ",
      skills: ["Cloud Infrastructure"],
      link: "https://coursera.org/verify/QH200NTBBIPJ"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "United Latino Students Association",
      date: "Mar 2025",
      id: "4FLIYFX5KSN5",
      skills: ["Cloud Computing", "Cloud Infrastructure"],
      link: "https://coursera.org/verify/4FLIYFX5KSN5"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "Mar 2025",
      id: "0AY0X7JIOQ83",
      skills: ["Computer Hardware Troubleshooting", "Hardware Installation", "Networking", "Operating Systems"],
      link: "https://coursera.org/verify/0AY0X7JIOQ83"
    },
    {
      title: "Introduction to Networking and Cloud Computing",
      issuer: "Microsoft",
      date: "Mar 2025",
      id: "NFHAM0TBZEFR",
      skills: ["Cloud Computing", "Networking and Cloud Computing"],
      link: "https://coursera.org/verify/NFHAM0TBZEFR"
    },
    {
      title: "Verbal Communications and Presentation Skills",
      issuer: "Starweaver",
      date: "Mar 2025",
      id: "NNTM0DJMU6Y9",
      skills: ["Oral Communication", "Speech", "Verbal Behavior", "Communication Training"],
      link: "https://coursera.org/verify/NNTM0DJMU6Y9"
    },
    {
      title: "Write Professional Emails in English",
      issuer: "Georgia Institute of Technology",
      date: "Mar 2025",
      id: "CDI63MS6WCY6",
      skills: ["Email Communications", "Professional Writing"],
      link: "https://coursera.org/verify/CDI63MS6WCY6"
    }
  ];

  const filteredCertifications = certifications.filter(cert => 
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader 
            title="Licenses & Certifications" 
            subtitle="Professional certifications and qualifications that demonstrate my expertise and knowledge in various domains"
          />
          
          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search certifications by title, issuer, or skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 p-6 animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start mb-4">
                  <FileCheck className="text-skyblue mr-3 flex-shrink-0" size={24} />
                  <h3 className="text-lg font-bold font-montserrat text-navy">{cert.title}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700"><span className="font-medium">Issuer:</span> {cert.issuer}</p>
                  <p className="text-gray-700"><span className="font-medium">Date:</span> {cert.date}</p>
                  <p className="text-gray-700"><span className="font-medium">Credential ID:</span> {cert.id}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-navy mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="bg-softgray text-gray-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-skyblue hover:text-navy transition-colors"
                >
                  Show Credential <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            ))}
          </div>
          
          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No certifications found matching your search.</p>
            </div>
          )}
        </Section>
      </div>
    </Layout>
  );
};

export default Certifications;
