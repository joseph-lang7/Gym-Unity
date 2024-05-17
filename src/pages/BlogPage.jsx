import BlogCard from "../components/BlogCard";
import BlogCategory from "../components/BlogCategory";
import PopularTag from "../components/PopularTag";
import { RecentBlogPost } from "../components/RecentBlogPost";
import Hero2 from "../sections/Hero2";
import { HiOutlineSearch } from "react-icons/hi";

const BlogPage = () => {
  return (
    <div>
      <Hero2 title="Blog" />
      <div className="flex max-w-screen justify-center mt-20 mb-20">
        <div className="flex max-w-[1500px] w-full h-auto px-10 gap-5">
          {/* Posts container */}
          <div className="flex flex-col w-full lg:w-3/5">
            <BlogCard
              title="10 Essential Gymnastics Drills Every Beginner Should Master"
              src="/blogPhotos/gymnastics.jpg"
              date="May 13, 2024"
              category="Gymnastics"
            />
            <BlogCard
              title="Unlocking the Power Within: The Mental Benefits of Karate Training"
              src="/blogPhotos/karate.jpg"
              date="May 5, 2024"
              category="Karate"
            />
            <BlogCard
              title="Mastering the Art of Running: Tips for Beginners and Experienced Runners"
              src="/blogPhotos/running.jpg"
              date="April 29, 2024"
              category="Running"
            />
            <BlogCard
              title="Finding Inner Peace: A Guide to Meditation for Gym Enthusiasts"
              src="/blogPhotos/meditation.jpg"
              date="April 25, 2024"
              category="Meditation"
            />
            <BlogCard
              title="Yoga for Strength: Building Muscle and Flexibility on the Mat"
              src="/blogPhotos/yoga2.jpg"
              date="April 14, 2024"
              category="Yoga"
            />
            <BlogCard
              title="Yoga for Athletes: Enhancing Flexibility, Strength, and Recovery"
              src="/blogPhotos/yoga.jpg"
              date="April 9, 2024"
              category="Yoga"
            />
            <BlogCard
              title="The Power of Recovery: Importance of Rest and Regeneration in Fitness"
              src="/blogPhotos/rest.jpg"
              date="April 5, 2024"
              category="Recovery"
            />
          </div>
          {/* Misc */}
          <div className="flex-1 flex-col gap-5 w-full hidden lg:flex">
            <div className="flex items-center h-auto w-full">
              <input
                className="p-3 border-[1px] rounded-l-lg w-full"
                type="text"
                placeholder="Search..."
              />
              <button className="px-3 bg-red-700 h-full flex items-center rounded-r-lg">
                <HiOutlineSearch className="text-white" size={25} />
              </button>
            </div>
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
            <div className="flex flex-col w-full h-auto px-5 pt-5 pb-10 bg-slate-100">
              <div className="flex flex-col mb-5 w-max">
                <h5 className=" font-bold ">Recent Posts</h5>
                <span className="w-1/2 h-[5px] bg-red-700 mt-[12px]"></span>
              </div>
              <div className="flex flex-col gap-5">
                <RecentBlogPost
                  title="10 Essential Gymnastics Drills Every Beginner Should Master"
                  src="/blogPhotos/gymnastics.jpg"
                />
                <RecentBlogPost
                  title="Unlocking the Power Within: The Mental Benefits of Karate Training"
                  src="/blogPhotos/karate.jpg"
                />
                <RecentBlogPost
                  title="Mastering the Art of Running: Tips for Beginners and Experienced Runners"
                  src="/blogPhotos/running.jpg"
                />
                <RecentBlogPost
                  title="Finding Inner Peace: A Guide to Meditation for Gym Enthusiasts"
                  src="/blogPhotos/meditation.jpg"
                />
                <RecentBlogPost
                  title="Yoga for Strength: Building Muscle and Flexibility on the Mat"
                  src="/blogPhotos/yoga2.jpg"
                />
                <RecentBlogPost
                  title="Yoga for Athletes: Enhancing Flexibility, Strength, and Recovery"
                  src="/blogPhotos/yoga.jpg"
                />
                <RecentBlogPost
                  title="The Power of Recovery: Importance of Rest and Regeneration in Fitness"
                  src="/blogPhotos/rest.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col w-full h-auto px-5 pt-5 pb-10 bg-slate-100">
              <div className="flex flex-col mb-5 w-max">
                <h5 className=" font-bold ">Popular Tags</h5>
                <span className="w-1/2 h-[5px] bg-red-700 mt-[12px]"></span>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="flex gap-2 w-full flex-wrap">
                  <PopularTag tag="Running" />
                  <PopularTag tag="Fitness" />
                  <PopularTag tag="Yoga" />

                  <PopularTag tag="Boxing" />
                  <PopularTag tag="Workout" />
                  <PopularTag tag="Diet" />
                  <PopularTag tag="Gymnastics" />
                  <PopularTag tag="Karate" />
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
