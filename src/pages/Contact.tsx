"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
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
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
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
        toast({ title: "Message Sent!", description: "Thank you for reaching out!", duration: 5000 });
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Please try again later.", variant: "destructive", duration: 5000 });
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="animate-fade-up">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" /> Send a Message
                </h3>

                {isSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <h4 className="text-xl font-medium text-emerald-400 mb-2">Thanks! Message sent.</h4>
                    <p className="text-muted-foreground">I'll get back to you soon.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-6">Send Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Your Name</label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe"
                        className="w-full bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 focus:border-primary/50" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com"
                        className="w-full bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 focus:border-primary/50" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                      <Textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="How can I help?"
                        className="w-full bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 focus:border-primary/50" />
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
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" href="mailto:botyasibusiso@gmail.com">
                    botyasibusiso@gmail.com
                  </ContactItem>
                  <ContactItem icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" href="https://linkedin.com/in/sibusiso-botya-7a807224a">
                    linkedin.com/in/sibusiso-botya
                  </ContactItem>
                  <ContactItem icon={<Github className="w-5 h-5" />} label="GitHub" href="https://github.com/SBU0528">
                    github.com/SBU0528
                  </ContactItem>
                  <ContactItem icon={<Phone className="w-5 h-5" />} label="Phone" href="tel:+27744717519">
                    074 471 7519
                  </ContactItem>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Location</h4>
                      <p className="text-sm text-muted-foreground">3739 Geya Crescent<br />Old Crossroads, Nyanga<br />Cape Town, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Google Map Section */}
        <Section background="alt" padding="lg">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-gradient mb-8 text-center animate-fade-up">
              Find Me Here
            </h3>
            <div className="animate-fade-up glass-card overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.5975!3d-33.9872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc49e1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sOld%20Crossroads%2C%20Nyanga%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                className="w-full h-64 md:h-96 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sibusiso Botya Location - 3739 Geya Crescent, Old Crossroads, Nyanga, Cape Town"
              />
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; href: string; children: React.ReactNode }> = ({ icon, label, href, children }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-foreground mb-1">{label}</h4>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
        {children}
      </a>
    </div>
  </div>
);

export default Contact;
