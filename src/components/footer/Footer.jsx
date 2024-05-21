import BrandInfo from "./BrandInfo";
import Classes from "./Classes";
const Footer = () => {
  return (
    <div className="max-w-screen h-auto flex justify-center px-10 py-10">
      <div className="w-full max-w-[1500px] h-full flex flex-col gap-7 items-center justify-center md:flex-row md:justify-around md:items-start mb-20">
        <BrandInfo />
        <Classes />
      </div>
    </div>
  );
};

export default Footer;
