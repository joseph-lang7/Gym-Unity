import PostCard from "./PostCard";
const RecentNews = () => {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="flex flex-col gap-5 items-center w-full">
        <div
          className="w-[300px] h-[60px] bg-cover text-black flex items-center justify-start"
          style={{ backgroundImage: "url(/red-text-bg.png)" }}
        >
          <p className="w-full text-center translate-y-2 font-bold text-white">
            LATEST POSTS
          </p>
        </div>
        <h3 className="font-bold text-4xl text-black text-center ">
          View Our Most Recent Posts
        </h3>
        <p className=" max-w-[700px] text-center">
          Get the latest news, deals, and exclusive offers from GymUnity.
        </p>
      </div>

      <div className="flex gap-3 mt-12 flex-wrap justify-center">
        <PostCard
          title="The Ultimate Guide to Strength Training"
          description=" Explore the benefits of strength training to help maximize muscle growth and achieve your fitness goals. From proper form to progressive overload strategies, this comprehensive guide empowers readers to unlock their full physical potential in the gym."
          date="5/1/24"
        />
        <PostCard
          title="A Roadmap to Effective & Sustainable Fat Loss"
          description=" Dive into the world of cardiovascular exercise with this insightful blog, which delves into the science behind effective fat loss through cardio workouts. From HIIT protocols to steady-state training, readers will discover proven strategies for burning calories, boosting metabolism, and achieving sustainable weight loss results."
          date="4/25/24"
        />
        <PostCard
          title="The Transformative Power of Yoga for Mind and Body"
          description=" Explore the transformative benefits of yoga in this enlightening blog, which examines how this ancient practice can help individuals achieve greater balance and harmony in both mind and body. From stress reduction to improved flexibility."
          date="4/7/24"
        />
      </div>
    </div>
  );
};

export default RecentNews;
