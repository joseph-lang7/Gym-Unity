import { useState } from "react";
import BenefitCard from "../components/BenefitCard";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

const Benefits = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-5 px-5 max-w-[1500px] ">
        <BenefitCard
          icon={<FaClockRotateLeft size={70} />}
          benefit="PROGRESSION"
          description="Let our expert team collaborate with you to craft a personalized plan, guiding you towards success with every step you take."
          mouseEnter={() => setIsHovered1(true)}
          mouseLeave={() => setIsHovered1(false)}
          isHovered={isHovered1}
        />

        <BenefitCard
          icon={<FaDumbbell size={70} />}
          benefit="WORKOUT"
          description="Explore our diverse range of workout options, designed to empower you to achieve your peak fitness levels and transform your body like never before."
          mouseEnter={() => setIsHovered2(true)}
          mouseLeave={() => setIsHovered2(false)}
          isHovered={isHovered2}
        />
        <BenefitCard
          icon={<FaClipboardList size={70} />}
          benefit="NUTRITION"
          description="
          Partner with our team to develop a tailor-made meal plan, specifically designed to support you in achieving your unique health goals."
          mouseEnter={() => setIsHovered3(true)}
          mouseLeave={() => setIsHovered3(false)}
          isHovered={isHovered3}
        />
      </div>
    </div>
  );
};

export default Benefits;
