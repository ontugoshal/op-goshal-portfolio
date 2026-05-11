const CertificationsEntry = ({ title, issuer, year }) => (
  <div className="flex justify-between items-center group cursor-pointer">
    <div className="flex flex-col">
      <h3 className="text-[17px] font-bold text-text-primary group-hover:underline">
        {title}
      </h3>
      <p className="text-[14px] text-text-muted">
        {issuer}
      </p>
    </div>
    <span className="text-[14px] text-text-muted font-medium">
      {year}
    </span>
  </div>
);

const Certifications = () => {
  return (
    <section>
      <h2 className="section-label mb-4">
        Certifications
      </h2>
      <div className="flex flex-col gap-6">
        <CertificationsEntry
          title="Google Ads Search Certification"
          issuer="Google"
          year="2023"
        />
        <CertificationsEntry
          title="Meta Certified Digital Marketing Associate"
          issuer="Meta"
          year="2023"
        />
        <CertificationsEntry
          title="HubSpot Inbound Marketing"
          issuer="HubSpot Academy"
          year="2022"
        />
      </div>
    </section>
  );
};

export default Certifications;
