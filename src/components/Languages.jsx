const Languages = () => {
  const languages = [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Fluent" }
  ];

  return (
    <section>
      <div className="px-10 py-8 border-b border-dashed border-border-subtle">
        <h2 className="section-label">
          Languages
        </h2>
      </div>
      <div className="flex flex-col">
        {languages.map((lang) => (
          <div key={lang.name} className="flex border-b border-dashed border-border-subtle last:border-b-0">
            <div className="flex-1 flex items-center px-10 py-5 border-r border-dashed border-border-subtle">
              <span className="text-text-primary font-bold text-[17px] tracking-tight">{lang.name}</span>
            </div>
            <div className="flex-1 flex items-center px-10 py-5">
              <span className="text-text-muted text-[17px]">{lang.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
