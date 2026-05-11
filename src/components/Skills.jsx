const skills = [
  "Sales", 
  "Resilience", 
  "Adaptability", 
  "Leadership", 
  "Strategic Planning", 
  "Financial Literacy"
];

const Skills = () => {
  return (
    <section>
      <h2 className="section-label mb-4">
        Skills
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
    </section>
  );
};

export default Skills;
