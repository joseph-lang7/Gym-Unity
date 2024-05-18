import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const AuthForm = ({ buttonContent, signUp, signIn }) => {
  return (
    <div className="my-20 max-w-screen">
      <div className="flex w-full justify-center">
        <form
          action=""
          className="w-full max-w-[600px] h-auto py-20 px-10 bg-black"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col text-white gap-2">
              <label className="font-bold text-lg" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 pl-4"
                type="text"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col text-white gap-2">
              <label className="font-bold text-lg" htmlFor="password">
                Password
              </label>
              <input
                className="p-2 pl-4"
                type="text"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-3 bg-red-700 text-white text-xl">
              {buttonContent}
            </button>
            {signUp && (
              <div className="w-full justify-center flex gap-2 text-white">
                <p>Already have an account?</p>
                <Link to="/signin" className="text-red-700 font-bold">
                  Sign In
                </Link>
              </div>
            )}
            {signIn && (
              <div className="w-full justify-center flex gap-2 text-white">
                <p>New to GymUnity?</p>
                <Link to="signup" className="text-red-700 font-bold">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
AuthForm.propTypes = {
  buttonContent: PropTypes.string,
  signUp: PropTypes.bool,
  signIn: PropTypes.bool,
};

export default AuthForm;
