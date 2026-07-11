import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="space-y-4 text-base leading-relaxed text-muted">
      <p>
        I build backends and Android apps from Mombasa — mostly Kotlin, Ktor, and Jetpack
        Compose. Lately a lot of LLM-assisted tooling and constraint-aware systems.
      </p>
      <p>
        I&apos;m between roles right now and looking for a team that ships real software. I care
        more about production-grade work than polished demos.
      </p>
      <p>
        The{' '}
        <Link to="/timeline" className="font-medium text-accent hover:text-accent/80">
          timeline
        </Link>{' '}
        is the most honest picture of what I&apos;ve been building.
      </p>
    </div>
  );
};

export default About;
