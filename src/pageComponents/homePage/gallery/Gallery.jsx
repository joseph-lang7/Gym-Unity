const Gallery = () => {
  return (
    <div className="flex max-w-screen flex-col justify-center items-center py-20 gap-5 px-10">
      <div
        className="w-[380px] h-[65px] bg-cover text-black flex items-center justify-start"
        style={{ backgroundImage: "url(/red-text-bg.png)" }}
      >
        <p className="w-full text-center translate-y-2 font-bold text-white">
          GYMUNITY GALLERY
        </p>
      </div>
      <p className=" max-w-[700px] text-center">
        Explore our vibrant gallery showcasing the energy, dedication, and
        transformation of our members on their fitness journey.
      </p>
      <div className="flex flex-col gap-3 w-full max-w-[1500px] justify-center">
        <div className="grid grid-cols-4 grid-rows-3 gap-1 w-full h-[700px]">
          <div
            className=" bg-cover bg-center w-full h-full rounded-md col-span-2 row-span-2 "
            style={{ backgroundImage: "url(/gymPhotos/dumbbells.jpg)" }}
          />
          <div
            className=" bg-cover bg-center w-full h-full  rounded-md col-span-2"
            style={{ backgroundImage: "url(/gymPhotos/squatting.jpg)" }}
          />

          <div
            className=" bg-cover bg-center  w-full h-full col-span-2 row-span-2 rounded-md"
            style={{ backgroundImage: "url(/gymPhotos/rope.jpg)" }}
          />
          <div
            className=" bg-cover bg-center  w-full h-full rounded-md"
            style={{ backgroundImage: "url(/gymPhotos/flexing.jpg)" }}
          />
          <div
            className=" bg-cover bg-center  w-full h-full rounded-md"
            style={{ backgroundImage: "url(/gymPhotos/dumbbells2.jpg)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
