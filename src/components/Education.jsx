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
          degree="BSc Engineering in Civil Engineering"
          university="Patuakhali Polytechnic Institute"
          period="2019 — 2024"
          description="Focused on civil engineering principles, construction technology, surveying, structural design, and infrastructure development. Developed practical and technical skills through academic projects and engineering coursework."
        />
        <EducationEntry
          degree="Secondary School Certificate (SSC)"
          university="Patuakhali Govt. Jubilee High School"
          period="2014 — 2018"
          description="Completed secondary education with a focus on science and mathematics, building a strong academic foundation and problem-solving skills."
        />
      </div>
    </section>
  );
};

export default Education;
