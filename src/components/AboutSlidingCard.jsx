import Logo from "./Logo";
import { BiX } from "react-icons/bi";
import dumbbells from "/gymPhotos/dumbbells.jpg";
import dumbbells2 from "/gymPhotos/dumbbells2.jpg";
import flexing from "/gymPhotos/flexing.jpg";
import rope from "/gymPhotos/rope.jpg";
import squatting from "/gymPhotos/squatting.jpg";
import squatting2 from "/gymPhotos/squatting2.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PropTypes from "prop-types";

const AboutSlidingCard = ({ handleClose }) => {
  return (
    <div className="max-w-[500px] h-screen overflow-y-auto fixed bg-white p-5 flex flex-col gap-5 z-50 ">
      <div className="flex justify-between items-center">
        <Logo color="black" />
        <BiX
          size={40}
          className="text-black hover:text-red-700 duration-200 transition-all top-5 right-5 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">About Us</h3>
        <p>
          Find out who we are and what makes us unique. We are a
          community-driven gym committed to providing personalized fitness
          experiences for all levels of fitness enthusiasts in a welcoming and
          supportive environment.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-xl">Gallery</h3>
        <div className="grid grid-cols-3 gap-3 ">
          <img
            className=" object-cover w-[125px] h-[125px] rounded-md"
            src={dumbbells}
            alt="Person using dumbbells"
          />
          <img
            className=" object-cover w-[125px] h-[125px] rounded-md"
            src={flexing}
            alt="Person using dumbbells"
          />
          <img
            className=" object-cover w-[125px] h-[125px] rounded-md"
            src={squatting}
            alt="Person using dumbbells"
          />
          <img
            className=" object-cover w-[125px] h-[125px] rounded-md"
            src={rope}
            alt="Person using dumbbells"
          />
          <img
            className=" object-cover w-[125px] h-[125px] rounded-md"
            src={squatting2}
            alt="Person using dumbbells"
          />
          <img
            className=" object-cover w-[125px] h-[125px] rounded-md"
            src={dumbbells2}
            alt="Person using dumbbells"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-xl">Contact Info</h3>
        <div className="flex gap-2 items-center">
          <FaLocationDot className="text-red-700" size={20} />
          <p> 123 Ocean View Street, San Francisco, CA</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaPhoneAlt className="text-red-700" size={20} />
          <p> (123) 456-7891</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdEmail className="text-red-700" size={20} />
          <p> info@gymunity.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-xl">Follow Us</h3>
        <div className="flex gap-3">
          <FaFacebook size={40} className="text-red-700 cursor-pointer" />
          <FaSquareXTwitter size={40} className="text-red-700 cursor-pointer" />
          <PiInstagramLogoFill
            size={40}
            className="text-red-700 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
AboutSlidingCard.propTypes = {
  handleClose: PropTypes.func,
};

export default AboutSlidingCard;
