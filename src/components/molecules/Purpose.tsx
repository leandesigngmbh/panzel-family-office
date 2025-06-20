const Purpose = () => {
  return (
    <div className="bg-gray-100 p-8 w-full">
      <h2 className="text-sm whitespace-nowrap">● Purpose</h2>

      <div className="grid grid-cols-3 bg-gray-200 gap-px">
        {/* Card 1 Start */}
        <div className="w-full bg-gray-100 py-12 pr-8">
          <div className="max-w-sm flex flex-col gap-4">
            <h4 className="text-2xl">Gaming</h4>

            <p>
              This isn’t just entertainment — it’s a digital frontier. Gaming is
              exploding, and startups are rewriting the rules with bold IP,
              creator economies, and next-gen tech.
            </p>
          </div>
        </div>
        {/* Card 1 End */}

        {/* Card 2 Start */}
        <div className="w-full bg-gray-100 py-12 pl-8">
          <div className="max-w-sm flex flex-col gap-4">
            <h4 className="text-2xl">Music</h4>

            <p>
              Streaming cracked the old system wide open. Now it’s time for
              founders to take it further — rethinking rights, revenue, and how
              artists own their futures.
            </p>
          </div>
        </div>
        {/* Card 2 End */}

        {/* Card 3 Start */}
        <div className="w-full bg-gray-100 py-12 pl-8">
          <div className="max-w-sm flex flex-col gap-4">
            <h4 className="text-2xl">Sports</h4>

            <p>
              Forget the old playbook. Startups are driving the future of sport
              — hyper-personal, tech-fueled, and built with sustainability in
              mind. This is where performance meets purpose.
            </p>
          </div>
        </div>
        {/* Card 3 End */}
      </div>
    </div>
  );
};

export default Purpose;
