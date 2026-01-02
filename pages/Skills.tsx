import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SKILLS } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis } from 'recharts';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  
  const radarData = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <div className="pt-32 pb-24 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Skill Architecture" subtitle="My Technical DNA" />

        {/* Radar Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
           <div className="lg:col-span-5">
              <h3 className="text-3xl font-black mb-6 text-white">Visual Matrix</h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                My skills aren't just a list—they are a balanced ecosystem of engineering depth and creative intuition. I specialize in high-performance AI, Data Science, and robust frontend architecture.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded bg-blue-500"></div>
                   <span className="text-sm font-bold text-white">AI & ML Specialist</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded bg-purple-500"></div>
                   <span className="text-sm font-bold text-white">Data Science Expert</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded bg-green-500"></div>
                   <span className="text-sm font-bold text-white">Full-Stack Architect</span>
                 </div>
              </div>
           </div>
           
           <div className="lg:col-span-7 h-[400px] glass rounded-[32px] border border-white/10 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#ffffff10" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Detailed Breakdown */}
        {categories.map((cat, i) => (
          <div key={i} className="mb-20">
            <h3 className="text-2xl font-black mb-10 flex items-center gap-4 text-white">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              {cat}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILLS.filter(s => s.category === cat).map((skill, j) => (
                <div key={j} className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 group hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-white">{skill.name}</h4>
                    <span className="text-xs font-black text-blue-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full mb-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed uppercase font-bold tracking-wider">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Data Science Specialization Section */}
        <div className="mt-32 glass rounded-[32px] border border-white/10 p-10 md:p-16 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/10 rounded-full blur-[80px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-3xl font-black mb-6 text-white">Data Science & Analytics</h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Advanced data manipulation, statistical analysis, and predictive modeling capabilities. Transforming raw data into actionable insights and intelligent business solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white font-bold">Statistical Analysis & Hypothesis Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white font-bold">Predictive Modeling & Time Series Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white font-bold">Data Visualization & Business Intelligence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white font-bold">Big Data Processing & ETL Pipelines</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all group">
                <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-green-500 font-black text-lg">📊</span>
                </div>
                <h4 className="font-bold text-white mb-2">Data Analysis</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Pandas, NumPy, SQL, Excel</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-blue-500 font-black text-lg">📈</span>
                </div>
                <h4 className="font-bold text-white mb-2">Data Visualization</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Matplotlib, Seaborn, Plotly, Tableau</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-purple-500 font-black text-lg">🤖</span>
                </div>
                <h4 className="font-bold text-white mb-2">ML Algorithms</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Regression, Classification, Clustering</p>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all group">
                <div className="w-12 h-12 bg-yellow-600/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-yellow-500 font-black text-lg">⚡</span>
                </div>
                <h4 className="font-bold text-white mb-2">Big Data</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Spark, Hadoop, AWS, PySpark</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Matrix */}
        <div className="mt-24">
          <h3 className="text-2xl font-black mb-10 flex items-center gap-4 text-white">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
            Core Expertise Matrix
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-blue-500 font-black text-2xl">🧠</span>
              </div>
              <h4 className="text-xl font-black text-white mb-4">Artificial Intelligence</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Deep Learning, Computer Vision, NLP, Neural Networks, Transformers, Reinforcement Learning
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">TensorFlow</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">PyTorch</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">OpenCV</span>
              </div>
            </div>
            
            <div className="glass p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all group">
              <div className="w-16 h-16 bg-green-600/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-green-500 font-black text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-black text-white mb-4">Data Science</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Statistical Analysis, Predictive Modeling, Data Mining, ETL Processes, Business Intelligence, A/B Testing
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">Pandas</span>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">SciPy</span>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">Scikit-learn</span>
              </div>
            </div>
            
            <div className="glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-purple-500 font-black text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-black text-white mb-4">Full-Stack Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                React, Node.js, TypeScript, REST APIs, Database Design, Cloud Deployment, DevOps
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;