const Agenda = () => {
  return (
    <div className="bg-gray-100 p-8 w-full">
      <div className="grid grid-cols-2">
        <h2 className="text-sm whitespace-nowrap">Build What’s Next.</h2>

        <div className="min-h-[50vh] flex flex-col gap-24 pb-8">
          <h3 className="max-w-prose text-8xl tracking-tight">
            Your Future.
            <br />
            Your Venture.
            <br />
            Your Rules.
          </h3>

          <p className="max-w-sm">
            Tired of the "take over the family business" talk? You’ve got your
            own ideas — and we’re here to help you build them. Panzel Family
            Office backs next-gen founders from entrepreneurial families who
            want to go their own way — without tearing the legacy apart.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 border-y border-gray-200 bg-gray-200 gap-px">
        {/* Card 1 Start */}
        <div className="w-full flex flex-col bg-gray-100 p-4 gap-24 justify-between text-base">
          <h4 className="text-2xl text-gray-400 max-w-sm text-pretty">
            <span className="text-black">
              ⚡️ For Founders from Family Businesses 
            </span>
            You don’t have to choose between independence and responsibility. We
            make space for both.
          </h4>

          <div className="max-w-md">
            <ul>
              <li>
                What You Get:
                <br />
              </li>
              <li>→ Seed Capital to launch your own venture</li>
              <li>→ Freedom to Lead with full control from day one</li>
              <li>→ A Smart Exit from the family business — without drama</li>
            </ul>
          </div>
        </div>
        {/* Card 1 End */}

        {/* Card 2 Start */}
        <div className="w-full flex flex-col bg-gray-100 p-4 justify-between gap-24 text-base">
          <h4 className="text-2xl text-gray-400 max-w-sm text-pretty">
            <span className="text-black">🛡️ For Family Business Owners </span>
            Support the next generation’s ambition — without losing what you’ve
            built.
          </h4>

          <div className="max-w-md">
            <ul>
              <li>
                What We Protect: <br />
              </li>
              <li>→ Legacy & Ownership stay untouched</li>
              <li>→ No Forced Sales or rushed transitions</li>
              <li>→ Clear Structures that avoid conflict down the line</li>
            </ul>
          </div>
        </div>
        {/* Card 2 End */}
      </div>

      {/* <div className="grid grid-cols-2">
        <h2 className="text-sm whitespace-nowrap">Build What’s Next.</h2>

        <div className="min-h-[50vh] flex flex-col gap-24 pt-8">
          <h3 className="max-w-prose text-8xl tracking-tight">
            Your Future. Your Venture. Your Rules.
          </h3>

          <p className="max-w-sm">
            Tired of the "take over the family business" talk? You’ve got your
            own ideas — and we’re here to help you build them. Panzel Family
            Office backs next-gen founders from entrepreneurial families who
            want to go their own way — without tearing the legacy apart.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Agenda;
