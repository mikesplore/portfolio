import { GraduationCap, Wrench } from 'lucide-react';
import { skillsGrouped } from '../data/portfolio';
import { education } from '../data/profile';
import AvailabilityBanner from '../components/AvailabilityBanner';
import SectionCard from '../components/SectionCard';

const Home = () => {
  return (
    <div className="space-y-6">
      <AvailabilityBanner />
      <hr className="divider" />

      <SectionCard title="Education" icon={GraduationCap}>
        <ul className="space-y-4">
          {education.map((item) => (
            <li
              key={item.school}
              className="rounded-xl bg-elevated px-4 py-4"
            >
              <div className="text-base font-medium text-ink">{item.degree}</div>
              <div className="mt-1 text-base text-muted">{item.school}</div>
              <div className="mt-1 text-sm text-subtle">
                {item.location} · {item.period}
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard
        title="Skills"
        description="What I work with day to day."
        icon={Wrench}
      >
        <div className="divide-y divide-divider">
          {skillsGrouped.map((group) => (
            <div key={group.system} className="py-5 first:pt-0 last:pb-0">
              <h3 className="text-sm font-medium uppercase tracking-wider text-subtle">
                {group.system}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="chip">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default Home;
