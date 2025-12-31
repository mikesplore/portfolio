import { Code } from 'lucide-react';
import { skillsGrouped, techStack } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 tracking-tight text-gray-100">Technical Expertise</h2>
        <p className="text-gray-400 text-lg mb-16">Organized by systems and domains, not just tools.</p>
        
        {/* Grouped Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsGrouped.map((group, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_10px_40px_-20px_rgba(255,255,255,0.3)] hover:border-white/20 transition-all">
              <div className="relative z-10">
                {group.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
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
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_10px_40px_-20px_rgba(255,255,255,0.3)]">
          <h3 className="text-xl font-bold mb-8 tracking-tight text-gray-100 uppercase text-sm">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/30 transition-colors group">
                <Code className="w-5 h-5 mb-2 text-gray-400 group-hover:text-gray-300 transition-colors" />
                <div className="text-sm font-medium text-gray-300 group-hover:text-gray-100 transition-colors">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
