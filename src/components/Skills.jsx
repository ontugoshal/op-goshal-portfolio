const skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "WCAG 2.2"];

const brandIcons = [
  { name: "Framer", slug: "framer" },
  { name: "Figma", slug: "figma" },
  { name: "Webflow", slug: "webflow" },
  { name: "Notion", slug: "notion" },
  { name: "Email", slug: "gmail" },
  { name: "Threads", slug: "threads" },
  { name: "GitHub", slug: "github" },
  { name: "Google", slug: "google" },
  { name: "CodeSandbox", slug: "codesandbox" },
  { name: "Spotify", slug: "spotify" }
];

const Skills = () => {
  return (
    <section>
      <h2 className="section-label mb-4">
        Skills / Stack
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="inline-block px-5 py-2.5 border border-border-subtle rounded-[8px] text-[15px] font-bold text-text-primary bg-white"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-5 mt-6">
        {brandIcons.map((icon) => (
          <img 
            key={icon.name}
            src={`https://cdn.simpleicons.org/${icon.slug}/888888`}
            alt={icon.name}
            title={icon.name}
            className="w-9 h-9 opacity-50 hover:opacity-100 transition-opacity cursor-pointer grayscale"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
