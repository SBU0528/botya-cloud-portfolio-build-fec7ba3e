
import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { User, Server, Database, Network } from "lucide-react";

// Import your CV image from src/assets so that bundler handles it
import cvImage from "@/assets/Sibusiso-Botya_Cloud_CV2025.jpg";

const About: React.FC = () => {
  const [showCV, setShowCV] = useState(false);

  const toggleCV = () => {
    setShowCV(!showCV);
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader title="About Me" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-end animate-fade-up">
              <div className="w-[300px] h-[300px] rounded-lg overflow-hidden shadow-md">
                <img
                  src="/lovable-uploads/9033c80d-da2a-4337-b524-9108b5796649.png"
                  alt="Sibusiso Botya Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <section className="prose mx-auto py-8 text-gray-900 dark:text-gray-100">
              <p className="text-lg leading-relaxed mb-4">
                Highly motivated and detail-oriented IT professional with a background in the security industry.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                In 2023, I enrolled in Optimi College's online program and successfully completed the A+, N+, and CCNA bundle course, earning my certification in 2024.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Currently, I am expanding my skill set as a Cloud Associate at CAPACITI, driving my career forward in cloud computing.
              </p>

              {/* CV View Button */}
              <button
                onClick={toggleCV}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                🖼️ {showCV ? "Hide My CV" : "View My CV"}
              </button>

              {/* CV Display */}
              {showCV && (
                <div className="mt-6">
                  <img
                    src="/Sibusiso-Botya_CV.jpg/Sibusiso-Botya_Cloud_CV2025.jpg"
                    alt="Sibusiso Botya CV"
                    className="w-full rounded-lg shadow-lg border border-gray-200"
                  />
                </div>
              )}
            </section>
          </div>
        </Section>

        {/* Skills Section */}
        <Section background="gray" padding="lg">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-navy mb-12 text-center animate-fade-up">
            My Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Server className="h-12 w-12 text-skyblue mb-4" />,   title: "Cloud Infrastructure", skills: ["AWS", "Azure", "Cloud Architecture", "Infrastructure as Code"] },
              { icon: <Network className="h-12 w-12 text-skyblue mb-4" />,   title: "Networking",            skills: ["CCNA Certified", "Network Security", "Routing & Switching", "Troubleshooting"] },
              { icon: <Database className="h-12 w-12 text-skyblue mb-4" />,  title: "Technical Expertise",   skills: ["Hardware Troubleshooting", "Operating Systems", "System Administration"] },
              { icon: <User className="h-12 w-12 text-skyblue mb-4" />,      title: "Professional Skills",   skills: ["Communication", "Problem Solving", "Detail Oriented", "Continuous Learning"] },
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-navy mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.skills.map((s, j) => (
                    <li key={j} className="text-gray-700">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default About;
