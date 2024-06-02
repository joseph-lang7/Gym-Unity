import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
