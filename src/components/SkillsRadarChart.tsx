
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface Skill {
  skill: string;
  level: number;
}

interface TooltipData {
  skill: string;
  level: number;
  x: number;
  y: number;
}

const SkillsRadarChart = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);

  const data: Skill[] = [
    { skill: 'Cloud Computing', level: 90 },
    { skill: 'Web Development', level: 75 },
    { skill: 'Data Analysis', level: 60 },
    { skill: 'Machine Learning', level: 50 },
    { skill: 'Cybersecurity', level: 80 },
  ];

  const handleMouseEnter = (props: any, e: React.MouseEvent<SVGPolygonElement>) => {
    if (props && props.payload) {
      setActiveSkill(props.payload.skill);
      setTooltipData({
        skill: props.payload.skill,
        level: props.payload.level,
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  const handleMouseLeave = () => {
    setActiveSkill(null);
    setTooltipData(null);
  };

  const CustomTooltip = () => {
    if (!tooltipData) return null;

    return (
      <div
        style={{
          position: 'fixed',
          top: tooltipData.y - 60,
          left: tooltipData.x + 15,
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          zIndex: 1000,
          pointerEvents: 'none',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{tooltipData.skill}</p>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Level: {tooltipData.level}</p>
      </div>
    );
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <RadarChart data={data} margin={{ top: 30, right: 20, bottom: 30, left: 20 }}>
          <PolarGrid stroke="#ccc" />
          <PolarAngleAxis dataKey="skill" stroke="#666" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            dataKey="level"
            stroke="#0EA5E9"
            fill="#0EA5E9"
            fillOpacity={0.6}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {tooltipData && <CustomTooltip />}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadarChart;
