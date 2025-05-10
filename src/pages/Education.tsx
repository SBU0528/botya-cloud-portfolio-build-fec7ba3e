
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

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
