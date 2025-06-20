const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 inset-x-0 w-full bg-white flex">
      <div className="py-4 px-12 text-4xl shrink font-semibold">Panzel</div>
      <div className="py-4 px-12 text-xl grow bg-black text-white flex items-center justify-between">
        <p>Family Office</p>

        <ul className="flex gap-3">
          <li>Overview</li>
          <li>Agenda</li>
          <li>Info</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
