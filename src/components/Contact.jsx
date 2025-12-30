import { socialLinks } from '../data/portfolio';

const Contact = () => {
  const emailLink = socialLinks.find(link => link.name === 'Email')?.url || '#';
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5/5 backdrop-blur-md p-10 text-center shadow-[0_10px_40px_-20px_rgba(255,255,255,0.3)]">
          <div className="absolute -top-16 -left-10 h-36 w-36 bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-12 h-40 w-40 bg-white/10 blur-3xl" />

          <h2 className="text-5xl font-bold mb-6 tracking-tight text-gray-100">Let's Build Something</h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            I'm always interested in new opportunities, collaborations, or just a good conversation about technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <a
              href={emailLink}
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 transition-all font-medium tracking-wide uppercase text-sm"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/mikesplore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition-all font-medium tracking-wide uppercase text-sm"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
