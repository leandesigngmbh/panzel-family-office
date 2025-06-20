const Hero = () => {
  return (
    <div className="flex flex-col gap-16 w-full min-h-screen py-56 px-8">
      <h3 className="text-4xl text-white">Investing in what's next.</h3>

      <h1
        data-speed={0.8}
        className="text-[14vw] -ml-[0.05em] font-semibold leading-[0.8em] tracking-tighter"
      >
        Growing <br /> together.
      </h1>
    </div>
  );
};

export default Hero;
