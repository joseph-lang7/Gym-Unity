import Hero2 from "../components/hero2/Hero2";
import { Form, Info, Map } from "../pageComponents/contactPage";
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
          <Info />
          <div className="flex-1 w-full h-auto bg-slate-100 p-10">
            <Form classes={classes} />
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default ContactPage;
