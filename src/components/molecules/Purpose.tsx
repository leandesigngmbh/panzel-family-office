const Purpose = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-px">
      <h2 className="bg-gray-100 text-sm whitespace-nowrap px-8 py-4">
        ● Purpose
      </h2>

      <div className="col-span-2 bg-gray-100" />

      {/* Card 1 Start */}
      <div className="w-full bg-gray-100 py-12 p-8">
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
      <div className="w-full bg-gray-100 py-12 p-8">
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
      <div className="w-full bg-gray-100 py-12 p-8">
        <div className="max-w-sm flex flex-col gap-4">
          <h4 className="text-2xl">Sports</h4>

          <p>
            Forget the old playbook. Startups are driving the future of sport —
            hyper-personal, tech-fueled, and built with sustainability in mind.
            This is where performance meets purpose.
          </p>
        </div>
      </div>
      {/* Card 3 End */}
    </div>
  );
};

export default Purpose;
