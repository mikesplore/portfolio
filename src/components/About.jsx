import { achievements, recognition, interests } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8 tracking-tight text-gray-100">About Me</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I'm a full-stack developer specializing in Android development with Kotlin and Jetpack Compose, 
                alongside modern web technologies. Currently pursuing BSc. Computer Science at Technical University of Mombasa.
              </p>
              <p>
                My work focuses on building structured, efficient applications that provide real value—from educational 
                tools to business solutions. I believe in clean architecture, scalable systems, and continuous learning.
              </p>
              <p>
                With expertise spanning mobile apps, backend systems, and frontend development, I create end-to-end 
                solutions that solve real problems.
              </p>
              
              {/* Currently Interested In */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">{interests.title}</p>
                <ul className="space-y-3">
                  {interests.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-white/50 mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-gray-200">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="border-l-2 border-white pl-6">
                  <div className="text-4xl font-bold mb-2">{achievement.value}</div>
                  <div className="text-gray-400">{achievement.description}</div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-6 mt-12 tracking-tight text-gray-200">Recognition</h3>
            <div className="space-y-4">
              {recognition.map((item, idx) => (
                <div key={idx} className="border border-white/10 p-4 hover:border-white/30 transition-colors">
                  <div className="text-lg font-bold mb-1 text-gray-200">{item.title}</div>
                  <div className="text-sm text-gray-500 mb-2">{item.organization} • {item.year}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
