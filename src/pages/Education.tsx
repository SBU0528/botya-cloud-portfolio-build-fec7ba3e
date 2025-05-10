
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  type: 'education' | 'work';
  period: string;
  title: string;
  organization: string;
  description: string;
  current?: boolean;
}

const Education = () => {
  const timelineItems: TimelineItem[] = [
    {
      type: 'education',
      period: '2023 - 2024',
      title: 'A+, Network+, CCNA Bundle',
      organization: 'Optimi College',
      description: 'Comprehensive online program covering computer hardware, networking fundamentals, and Cisco networking technologies. Successfully completed with certification.',
    },
    {
      type: 'work',
      period: '2024 - 2025',
      title: 'Cloud Associate',
      organization: 'CAPACITI',
      description: 'Working with cloud technologies to design, implement, and maintain scalable and secure cloud infrastructure solutions.',
      current: true
    }
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader 
            title="Education" 
            subtitle="My academic journey and professional development in IT and cloud computing"
          />
          
          {/* Timeline */}
          <div className="max-w-3xl mx-auto mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
            
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "relative mb-16 md:mb-24 animate-fade-up",
                  index % 2 === 0 ? "md:pr-10 md:text-right md:ml-auto md:mr-1/2" : "md:pl-10 md:ml-1/2"
                )}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-[50%] md:transform md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-skyblue border-4 border-white"></div>
                
                {/* Content box */}
                <div className={cn(
                  "bg-white rounded-lg shadow-md p-6 ml-6 md:ml-0 relative",
                  item.current ? "border-l-4 border-skyblue" : ""
                )}>
                  {/* Type icon */}
                  <div className="absolute -top-4 left-4 md:left-auto md:right-4 bg-white rounded-full p-2 shadow-md">
                    {item.type === 'education' ? (
                      <GraduationCap className="text-skyblue" size={24} />
                    ) : (
                      <Briefcase className="text-skyblue" size={24} />
                    )}
                  </div>
                  
                  {/* Period */}
                  <div className="flex items-center mb-3 text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.period}</span>
                    {item.current && <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Current</span>}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold font-montserrat text-navy mb-1">{item.title}</h3>
                  <h4 className="text-lg text-skyblue mb-3">{item.organization}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
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
