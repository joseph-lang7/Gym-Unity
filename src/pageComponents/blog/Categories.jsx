import BlogCategory from "../../components/BlogCategory";
const Categories = () => {
  return (
    <div className="flex flex-col w-full h-auto px-5 pt-5 pb-10 bg-slate-100">
      <div className="flex flex-col mb-5 w-max">
        <h5 className=" font-bold ">Categories</h5>
        <span className="w-1/2 h-[5px] bg-red-700 mt-[12px]"></span>
      </div>
      <div className="flex flex-col gap-5">
        <BlogCategory title="Body Building" amount="4" />
        <BlogCategory title="Meditation" amount="2" />
        <BlogCategory title="Boxing" amount="3" />
        <BlogCategory title="Yoga" amount="5" />
        <BlogCategory title="Gymnastics" amount="4" />
      </div>
    </div>
  );
};

export default Categories;
