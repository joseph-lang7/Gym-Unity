import { useState } from "react";
import Hero2 from "../sections/Hero2";
import DayButtons from "../pageComponents/schedule/DayButtons";
import Classes from "../pageComponents/schedule/Classes";
const SchedulePage = () => {
  const [selectedButton, setButtonSelected] = useState("Monday");

  const handleButton = (day) => {
    setButtonSelected(day);
  };

  return (
    <div className="max-w-screen">
      <Hero2 title="Schedule" />
      <DayButtons selectedButton={selectedButton} handleButton={handleButton} />
      <Classes selectedButton={selectedButton} />
    </div>
  );
};

export default SchedulePage;
