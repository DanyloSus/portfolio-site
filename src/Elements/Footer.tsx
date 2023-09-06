const Footer = () => {
  return (
    <footer className="flex items-center flex-col gap-3 py-9">
      <h2>Portfolios</h2>
      <div className="flex items-center justify-center gap-[60px] text-center flex-wrap md:gap-[30px] md:px-[30px]">
        <div>
          <h2>Stramousov Viktor</h2>
          <p></p>
        </div>
        <div>
          <h2>Danylo Sushko</h2>
          <p>danylo.sushko18@gmail.com</p>
        </div>
      </div>
      <p className="mt-6">@ Portfolio, {new Date().getFullYear()}.</p>
    </footer>
  );
};

export default Footer;
