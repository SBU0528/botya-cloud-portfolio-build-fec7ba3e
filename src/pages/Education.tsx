import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { GraduationCap, Briefcase, Calendar, ExternalLink, Github, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Education = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Section padding="lg">
          <PageHeader 
            title="Education" 
            subtitle="My academic journey and professional development in IT and cloud computing"
          />

          {/* Timeline */}
          <div className="max-w-3xl mx-auto py-8">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gradient mb-12 text-center">
              My Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />
              
              <div className="space-y-12">
                {[
                  { year: "2018", title: "IT Journey Begins", desc: "Started exploring IT fundamentals through self-study and online resources, developing a passion for technology.", icon: GraduationCap },
                  { year: "2023 - 2024", title: "A+, Network+, CCNA Bundle", desc: "Comprehensive online program covering computer hardware, networking fundamentals, and Cisco networking technologies.", icon: Calendar },
                  { year: "2025 - Present", title: "Cloud Associate", desc: "Working with cloud technologies to design, implement, and maintain scalable and secure cloud infrastructure solutions.", icon: Briefcase },
                ].map((item, i) => (
                  <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} animate-fade-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 animate-glow-pulse" />
                    
                    {/* Card */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="glass-card-hover p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-primary font-mono text-sm font-semibold">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Professional Development */}
        <Section background="alt" padding="lg">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gradient text-center mb-12 animate-fade-up">
            Professional Development
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 animate-fade-up">
              <h3 className="text-xl font-bold font-montserrat text-foreground mb-6">Continuous Learning Journey</h3>
              <p className="text-muted-foreground mb-6">
                My passion for technology drives me to continuously expand my knowledge and skills. Beyond formal education, I engage in self-directed learning through various platforms:
              </p>
              <ul className="space-y-5">
                {[
                  { num: "1", title: "Online Platforms", desc: "Regular participation in courses on platforms like Coursera, Udemy, and Microsoft Learn to stay current with cloud technologies." },
                  { num: "2", title: "Technical Communities", desc: "Active member of cloud computing communities and forums where I both learn from and contribute to discussions." },
                  { num: "3", title: "Hands-on Projects", desc: "Regular implementation of personal projects to apply theoretical knowledge and develop practical skills in cloud services." },
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section padding="lg">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gradient text-center mb-12 animate-fade-up">
            Projects
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Portfolio Project */}
            <div className="glass-card-hover p-8 animate-fade-up">
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-4">My Portfolio Website</h3>
              <p className="text-muted-foreground mb-6">
                A comprehensive cloud portfolio website showcasing my journey in cloud computing and IT. Built with modern web technologies and deployed using Netlify.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="https://sbotya.netlify.app/" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 gap-2 shadow-lg shadow-primary/20" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} /> View Live
                        </a>
                      </TooltipTrigger>
                      <TooltipContent><p>Opens in new tab</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Live – Netlify</Badge>
                </div>
                <a href="https://github.com/SBU0528/botya-cloud-portfolio-build-fec7ba3e" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-primary/50 text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300 gap-2">
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>

            {/* Zen Paperless */}
            <div className="glass-card-hover p-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-4">Zen Paperless Delivery & Invoicing System</h3>
              <p className="text-muted-foreground mb-6">
                A fully functional delivery and invoicing system designed for drivers to create delivery notes, capture signatures, and generate QR codes. Built with Supabase for backend and storage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="https://zen-paperless-system.netlify.app/" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 gap-2 shadow-lg shadow-primary/20" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} /> View Live
                        </a>
                      </TooltipTrigger>
                      <TooltipContent><p>Opens in new tab</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Live – Netlify</Badge>
                </div>
                <a href="https://github.com/SBU0528/zen-paperless-system" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-primary/50 text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300 gap-2">
                  <Github size={16} /> View Code
                </a>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mt-4">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features</h4>
                    <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Email/password login with Supabase Auth</li>
                      <li>Digital signature capture with mobile support</li>
                      <li>QR code generation for delivery confirmation</li>
                      <li>Admin dashboard for delivery tracking</li>
                      <li>Fully responsive and near-production ready</li>
                    </ul>
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

export default Education;
