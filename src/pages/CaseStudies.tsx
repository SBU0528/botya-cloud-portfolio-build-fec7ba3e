
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CaseStudiesSection from "@/components/CaseStudiesSection";

const CaseStudies = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <PageHeader 
          title="Case Studies" 
          subtitle="Detailed examples of cloud and networking solutions I've implemented"
        />
        
        <CaseStudiesSection />
      </div>
    </Layout>
  );
};

export default CaseStudies;
