import featuredLogo1 from "/featuredOn/featured-logo1.png";
import featuredLogo2 from "/featuredOn/featured-logo2.png";
import featuredLogo3 from "/featuredOn/featured-logo3.png";
import featuredLogo4 from "/featuredOn/featured-logo4.png";
import featuredLogo5 from "/featuredOn/featured-logo5.png";
const FeaturedOnBanner = () => {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <h3 className="font-bold text-3xl text-black text-center">FEATURED ON</h3>
      <div className="flex justify-center flex-wrap gap-5">
        <img
          className="w-[150px] h-[150px] object-cover opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer"
          src={featuredLogo1}
          alt="Logo icon 1"
        />
        <img
          className="w-[150px] h-[150px] object-cover opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer"
          src={featuredLogo2}
          alt="Logo icon 2"
        />
        <img
          className="w-[150px] h-[150px] object-cover opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer"
          src={featuredLogo3}
          alt="Logo icon 3"
        />
        <img
          className="w-[150px] h-[150px] object-cover opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer col-sa"
          src={featuredLogo4}
          alt="Logo icon 4"
        />
        <img
          className="w-[150px] h-[150px] object-cover opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer"
          src={featuredLogo5}
          alt="Logo icon 5"
        />
      </div>
      <span className="h-[1px] max-w-screen inline-block bg-black opacity-30"></span>
    </div>
  );
};

export default FeaturedOnBanner;
