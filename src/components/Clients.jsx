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

const Clients = () => {
  return (
    <section>
      <h2 className="section-label mb-4">
        Clients
      </h2>
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

export default Clients;
