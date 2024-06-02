import BlogCard from "../blogCard/BlogCard";

BlogCard;
const Posts = () => {
  return (
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
  );
};

export default Posts;
