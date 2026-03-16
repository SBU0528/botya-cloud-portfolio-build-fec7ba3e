
import React, { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { User, Server, Database, Network } from "lucide-react";

const About: React.FC = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader title="About Me" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-end animate-fade-up">
              <div className="w-[280px] h-[280px] rounded-2xl overflow-hidden border border-border glow-border">
                <img
                  src="/lovable-uploads/9033c80d-da2a-4337-b524-9108b5796649.png"
                  alt="Sibusiso Botya Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Highly motivated and detail-oriented IT professional with a background in the security industry.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                In 2023, I enrolled in Optimi College's online program and successfully completed the A+, N+, and CCNA bundle course, earning my certification in 2024.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Currently, I am expanding my skill set as a Cloud Associate at CAPACITI, driving my career forward in cloud computing.
              </p>

              <button
                onClick={() => setShowCV(!showCV)}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                🖼️ {showCV ? "Hide My CV" : "View My CV"}
              </button>

              {showCV && (
                <div className="mt-6 animate-fade-up">
                  <img
                    src="/Sibusiso-Botya_CV.jpg/Sibusiso-Botya_Cloud_CV2025.jpg"
                    alt="Sibusiso Botya CV"
                    className="w-full rounded-xl border border-border"
                  />
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section background="alt" padding="lg">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gradient mb-12 text-center animate-fade-up">
            My Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Server, title: "Cloud Infrastructure", skills: ["AWS", "Azure", "Cloud Architecture", "Infrastructure as Code"] },
              { icon: Network, title: "Networking", skills: ["CCNA Certified", "Network Security", "Routing & Switching", "Troubleshooting"] },
              { icon: Database, title: "Technical Expertise", skills: ["Hardware Troubleshooting", "Operating Systems", "System Administration"] },
              { icon: User, title: "Professional Skills", skills: ["Communication", "Problem Solving", "Detail Oriented", "Continuous Learning"] },
            ].map((skill, i) => (
              <div
                key={i}
                className="glass-card-hover p-6 text-center animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold font-montserrat text-foreground mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.skills.map((s, j) => (
                    <li key={j} className="text-sm text-muted-foreground">{s}</li>
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
