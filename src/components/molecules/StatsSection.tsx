import CountUp from "@/components/atoms/CountUp";

const StatsSection = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-col">
      <div className="flex">
        <div className="flex flex-col px-8 py-16 gap-16">
          <h2 className="text-3xl">Pitch Decks Received</h2>

          <p>The breakdown of pitch decks that we've received as of 22/04/25</p>
        </div>

        <div className="w-full flex flex-col bg-blue-500">
          <div className="w-full flex flex-col bg-blue-300 p-8"></div>
        </div>
      </div>

      {/* <div className="text-6xl font-bold">
        <CountUp to={1500} />+
      </div>
      <div className="text-4xl font-semibold text-gray-500">
        <CountUp from={0} to={97.5} decimals={1} />% satisfaction
      </div> */}
    </div>
  );
};

export default StatsSection;
