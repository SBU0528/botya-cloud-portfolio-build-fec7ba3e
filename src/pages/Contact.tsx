
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
                        href="mailto:botyasibusiso@gmail.com"
                        className="text-gray-300 hover:text-skyblue transition-colors"
                      >
                        botyasibusiso@gmail.com
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
                        href="https://linkedin.com/in/sibusiso-botya-7a807224a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-skyblue transition-colors"
                      >
                        linkedin.com/in/sibusiso-botya-7a807224a
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
                      <p className="text-gray-300">+27 76 621 7977</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-skyblue p-3 rounded-full mr-4">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/27766217977"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-skyblue transition-colors"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Contact;
