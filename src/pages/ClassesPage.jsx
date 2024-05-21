import Classes from "../pageComponents/classes/Classes";
import Hero2 from "../sections/Hero2";
import { useState } from "react";
const ClassesPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-screen h-auto">
      <Hero2 title="Classes" />
      <Classes showMore={showMore} />
      <div className="flex w-full justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-7 py-3 my-20 bg-slate-500 text-white rounded-md hover:bg-slate-700 transition-colors duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ClassesPage;
