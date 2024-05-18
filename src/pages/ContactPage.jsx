import Hero2 from "../sections/Hero2";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
const ContactPage = () => {
  const classes = [
    "Running",
    "Karate",
    "Gymnastics",
    "Meditation",
    "Boxing",
    "Workout",
    "Power Lifting",
    "Swimming",
  ];
  return (
    <div>
      <Hero2 title="Contact" />
      <div className="max-w-screen h-auto flex px-10 py-20 justify-center">
        <div className="flex flex-col lg:flex-row justify-center w-full max-w-[1500px] gap-5">
          <div className="flex-1 flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-3 text-center lg:text-start">
              <h3 className="font-bold text-3xl">We are here to help you!</h3>
              <p className="text-sm text-slate-500">
                At GymUnity, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-max lg:w-full mb-10">
                <div className="flex flex-col">
                  <h4 className="font-bold text-2xl">California</h4>
                  <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
                  <p className="text-xs text-slate-500 flex-wrap">
                    123 Oceanview St
                  </p>
                  <p className="text-xs text-slate-500 flex-wrap">
                    San Francisco, CA
                  </p>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-2xl">Opening Hours</h4>
                  <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
                  <p className="text-xs text-slate-500 flex-wrap">
                    Mon to Fri: 5:00am - 11:00pm
                  </p>
                  <p className="text-xs text-slate-500 flex-wrap">
                    Sat to Sun: 7:00am - 9:00pm
                  </p>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-2xl">Information</h4>
                  <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
                  <p className="text-xs text-slate-500 flex-wrap">
                    (123) 456-7891
                  </p>
                  <p className="text-xs text-slate-500 flex-wrap">
                    info@gymunity.com
                  </p>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-2xl">Follow Us</h4>
                  <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
                  <div className="flex gap-3">
                    <div className="p-2 bg-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-red-700 transition-colors duration-300 cursor-pointer">
                      <FaFacebookF />
                    </div>
                    <div className="p-2 bg-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-red-700 transition-colors duration-300 cursor-pointer">
                      <RiTwitterXLine />
                    </div>
                    <div className="p-2 bg-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-red-700 transition-colors duration-300 cursor-pointer">
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-auto bg-slate-100 p-10">
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
                <select
                  name="class"
                  id="class"
                  className="p-2 w-full border text-xs"
                >
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
                  <button className="w-[150px] py-3 font-bold bg-red-700 text-white text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.076121980055!2d-122.47879923112997!3d37.75769282920371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715998968175!5m2!1sen!2sus"
        className="w-full max-w-screen h-[500px] mb-20"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactPage;
