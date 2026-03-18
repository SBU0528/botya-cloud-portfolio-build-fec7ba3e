
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
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) errors[err.path[0] as string] = err.message;
      });
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mldbkrgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
          _replyto: result.data.email,
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
        if (import.meta.env.DEV) console.error("Formspree error response:", data);
        throw new Error("Submission failed");
      }
    } catch (error: any) {
      if (import.meta.env.DEV) console.error("Submission error:", error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or email me directly.",
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
                        id="name" name="name" type="text" required maxLength={100}
                        value={formData.name} onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-skyblue"
                      />
                      {fieldErrors.name && <p className="text-sm text-destructive mt-1">{fieldErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input
                        id="email" name="email" type="email" required maxLength={255}
                        value={formData.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-skyblue"
                      />
                      {fieldErrors.email && <p className="text-sm text-destructive mt-1">{fieldErrors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <Textarea
                        id="message" name="message" rows={6} required maxLength={5000}
                        value={formData.message} onChange={handleChange}
                        placeholder="How can I help?"
                        className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-skyblue"
                      />
                      {fieldErrors.message && <p className="text-sm text-destructive mt-1">{fieldErrors.message}</p>}
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
                <ContactInfo icon={<Phone />} label="Phone" href="tel:+27744717519">
                  074 471 7519
                </ContactInfo>
                <div className="flex items-start">
                  <div className="bg-skyblue p-3 rounded-full mr-4"><MapPin className="h-6 w-6 text-white"/></div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Location</h4>
                    <p className="text-gray-300">3739 Geya Crescent<br />Old Crossroads, Nyanga<br />Cape Town, South Africa</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.5975!3d-33.9872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc49e1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sOld%20Crossroads%2C%20Nyanga%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                  className="w-full h-64 md:h-96 rounded-lg border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sibusiso Botya Location - 3739 Geya Crescent, Old Crossroads, Nyanga, Cape Town"
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
