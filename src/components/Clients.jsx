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
      <h2 className="section-label mb-4">
        Clients
      </h2>
      <div className="flex flex-wrap gap-8 items-center mt-6">
        {clientLogos.map((logo, index) => (
          <img 
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer grayscale brightness-0"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
