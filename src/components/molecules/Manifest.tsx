const Manifest = () => {
  const manifestItems = [
    "Turn vision into motion",
    "Challenge, refine, evolve",
    "The future is a playground.",
    "Change starts within.",
    "Nourish curiosity, expand possibility.",
    "Shift perspectives, shape relatity.",
    "Think freely, act boldly.",
    "Stay restless, stay real.",
  ];

  return (
    <div className="bg-black text-white text-4xl flex relative z-0 w-full p-8 items-start">
      <div className="shrink text-nowrap text-xs sticky top-24">
        Our Manifest
      </div>

      <div className="w-full min-h-screen items-center flex flex-col">
        <ul>
          {manifestItems.map((item, i) => {
            return (
              <li
                key={i}
                className="text-[16vw] font-semibold not-first:text-gray-600"
              >
                {"0" + (i + 1)} 
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full min-h-screen sticky top-0 flex justify-center flex-col">
        <div>
          {manifestItems.map((item, i) => {
            return <span key={i}>{item} </span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Manifest;
