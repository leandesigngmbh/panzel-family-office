import Image from "next/image";

const keywords = [
  "Distribution",
  "Insights",
  "Collaboration",
  "Impact",
  "Strategy",
  "Growth",
  "Transformation",
  "-Future",
];

const Overview = () => {
  return (
    <div className="flex w-full">
      <div
        data-speed="0.9"
        className="bg-black text-white min-h-[140vh] w-full p-4 flex flex-col items-end text-right justify-between"
      >
        <p className="text-8xl tracking-tight">
          Jan. 26 <br></br>
          2024
        </p>

        <ul className="flex items-start flex-col w-full">
          {keywords.map((item, i) => {
            return (
              <li key={i} className="text-6xl">
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        data-speed="1.1"
        className="bg-white text-black min-h-[140vh] w-full"
      >
        <p className="p-4 text-8xl tracking-tight">
          London <br />  
        </p>

        <div className="flex w-full">
          {/* Left Col Start */}
          <div className="flex flex-col w-full">
            <p className="text-lg p-4 mt-40">
              At Distrategy we aim to foster deeper connections, cultivate
              meaningful collaborations and create the perfect environment to
              explore ideas and conceptualize a vision.
            </p>

            <div className="w-full aspect-[4/6] relative flex flex-col">
              <div className="w-full h-1/12 bg-orange-300 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                8.3 %
              </div>
              <div className="w-full h-1/12 bg-orange-400 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                8.3 %
              </div>
              <div className="w-full h-2/12 bg-orange-500 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                16.6 %
              </div>
              <div className="w-full h-3/12 bg-orange-600 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                25%
              </div>
              <div className="w-full h-5/12 bg-orange-700 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                41%
              </div>
            </div>

            {/* <Image
              src={"/assets/overview-image2.jpg"}
              width={900}
              height={1622}
              // className="bg-contain"
              alt=""
            /> */}
          </div>
          {/* Left Col End */}

          {/* Right Col Start */}
          <div className="w-full">
            <div className="w-full aspect-[4/6] relative flex flex-col">
              <div className="w-full h-1/12 bg-blue-300 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                8.3 %
              </div>
              <div className="w-full h-1/12 bg-blue-400 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                8.3 %
              </div>
              <div className="w-full h-2/12 bg-blue-500 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                16.6 %
              </div>
              <div className="w-full h-3/12 bg-blue-600 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                25%
              </div>
              <div className="w-full h-5/12 bg-blue-700 text-white flex items-start justify-end text-xs flex-col py-1 px-4 font-normal">
                41%
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col w-full">
            <Image
              src={"/assets/overview-image1.jpg"}
              width={900}
              height={1482}
              // className="bg-contain"
              alt=""
            />
          </div> */}
          {/* Right Col End */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
