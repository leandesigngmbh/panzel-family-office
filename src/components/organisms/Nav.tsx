const Nav = () => {
  return (
    <nav className="sticky top-0 inset-x-0 w-full bg-white flex">
      <div className="py-4 px-12 text-4xl uppercase shrink font-bold">
        Panzel
      </div>
      <div className="py-4 px-12 text-xl grow bg-gray-900 text-white flex items-center justify-between">
        <div>Family Office</div>

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
