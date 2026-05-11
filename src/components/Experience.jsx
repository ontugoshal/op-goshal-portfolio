const ExperienceEntry = ({ title, company, period, description, icon, iconBg, iconRounded }) => (
  <div className="flex gap-5 relative pb-8 last:pb-0">
    <div className="w-8 h-8 shrink-0 mt-0.5">
      {iconBg && (
        <div className={`w-8 h-8 flex items-center justify-center ${iconBg} ${iconRounded || 'rounded-[6px]'}`}>
          {icon ? icon : <div className="w-4 h-[2px] bg-white opacity-50" />}
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
          title="Design Engineer"
          company="Typeform"
          period="2024 — NOW"
          iconBg="bg-black"
          icon={<div className="flex gap-[2px]"><div className="w-[3px] h-3 bg-white rounded-full"></div><div className="w-[3px] h-3 bg-white rounded-full"></div></div>}
          description="Spearheaded the revamp of Typeform's Design System, working closely with both design and engineering teams."
        />
        <ExperienceEntry
          title="Frontend Developer"
          company="Typeform"
          period="2022 — 2024"
          description={[
            "Introduced a token-based styling architecture integrated with Figma and Storybook.",
            "Collaborated with product squads to deliver high-impact user experiences across web platforms."
          ]}
        />
        <ExperienceEntry
          title="Frontend Intern"
          company="Spotify"
          period="2021 — 2022"
          iconBg="bg-[#1DB954]"
          iconRounded="rounded-full"
          icon={<img src="https://cdn.simpleicons.org/spotify/ffffff" className="w-4 h-4" />}
          description="Joined the Premium team as a frontend intern, supporting UI development with React and CSS. Collaborated with designers to implement responsive components and participated in accessibility testing."
        />
      </div>
    </section>
  );
};

export default Experience;
