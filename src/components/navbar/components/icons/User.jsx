import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
const User = () => {
  return (
    <Link to="/signin">
      <FaRegUser
        className="text-white hover:text-red-700 duration-200 cursor-pointer"
        size={30}
      />
    </Link>
  );
};

export default User;
