import PropTypes from "prop-types";
const Hero2 = ({ title }) => {
  return (
    <div
      className="h-[600px] bg-contain bg-no-repeat bg-right bg-black max-w-screen relative"
      style={{ backgroundImage: "url('/hero2.jpg')" }}
    >
      <h4 className="w-full max-w-full absolute bottom-10 text-white text-4xl font-bold justify-center flex">
        {title}
      </h4>
    </div>
  );
};

Hero2.propTypes = {
  title: PropTypes.string,
};

export default Hero2;
