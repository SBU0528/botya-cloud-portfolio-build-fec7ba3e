
"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mldbkrgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: "New message from portfolio"
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out! A confirmation email is on its way.",
          duration: 5000,
        });
      } else {
        console.error("Formspree error response:", data);
        throw new Error(data.error || "Formspree submission failed");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again later or email me directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader
            title="Get in Touch"
            subtitle="Have a question or want to work together? Fill out the form or use the contact info."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="animate-fade-up">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-navy mb-6">Send a Message</h3>

                {isSubmitted ? (
                  <div className="p-6 bg-green-50 rounded-lg text-center">
                    <h4 className="text-xl font-medium text-green-700 mb-2">Thanks! Check your inbox.</h4>
                    <p className="text-green-600">A confirmation was sent to <strong>{formData.email || "your email"}</strong>.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-6">Send Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                      <Input
                        id="name" name="name" type="text" required
                        value={formData.name} onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-skyblue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input
                        id="email" name="email" type="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-skyblue"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <Textarea
                        id="message" name="message" rows={6} required
                        value={formData.message} onChange={handleChange}
                        placeholder="How can I help?"
                        className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-skyblue"
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-navy text-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <ContactInfo icon={<Mail />} label="Email" href="mailto:botyasibusiso@gmail.com">
                  botyasibusiso@gmail.com
                </ContactInfo>
                <ContactInfo icon={<Linkedin />} label="LinkedIn" href="https://linkedin.com/in/sibusiso-botya-7a807224a">
                  linkedin.com/in/sibusiso-botya-7a807224a
                </ContactInfo>
                <ContactInfo icon={<Github />} label="GitHub" href="https://github.com/SBU0528">
                  github.com/SBU0528
                </ContactInfo>
                <ContactInfo icon={<Phone />} label="Phone" href="tel:+27766217977">
                  +27 76 621 7977
                </ContactInfo>
                <div className="flex items-start">
                  <div className="bg-skyblue p-3 rounded-full mr-4"><MapPin className="h-6 w-6 text-white"/></div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Location</h4>
                    <p className="text-gray-300">28 Charles Hoffe, Van Riebeeckstrand<br />Melkbosstrand, Cape Town<br />Western Cape, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Google Map Section */}
        <Section background="gray" padding="lg">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-navy mb-8 text-center animate-fade-up">
              Find Me Here
            </h3>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7!2d18.2573!3d-33.7321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c8c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2s28%20Charles%20Hoffe%20St%2C%20Van%20Riebeeckstrand%2C%20Melkbosstrand%2C%207441%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                  className="w-full h-64 md:h-96 rounded-lg border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sibusiso Botya Location - 28 Charles Hoffe, Van Riebeeckstrand, Melkbosstrand, Cape Town"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

const ContactInfo: React.FC<{icon: React.ReactNode; label: string; href: string; children: React.ReactNode}> = ({icon,label,href,children}) => (
  <div className="flex items-start mb-6">
    <div className="bg-skyblue p-3 rounded-full mr-4">{icon}</div>
    <div>
      <h4 className="font-medium text-lg mb-1">{label}</h4>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-skyblue">
        {children}
      </a>
    </div>
  </div>
);

export default Contact;
