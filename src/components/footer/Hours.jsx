const Hours = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-5 w-max">
        <h3 className="text-xl font-bold w-auto">Our Hours</h3>
        <span className="w-1/2 h-[5px] bg-red-700 "></span>
      </div>
      <div className="flex flex-col gap-3 w-auto">
        <div className="flex w-auto flex-col gap-3">
          <p className="font-bold text-slate-600">Monday - Friday</p>
          <p className="text-slate-500">5:00am - 11:00pm</p>
          <p className="font-bold text-slate-600">Saturday & Sunday</p>
          <p className="text-slate-500">7:00am - 9:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default Hours;
