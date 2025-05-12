
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { GraduationCap, Briefcase, Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader 
            title="Education" 
            subtitle="My academic journey and professional development in IT and cloud computing"
          />
          
          {/* Interactive Timeline */}
          <InteractiveTimeline />
        </Section>
        
        {/* Certification Badges */}
        <Section background="white" padding="lg">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-navy mb-12 text-center animate-fade-up">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Active Listening: Enhancing Communication Skills",
                issuer: "Coursera Instructor Network",
                date: "Mar 2025",
                id: "HCFGE4BL7FQI",
                url: "https://coursera.org/verify/HCFGE4BL7FQI"
              },
              {
                title: "Cloud Computing Foundations",
                issuer: "Duke University",
                date: "Mar 2025",
                id: "QH200NTBBIPJ",
                url: "https://coursera.org/verify/QH200NTBBIPJ"
              },
              {
                title: "Introduction to Cloud Computing",
                issuer: "United Latino Students Association",
                date: "Mar 2025",
                id: "4FLIYFX5KSN5",
                url: "https://coursera.org/verify/4FLIYFX5KSN5"
              },
              {
                title: "Hardware and Operating System Essentials",
                issuer: "Coursera/IBM",
                date: "Mar 2025",
                id: "c53a019f‑6a93‑48ae‑9a87‑fda6caba2022",
                url: "https://www.credly.com/badges/c53a019f-6a93-48ae-9a87-fda6caba2022"
              },
              {
                title: "AWS Cloud Quest: Cloud Practitioner",
                issuer: "AWS",
                date: "Apr 2025",
                id: "751c8db2-0c01-457d-82e7-8d73aa65aab7",
                url: "https://www.credly.com/badges/751c8db2-0c01-457d-82e7-8d73aa65aab7"
              }
            ].map((cert, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-lg font-bold font-montserrat text-navy mb-2">{cert.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="bg-softgray text-gray-700">{cert.issuer}</Badge>
                  <Badge variant="outline" className="border-skyblue text-skyblue">{cert.date}</Badge>
                </div>
                <p className="text-gray-600 text-sm mb-3">ID: {cert.id}</p>
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-skyblue hover:text-navy transition-colors text-sm"
                >
                  Verify Certificate <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Skills Development */}
        <Section background="gray" padding="lg">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-navy mb-12 text-center animate-fade-up">
            Professional Development
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 animate-fade-up">
              <h3 className="text-xl font-bold font-montserrat text-navy mb-6">Continuous Learning Journey</h3>
              <p className="text-gray-700 mb-6">
                My passion for technology drives me to continuously expand my knowledge and skills. Beyond formal education, I engage in self-directed learning through various platforms:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-skyblue flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy">Online Platforms</h4>
                    <p className="text-gray-600">Regular participation in courses on platforms like Coursera, Udemy, and Microsoft Learn to stay current with cloud technologies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-skyblue flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy">Technical Communities</h4>
                    <p className="text-gray-600">Active member of cloud computing communities and forums where I both learn from and contribute to discussions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-skyblue flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy">Hands-on Projects</h4>
                    <p className="text-gray-600">Regular implementation of personal projects to apply theoretical knowledge and develop practical skills in cloud services.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Education;
