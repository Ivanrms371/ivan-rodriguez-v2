const technicalSkills = [
  { title: "Frontend", skills: ["JavaScript", "TypeScript", "React", "Next.js", "Astro", "React Query", "Zustand"] },
  { title: "UI & styling", skills: ["HTML", "CSS", "Tailwind CSS", "Responsive design"] },
  { title: "Backend & data", skills: ["NestJS", "Prisma", "PostgreSQL", "Java (Learning)", "Sockets"] },
  { title: "Developer tools", skills: ["Git", "GitHub"] },
];

const softSkills = [
  { title: "Communication", description: "Sharing ideas clearly and keeping conversations practical." },
  { title: "Teamwork", description: "Collaborating, exchanging feedback, and working toward shared goals." },
  { title: "Problem solving", description: "Breaking challenges into manageable steps and exploring solutions." },
  { title: "Adaptability", description: "Learning new tools and adjusting as project needs evolve." },
];

export const Skills = () => (
  <section className="py-24 scroll-mt-24" id="skills" aria-labelledby="skills-heading">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 id="skills-heading" className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-title font-bold text-neutral-300">
          Skills<span className="text-indigo-600">.</span>
        </h2>
        <div className="w-20 h-1 rounded-full bg-indigo-600/60 mx-auto my-6" />
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto">
          The technologies I build with and the way I work with others.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">What I build with</p>
          <h3 className="font-title text-3xl font-bold text-neutral-200 mb-8">Technical skills</h3>
          <div className="space-y-6">
            {technicalSkills.map(({ title, skills }) => (
              <div key={title}>
                <h4 className="text-neutral-400 text-sm font-semibold mb-3">{title}</h4>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm text-neutral-200">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">How I work</p>
          <h3 className="font-title text-3xl font-bold text-neutral-200 mb-8">Soft skills</h3>
          <ul className="space-y-6">
            {softSkills.map(({ title, description }) => (
              <li key={title} className="border-l-2 border-indigo-600/60 pl-4">
                <h4 className="text-lg font-semibold text-neutral-200 mb-1">{title}</h4>
                <p className="text-neutral-400 leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
