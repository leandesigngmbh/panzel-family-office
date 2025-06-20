const Footer = () => {
  return (
    <footer className="w-full bg-white text-xs p-8 min-h-64 flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="text-4xl font-semibold">
          Panzel <span className="text-gray-400">Family Office</span>
        </div>
        <ul className="flex gap-3">
          <li>Terms & Conditions</li>
          <li>Contact</li>
          <li>Legal Notices</li>
        </ul>
      </div>

      <div>
        Panzel Family Office, Rue de Lausanne 43b, 1110 Morges, Switzerland.
        Phone +41798444988. Email hej@panzel.ch
      </div>
    </footer>
  );
};

export default Footer;
