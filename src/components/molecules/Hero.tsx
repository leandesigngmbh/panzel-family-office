const Hero = () => {
  return (
    <div className="flex flex-col gap-16 w-full min-h-screen py-48 px-8">
      <h3 className="text-4xl text-white">Thinking outside the box.</h3>

      <h1
        data-speed={0.8}
        className="text-[18vw] -ml-[0.05em] font-semibold leading-[0.8em] tracking-tighter"
      >
        Building <br /> together.
      </h1>
    </div>
  );
};

export default Hero;
