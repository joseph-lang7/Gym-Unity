const OurClasses = () => {
  return (
    <div className="flex justify-center max-w-screen px-5">
      <div className="w-screen h-full flex justify-center max-w-[1500px] px-5">
        <div className="flex flex-col gap-3 justify-center items-center w-full">
          <div
            className="text-sm w-[300px] h-[60px] bg-cover text-black flex items-center justify-start"
            style={{ backgroundImage: "url(/red-text-bg.png)" }}
          >
            <p className="w-full text-center translate-y-2 font-bold text-white">
              FEATURED CLASSES
            </p>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            WE ARE OFFERING FLEXIBLE CLASSES
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1"></div>
    </div>
  );
};

export default OurClasses;
