import Categories from "../pageComponents/blog/Categories";
import DiscountCard from "../pageComponents/blog/DiscountCard";
import PopularTags from "../pageComponents/blog/PopularTags";
import Posts from "../pageComponents/blog/Posts";
import RecentPosts from "../pageComponents/blog/RecentPosts";
import SearchBar from "../pageComponents/blog/SearchBar";
import Hero2 from "../sections/Hero2";

const BlogPage = () => {
  return (
    <div>
      <Hero2 title="Blog" />
      <div className="flex max-w-screen justify-center mt-20 mb-20">
        <div className="flex max-w-[1500px] w-full h-auto px-10 gap-5">
          <Posts />
          <div className="flex-1 flex-col gap-5 w-full hidden lg:flex">
            <SearchBar />
            <Categories />
            <RecentPosts />
            <PopularTags />
            <DiscountCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
