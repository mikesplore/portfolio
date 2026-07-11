import { skillsGrouped } from '../data/portfolio';
import { education } from '../data/profile';

const Home = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-lg font-medium text-stone-100">Education</h2>
        <ul className="mt-4 space-y-4">
          {education.map((item) => (
            <li key={item.school} className="text-base leading-relaxed text-stone-300">
              <div className="text-stone-100">{item.degree}</div>
              <div className="text-stone-400">
                {item.school} · {item.location} · {item.period}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium text-stone-100">Skills</h2>
        <div className="mt-4 space-y-6">
          {skillsGrouped.map((group) => (
            <div key={group.system}>
              <h3 className="text-base text-stone-400">{group.system}</h3>
              <p className="mt-2 text-base text-stone-300">
                {group.skills.map((skill) => skill.name).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
