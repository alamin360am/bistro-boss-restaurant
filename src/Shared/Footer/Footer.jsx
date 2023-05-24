const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid gap-0 grid-cols-1 md:grid-cols-2 place-items-center w-full">
        <div className="bg-slate-800 w-full h-full flex flex-col items-center py-12">
          <h2 className="text-3xl">Contact Us</h2>
        </div>
        <div className="bg-slate-900 w-full h-full flex flex-col items-center py-12">
          <h2 className="text-3xl mb-4">Follow Us</h2>
          <div className="flex flex-col items-center gap-3">
            <address>123 ABS Street, Uni 21, Bangladesh</address>
            <a href="tel:+880123456789">+880 123456789</a>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
