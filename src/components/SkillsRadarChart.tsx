
import { useState } from "react";
import { ChartContainer, ChartTooltipContent, ChartLegend } from "@/components/ui/chart";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Info } from "lucide-react";

interface Skill {
  name: string;
  value: number;
  experience: string;
  fullName: string;
  description: string;
}

const SkillsRadarChart = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  const skills: Skill[] = [
    {
      name: "AWS",
      fullName: "Amazon Web Services",
      value: 85,
      experience: "2 years",
      description: "Experience with EC2, S3, Lambda, and CloudFormation"
    },
    {
      name: "Azure",
      fullName: "Microsoft Azure",
      value: 75,
      experience: "1.5 years",
      description: "Azure VMs, Storage, and Azure Functions"
    },
    {
      name: "GCP",
      fullName: "Google Cloud Platform",
      value: 65,
      experience: "1 year",
      description: "Compute Engine, Cloud Storage, and Cloud Functions"
    },
    {
      name: "Docker",
      fullName: "Docker",
      value: 80,
      experience: "2 years",
      description: "Container creation, management, and orchestration"
    },
    {
      name: "K8s",
      fullName: "Kubernetes",
      value: 70,
      experience: "1 year",
      description: "Cluster setup, pod management, and deployments"
    },
    {
      name: "Networking",
      fullName: "Networking",
      value: 90,
      experience: "3 years",
      description: "CCNA-level expertise in network design and security"
    }
  ];

  const config = {
    skills: {
      label: "Cloud Skills",
      theme: {
        light: "#8B5CF6", // Vivid purple
        dark: "#8B5CF6",
      },
    },
  };

  // Custom tooltip content
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const skill = skills.find(s => s.name === payload[0].name);
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <h4 className="font-bold text-navy">{skill?.fullName}</h4>
          <p className="text-gray-600">Proficiency: {payload[0].value}%</p>
          <p className="text-gray-600">Experience: {skill?.experience}</p>
          <p className="text-gray-600">{skill?.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[500px] my-12">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-2xl font-bold font-montserrat text-navy">Cloud Technology Proficiency</h3>
        <div className="ml-2 group relative cursor-help">
          <Info size={16} className="text-skyblue" />
          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-white p-2 rounded shadow-lg text-xs w-64">
            Hover over the chart points to see detailed information about each skill
          </div>
        </div>
      </div>
      
      <div className="w-full h-[400px]">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={150} data={skills}>
              <PolarGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <PolarAngleAxis 
                dataKey="name" 
                tick={{ fill: '#64748b', fontSize: 14 }} 
                tickLine={false}
              />
              <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} 
                tick={{ fill: '#64748b' }} 
                tickCount={5}
              />
              <Tooltip content={<CustomTooltip />} />
              <Radar 
                name="skills" 
                dataKey="value" 
                fill="#8B5CF6" 
                fillOpacity={0.3} 
                stroke="#8B5CF6" 
                strokeWidth={2}
                onMouseOver={(data) => setActiveSkill(data?.payload?.name as string)}
                onMouseOut={() => setActiveSkill(null)}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default SkillsRadarChart;
