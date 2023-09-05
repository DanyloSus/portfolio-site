const Footer = () => {
  return (
    <footer className="flex items-center flex-col gap-3 py-9">
      <h2>Portfolios</h2>
      <p>info@......com</p>
      <p className="mt-6">@ Portfolio, {new Date().getFullYear()}.</p>
    </footer>
  );
};

export default Footer;
