import ClassCard from "./ClassCard";
import { GiRunningShoe } from "react-icons/gi";
import { TbKarate } from "react-icons/tb";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { IoBarbell } from "react-icons/io5";
import { GiBoxingGlove } from "react-icons/gi";

import { useState } from "react";
const OurClasses = () => {
  let [cardioIsHovered, setCardioIsHovered] = useState(false);
  let [karateIsHovered, setKarateIsHovered] = useState(false);
  let [gymnasticsIsHovered, setGymnasticsIsHovered] = useState(false);
  let [meditationIsHovered, setMeditationIsHovered] = useState(false);
  let [boxingIsHovered, setBoxingIsHovered] = useState(false);
  let [workoutIsHovered, setWorkoutIsHovered] = useState(false);
  return (
    <div className="flex justify-center max-w-screen h-[2500px] md:h-[800px] px-5">
      <div className="w-screen h-full flex justify-center max-w-[1500px] px-5">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <div
            className="text-sm w-[300px] h-[80px] bg-cover text-black flex items-center justify-start"
            style={{ backgroundImage: "url(/red-text-bg.png)" }}
          >
            <p className="w-full text-center translate-y-2 font-bold text-white">
              FEATURED CLASSES
            </p>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            CHECK OUT OUR CLASSES
          </h3>
          <div className="grid md:grid-cols-4 grid-cols-1 w-full h-full gap-5">
            <ClassCard
              Icon={
                <div className="flex w-full h-full justify-end items-center pr-2">
                  <GiRunningShoe
                    size={40}
                    className={`text-${
                      cardioIsHovered ? "red-700" : "white"
                    }  transition-colors duration-300`}
                  />
                </div>
              }
              bgPath="/gymPhotos/running.jpg"
              large={true}
              classTitle="Running"
              times="Wednesday 9:00am-10:00am"
              isHovered={cardioIsHovered}
              mouseEnter={() => setCardioIsHovered(true)}
              mouseLeave={() => setCardioIsHovered(false)}
            />
            <ClassCard
              Icon={
                <div className="flex w-full h-full justify-end items-center pr-2">
                  <TbKarate
                    size={40}
                    className={`text-${
                      karateIsHovered ? "red-700" : "white"
                    }  transition-colors duration-300`}
                  />
                </div>
              }
              bgPath="/gymPhotos/karate.jpg"
              classTitle="Karate"
              times="Friday 10:00am-11:00am"
              isHovered={karateIsHovered}
              mouseEnter={() => setKarateIsHovered(true)}
              mouseLeave={() => setKarateIsHovered(false)}
            />
            <ClassCard
              Icon={
                <div className="flex w-full h-full justify-end items-center pr-2">
                  <MdOutlineSportsGymnastics
                    size={40}
                    className={`text-${
                      gymnasticsIsHovered ? "red-700" : "white"
                    }  transition-colors duration-300`}
                  />
                </div>
              }
              bgPath="/gymPhotos/gymnastics.jpg"
              classTitle="Gymnastics"
              times="Saturday 12:00pm-1:00pm"
              isHovered={gymnasticsIsHovered}
              mouseEnter={() => setGymnasticsIsHovered(true)}
              mouseLeave={() => setGymnasticsIsHovered(false)}
            />
            <ClassCard
              Icon={
                <div className="flex w-full h-full justify-end items-center pr-2">
                  <GiMeditation
                    size={40}
                    className={`text-${
                      meditationIsHovered ? "red-700" : "white"
                    } transition-colors duration-300`}
                  />
                </div>
              }
              bgPath="/gymPhotos/meditation.jpg"
              classTitle="Meditation"
              times="Monday 7:00am-8:00am"
              isHovered={meditationIsHovered}
              mouseEnter={() => setMeditationIsHovered(true)}
              mouseLeave={() => setMeditationIsHovered(false)}
            />
            <ClassCard
              Icon={
                <div className="flex w-full h-full justify-end items-center pr-2">
                  <GiBoxingGlove
                    size={40}
                    className={`text-${
                      boxingIsHovered ? "red-700" : "white"
                    } transition-colors duration-300`}
                  />
                </div>
              }
              bgPath="/gymPhotos/boxing.jpg"
              classTitle="Boxing"
              times="Tuesday 5:00pm-6:00pm"
              isHovered={boxingIsHovered}
              mouseEnter={() => setBoxingIsHovered(true)}
              mouseLeave={() => setBoxingIsHovered(false)}
            />
            <ClassCard
              Icon={
                <div className="flex w-full h-full justify-end items-center pr-2">
                  <IoBarbell
                    size={40}
                    className={`text-${
                      workoutIsHovered ? "red-700" : "white"
                    } transition-colors duration-300`}
                  />
                </div>
              }
              bgPath="/gymPhotos/working-out.jpg"
              large={true}
              classTitle="Workout"
              times="Thursday 3:00pm-4:00pm"
              isHovered={workoutIsHovered}
              mouseEnter={() => setWorkoutIsHovered(true)}
              mouseLeave={() => setWorkoutIsHovered(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClasses;
