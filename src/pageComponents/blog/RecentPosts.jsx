import { RecentBlogPost } from "../../components/RecentBlogPost";
const RecentPosts = () => {
  return (
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
  );
};

export default RecentPosts;
