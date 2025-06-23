const Hero = () => {
  return (
    <div className="flex flex-col gap-16 w-full min-h-screen py-56 px-8">
      {/* <h3 className="text-4xl text-white">Investing in what's next.</h3> */}

      {/* <h1
        data-speed={0.8}
        className="text-[10vw] -ml-[0.05em] font-semibold leading-[0.8em] tracking-tighter"
      >
        Growing <br /> together.
      </h1> */}

      <div className="grid grid-cols-2 items-start">
        <div className="px-4">
          <h1 className="text-[10vw] font-semibold leading-[0.8em] tracking-tighter text-right">
            Growing <br />
          </h1>
        </div>

        <div className="px-4 flex flex-col gap-24">
          <h1 className="text-[10vw] font-semibold leading-[0.8em] tracking-tighter">
            together.
          </h1>

          <p data-speed="1.1" className="text-xl max-w-xl">
            About Us Since 1918, Panzel Family Office has redefined what it
            means to serve families. Independent, family-led, and built on over
            a century of trust, we go beyond the expected—delivering bold,
            tailored strategies that make a real impact across generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
