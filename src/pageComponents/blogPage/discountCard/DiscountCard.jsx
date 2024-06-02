const DiscountCard = () => {
  return (
    <div
      className="w-full h-[700px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/blogPhotos/yoga-mat-sale.jpg)",
      }}
    >
      <div className="bg-white px-5 p-3 absolute left-0 top-[10%]">
        <p className="font-bold font-xl">GymUnity Sale</p>
      </div>
      <div className="absolute left-[40px] top-[22%]">
        <p className="font-bold text-black text-4xl">40%</p>
        <p className="font-bold text-black text-md">Discount</p>
      </div>
    </div>
  );
};

export default DiscountCard;
