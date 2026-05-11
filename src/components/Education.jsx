const EducationEntry = ({ degree, university, period, description }) => (
  <div className="flex flex-col gap-1">
    <h3 className="entry-title">
      {degree}
    </h3>
    <p className="entry-meta">
      {university} • {period}
    </p>
    {description && (
      <p className="body-text mt-4">
        {description}
      </p>
    )}
  </div>
);

const Education = () => {
  return (
    <section>
      <h2 className="section-label mb-4">
        Education
      </h2>
      <div className="flex flex-col gap-8">
        <EducationEntry
          degree="Postgraduate in User Experience Design"
          university="ELISAVA"
          period="2021 — 2022"
          description="Advanced studies in user research, information architecture, and interface design, with a focus on creating human-centered digital products."
        />
        <EducationEntry
          degree="Bachelor's Degree in Multimedia Design"
          university="UNIVERSITAT RAMON LLULL"
          period="2016 — 2020"
          description="Focused on interaction design, web development, and digital interfaces. This program gave me the foundation to understand both the visual and technical aspects of digital products."
        />
      </div>
    </section>
  );
};

export default Education;
