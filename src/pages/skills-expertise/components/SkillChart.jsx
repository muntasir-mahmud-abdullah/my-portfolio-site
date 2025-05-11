import React from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from "recharts";

const SkillChart = ({ categories }) => {
  // Transform the categories data for the radar chart
  const chartData = categories.map(category => {
    // Calculate average skill level for each category
    const avgLevel = category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length;
    
    return {
      subject: category.title,
      level: avgLevel,
      fullMark: 100,
    };
  });

  return (
    <div className="w-full h-96 bg-background p-6 rounded-lg shadow-sm border border-border">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="#E5E7EB" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#4B5563", fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#4B5563" }} />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#4F46E5"
            fill="#4F46E5"
            fillOpacity={0.6}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#FFFFFF", 
              border: "1px solid #E5E7EB",
              borderRadius: "0.375rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;