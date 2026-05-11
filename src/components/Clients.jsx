const clientLogos = [
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496106/gdgsdgs_bzilrw_po6gco.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496106/fgseedgsd_dqm3vd_x3fbpm.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496106/dghdsh_ycmbxy_dhkq9b.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496106/55554_dbdp6n_on3tbb.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496106/2_ebhibi_dkgkth.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496106/06_cne8nl_divnxd.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496106/06_u9fbbd_zkyxhv.png",
  "https://res.cloudinary.com/dweciloal/image/upload/v1778496105/12_cgywlt_ncsuky.png"
];

const Clients = () => {
  return (
    <section>
      <div className="px-5 sm:px-10 py-8 border-b border-dashed border-border-subtle">
        <h2 className="section-label">
          Clients
        </h2>
      </div>
      <div className="grid grid-cols-2">
        {clientLogos.map((logo, index) => (
          <div 
            key={index} 
            className={`
              flex items-center justify-center p-8 sm:p-12 
              border-dashed border-border-subtle
              ${index % 2 === 0 ? 'border-r' : ''}
              ${index < clientLogos.length - 2 ? 'border-b' : ''}
              hover:bg-gray-50 transition-colors group
            `}
          >
            <img 
              src={logo}
              alt={`Client ${index + 1}`}
              className="w-full h-auto max-h-16 object-contain opacity-40 group-hover:opacity-100 transition-opacity grayscale brightness-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
