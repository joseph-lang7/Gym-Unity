import { useState } from "react";
const BMICalculator = () => {
  const [userInput, setUserInput] = useState({
    weight: "",
    height: "",
  });
  const [bmi, setBmi] = useState("");
  const [weight, setWeight] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const input = e.target.value;
    setUserInput({
      ...userInput,
      [name]: input,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${userInput.weight}&height=${userInput.height}`;
    const fetchOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RapidAPI_Key,
        "X-RapidAPI-Host": import.meta.env.VITE_RapidAPI_Host,
      },
    };
    try {
      const res = await fetch(url, fetchOptions);
      if (res.ok) {
        const data = await res.json();
        const bmiVal = data.bmi;
        setBmi(bmiVal);
        weightCalc(bmiVal);
        setUserInput({
          weight: "",
          height: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const weightCalc = (bmiVal) => {
    if (Number(bmiVal) < 18.5) {
      setWeight("underweight");
      return;
    }
    if (Number(bmiVal) >= 18.5 && Number(bmiVal) <= 24.9) {
      setWeight("healthy");
      return;
    }
    if (Number(bmiVal) > 25) {
      setWeight("overweight");
      return;
    }
  };

  return (
    <div className="max-w-screen bg-black h-auto  mb-20 relative">
      <div className="flex gap-3 flex-col max-w-screen h-full relative">
        <div className="w-4/6 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 z-10 py-10 px-10 w-[300px] md:w-[500px] justify-center"
          >
            <h3 className="text-white font-bold text-4xl">
              Let&apos;s Calculate Your{" "}
              <span className="text-red-700">BMI</span>
            </h3>
            <p className="text-white">
              Check your body mass index using our precise calculation tool.
            </p>
            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                <input
                  className="p-2 text-white bg-transparent border-2 border-[#9CA3AF] rounded-md w-[150px] sm:w-[200px]  md:w-[220px] lg:w-[300px]"
                  placeholder="Weight / lbs"
                  type="text"
                  name="weight"
                  onChange={handleChange}
                  value={userInput.weight}
                  id="weight"
                />
                <p className="text-white">
                  Your BMI is: {bmi && Number(bmi).toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="p-2 text-white bg-transparent border-2 border-[#9CA3AF] rounded-md w-[150px] sm:w-[200px] md:w-[220px] lg:w-[300px]"
                  placeholder="Height / in"
                  type="text"
                  name="height"
                  value={userInput.height}
                  onChange={handleChange}
                  id="height"
                />
                <p className="text-white ">
                  Your weight is:
                  <span
                    className={`${
                      weight === "healthy"
                        ? "text-green-500 ml-1"
                        : "text-red-500 ml-1"
                    }`}
                  >
                    {weight}
                  </span>
                </p>
              </div>
            </div>

            <button className="px-2 py-3 bg-slate-700 w-[200px] rounded-md text-white hover:bg-red-700 transition-colors duration-300">
              CALCULATE
            </button>
          </form>
        </div>
        <div
          className="w-full md:w-4/6 h-full absolute bg-center bg-cover right-0 top-0 z-0 "
          style={{ backgroundImage: "url(gymPhotos/power-clean.jpg" }}
        ></div>
      </div>
    </div>
  );
};

export default BMICalculator;
