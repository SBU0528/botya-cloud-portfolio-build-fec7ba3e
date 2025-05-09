
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Mail, Phone, Linkedin, Github, Smartphone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader
            title="Get in Touch"
            subtitle="Have a question or want to work together? Reach out using the form below or through my contact details."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold font-montserrat text-navy mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue focus:border-transparent"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-navy text-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold font-montserrat mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-skyblue p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Email</h4>
                      <a
                        href="mailto:sibusiso.botya@example.com"
                        className="text-gray-300 hover:text-skyblue transition-colors"
                      >
                        sibusiso.botya@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-skyblue p-3 rounded-full mr-4">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/sibusiso-botya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-skyblue transition-colors"
                      >
                        linkedin.com/in/sibusiso-botya
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-skyblue p-3 rounded-full mr-4">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">GitHub</h4>
                      <a
                        href="https://github.com/sibusisobotya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-skyblue transition-colors"
                      >
                        github.com/sibusisobotya
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-skyblue p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Phone</h4>
                      <p className="text-gray-300">+27 XX XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-skyblue p-3 rounded-full mr-4">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/27XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-skyblue transition-colors"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-medium text-lg mb-4">Office Hours</h4>
                  <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-300">Based in Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* AWS Deployment Info Section */}
        <Section background="gray" padding="lg">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 animate-fade-up">
            <h2 className="text-2xl font-bold font-montserrat text-navy mb-6">AWS Deployment Guide</h2>
            <p className="text-gray-700 mb-6">
              This portfolio website is built with React and can be deployed to AWS through either S3 static website hosting or AWS Amplify. Below are the steps for both methods:
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">Option 1: AWS S3 Static Website Hosting</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><span className="font-medium">Build your React application:</span> Run <code className="bg-gray-100 px-2 py-1 rounded">npm run build</code> to create a production build.</li>
                <li><span className="font-medium">Create an S3 bucket:</span> In the AWS Management Console, navigate to S3 and create a new bucket. Use your domain name as the bucket name.</li>
                <li><span className="font-medium">Configure bucket for static website hosting:</span> In the bucket properties, enable "Static website hosting" and specify "index.html" as both the index and error document.</li>
                <li><span className="font-medium">Set bucket permissions:</span> Update the bucket policy to allow public read access.</li>
                <li><span className="font-medium">Upload your files:</span> Upload the contents of your build folder to the S3 bucket.</li>
                <li><span className="font-medium">Set up CloudFront (optional):</span> Create a CloudFront distribution pointing to your S3 bucket for better performance and HTTPS.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Option 2: AWS Amplify Deployment (Recommended)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><span className="font-medium">Log in to AWS Console:</span> Navigate to AWS Amplify service.</li>
                <li><span className="font-medium">Create a new app:</span> Click "New app" and choose "Deploy without Git provider" for manual deployment.</li>
                <li><span className="font-medium">Configure build settings:</span> Choose a name for your app and configure the build settings.</li>
                <li><span className="font-medium">Build your React application:</span> Run <code className="bg-gray-100 px-2 py-1 rounded">npm run build</code> locally.</li>
                <li><span className="font-medium">Upload the build:</span> Zip your build folder and upload it through the Amplify console.</li>
                <li><span className="font-medium">Deploy:</span> Complete the deployment process and your site will be live on an Amplify URL.</li>
                <li><span className="font-medium">Custom domain (optional):</span> Configure a custom domain in the Amplify console if desired.</li>
              </ol>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Contact;
