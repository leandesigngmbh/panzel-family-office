const Agenda = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="min-h-[50vh] max-w-prose text-8xl tracking-tight">
        Building the future with the right partners.
      </div>

      <div className="grid grid-cols-3 border-t border-gray-200 bg-gray-200 gap-px">
        {/* Card 1 Start */}
        <div className="w-full aspect-[4/5] flex flex-col bg-gray-100 p-4 justify-between text-base">
          <h4 className="text-2xl text-gray-400 max-w-[20ch] text-pretty">
            <span className="text-gray-950">You</span> provide value to your
            customers by selecting state-of-the-art products, systems, and
            brands.
          </h4>

          <p className="text-xs">01</p>
        </div>
        {/* Card 1 End */}

        {/* Card 2 Start */}
        <div className="w-full aspect-[4/5] flex flex-col bg-gray-100 p-4 justify-between text-base">
          <h4 className="text-2xl text-gray-400 max-w-[20ch] text-pretty">
            <span className="text-gray-950">You</span> choose to partner up with
            trustworthy companies.
          </h4>

          <p className="text-xs">02</p>
        </div>
        {/* Card 2 End */}

        {/* Card 3 Start */}
        <div className="w-full aspect-[4/5] flex flex-col bg-gray-100 p-4 justify-between text-base">
          <h4 className="text-2xl text-gray-400 max-w-[20ch] text-pretty">
            <span className="text-gray-950">You</span> always look for something
            special.
          </h4>

          <p className="text-xs">03</p>
        </div>
        {/* Card 3 End */}
      </div>
    </div>
  );
};

export default Agenda;
