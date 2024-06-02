import Button from "../../../components/button/Button";
import PropTypes from "prop-types";
const Form = ({ classes }) => {
  return (
    <form action="">
      <div className="w-full flex flex-col">
        <h2 className="font-bold text-2xl">Leave Us Your Info</h2>
        <span className="w-[50px] h-[4px] bg-red-700 "></span>
      </div>
      <div className="w-full flex flex-col gap-3 mt-5">
        <input
          type="text"
          placeholder="*Full Name"
          id="fullName"
          className="p-2 w-full border text-xs"
        />
        <input
          type="text"
          placeholder="*Email"
          id="email"
          className="p-2 w-full border text-xs"
        />
        <select name="class" id="class" className="p-2 w-full border text-xs">
          <option value="" className="text-xs">
            Select Class
          </option>
          {classes.map((className) => (
            <option key={className}>{className}</option>
          ))}
        </select>
        <textarea
          name="message"
          id="message"
          placeholder="*Message"
          className="w-full h-[200px] resize-none p-2 border text-xs"
        ></textarea>
        <div className="w-full flex justify-center">
          <Button
            bgColor="bg-red-700"
            textColor="text-white"
            content="Submit"
          />
        </div>
      </div>
    </form>
  );
};
Form.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
};

export default Form;
