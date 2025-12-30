import { Code } from 'lucide-react';
import { skills, techStack } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 tracking-tight text-gray-100">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Skills with Progress Bars */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5/5 backdrop-blur-md p-8 shadow-[0_10px_40px_-20px_rgba(255,255,255,0.3)]">
            <div className="absolute -top-10 -right-10 h-28 w-28 bg-white/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-32 w-32 bg-white/10 blur-3xl" />

            <h3 className="text-2xl font-bold mb-8 tracking-tight text-gray-200">Core Skills</h3>
            <div className="space-y-6 relative z-10">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2 text-sm text-gray-300">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-white/80 to-white/40 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5/5 backdrop-blur-md p-8 shadow-[0_10px_40px_-20px_rgba(255,255,255,0.3)]">
            <div className="absolute -top-12 -left-6 h-24 w-24 bg-white/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-8 h-28 w-28 bg-white/10 blur-3xl" />

            <h3 className="text-2xl font-bold mb-8 tracking-tight text-gray-200">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {techStack.map((tech, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/30 transition-colors">
                  <Code className="w-5 h-5 mb-2 text-gray-400" />
                  <div className="text-sm font-medium text-gray-200">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
