const Contact = () => {
  const contactLinks = [
    { label: "Email", value: "opighoshal@gmail.com", href: "mailto:opighoshal@gmail.com" },
    { label: "LinkedIn", value: "/in/opgoshal", href: "https://linkedin.com/in/opgoshal" },
    { label: "Instagram", value: "@amop_goshal", href: "https://instagram.com/amop_goshal" },
    { label: "Contact", value: "01760147482 | 01617563535", href: "tel:01760147482" }
  ];

  return (
    <section>
      <div className="px-10 py-8 border-b border-dashed border-border-subtle">
        <h2 className="section-label">
          Contact
        </h2>
      </div>
      <div className="flex flex-col">
        {contactLinks.map((link) => (
          <div key={link.label} className="flex border-b border-dashed border-border-subtle last:border-b-0">
            <div className="flex-1 flex items-center px-10 py-5 border-r border-dashed border-border-subtle">
              <span className="text-text-primary font-bold text-[17px] tracking-tight">{link.label}</span>
            </div>
            <div className="flex-1 flex items-center px-10 py-5 overflow-hidden">
              <a 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary hover:underline transition-colors text-[17px] truncate"
              >
                {link.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
