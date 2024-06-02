import { useState } from "react";
import Hero2 from "../components/hero2/Hero2";
import { DayButtons, Classes } from "../pageComponents/schedulePage";
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
