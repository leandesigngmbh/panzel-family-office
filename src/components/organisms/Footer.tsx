const Footer = () => {
  return (
    <footer className="w-full bg-white text-xs p-8 min-h-64 flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="text-4xl font-semibold uppercase">Panzel</div>
        <ul className="flex gap-3">
          <li>Terms & Conditions</li>
          <li>Contact</li>
          <li>Legal Notices</li>
        </ul>
      </div>

      <div>
        Polígono Industrial Sector 919290, FONTANAR (Guadalajara) Spain. Tel:
        +34 949 88 82 10
      </div>
    </footer>
  );
};

export default Footer;
