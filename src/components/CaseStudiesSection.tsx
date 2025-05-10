
import Section from "./Section";
import CaseStudy from "./CaseStudy";

const CaseStudiesSection = () => {
  return (
    <Section background="white" padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-navy mb-4 initially-hidden opacity-0">
          Cloud Project Case Studies
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto initially-hidden opacity-0">
          Explore detailed examples of cloud solutions I've implemented
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <CaseStudy
          title="Enterprise Network Optimization"
          date="January 2025"
          problem="A medium-sized company was experiencing frequent network outages and slow performance across their three office locations, impacting productivity and customer service."
          solution="Implemented a comprehensive network redesign using Cisco equipment, optimized routing protocols, and implemented VLANs for traffic segregation. Set up proper QoS for critical applications and established monitoring systems."
          technologies={["Cisco Networking", "VLAN", "QoS", "Network Monitoring"]}
          results="Network uptime increased from 94% to 99.9%, latency reduced by 40%, and support tickets for network issues decreased by 75% within the first month after implementation."
          image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        />
        
        <CaseStudy
          title="Cloud Migration & Optimization"
          date="March 2025"
          problem="A financial services client needed to migrate their legacy on-premises infrastructure to the cloud while ensuring security compliance and minimizing downtime for their 24/7 operations."
          solution="Designed and executed a phased migration plan to AWS with hybrid cloud architecture during the transition. Implemented Infrastructure as Code using CloudFormation, containerized applications with Docker, and established CI/CD pipelines for automated deployments."
          technologies={["AWS", "Docker", "Terraform", "CI/CD", "Security Compliance"]}
          results="Achieved zero downtime during migration, reduced infrastructure costs by 35%, improved application performance by 60%, and passed all compliance audits on the first attempt."
          image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          orientation="right"
        />
        
        <CaseStudy
          title="Disaster Recovery Implementation"
          date="April 2025"
          problem="A healthcare provider had inadequate disaster recovery capabilities, risking patient data and operational continuity in case of system failures or natural disasters."
          solution="Implemented a comprehensive DR strategy utilizing cloud-based backup solutions, cross-region replication, and automated recovery procedures. Created detailed runbooks and conducted regular DR testing exercises."
          technologies={["Multi-Cloud", "Data Replication", "Automated Recovery", "Backup Solutions"]}
          results="Recovery time objective (RTO) reduced from 48+ hours to under 2 hours, successful quarterly DR tests with 100% data integrity maintained, and full compliance with healthcare data protection regulations."
          image="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        />
      </div>
    </Section>
  );
};

export default CaseStudiesSection;
