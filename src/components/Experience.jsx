const ExperienceEntry = ({ title, company, period, description, icon, iconBg, iconRounded }) => (
  <div className="flex gap-5 relative pb-8 last:pb-0">
    <div className="w-8 h-8 shrink-0 mt-0.5">
      {iconBg ? (
        <div className={`w-8 h-8 flex items-center justify-center ${iconBg} ${iconRounded || 'rounded-[6px]'}`}>
          {icon ? icon : <div className="w-4 h-[2px] bg-white opacity-50" />}
        </div>
      ) : (
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-[6px]">
          {icon ? icon : <div className="w-4 h-[2px] bg-gray-400 opacity-50" />}
        </div>
      )}
    </div>

    <div className="flex-1">
      <div className="flex flex-col gap-1">
        <h3 className="entry-title">
          {title}
        </h3>
        <p className="entry-meta">
          {company} • {period}
        </p>
      </div>
      
      <div className="body-text mt-5">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          <ul className="list-disc list-outside ml-5 space-y-2.5">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section>
      <h2 className="section-label mb-4">
        Experience
      </h2>
      <div className="flex flex-col">
        <ExperienceEntry
          title="Founder & Creative Director"
          company="CityGfx"
          period="2018 — NOW"
          iconBg="bg-black"
          description={[
            "Founded and scaled a creative marketing agency focused on branding, design, and digital growth.",
            "Led client projects across graphic design, social media marketing, web design, and branding strategy for international businesses.",
            "Managed creative direction, client communication, and team operations while building long-term partnerships and scalable workflows."
          ]}
        />
        <ExperienceEntry
          title="Freelance Graphic Designer"
          company="Fiverr"
          period="2016 — 2018"
          iconBg="bg-[#1dbf73]"
          icon={<img src="https://cdn.simpleicons.org/fiverr/ffffff" className="w-4 h-4" />}
          description={[
            "Worked with global clients delivering branding, logo design, social media creatives, and marketing materials.",
            "Built a strong freelance presence through consistent client satisfaction, fast turnaround times, and high-quality visual design work.",
            "Handled projects independently from concept development to final delivery."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
