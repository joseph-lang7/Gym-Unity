import Hero2 from "../sections/Hero2";
import AuthForm from "../components/AuthForm";

const SignupPage = () => {
  return (
    <div>
      <Hero2 title="Sign Up" />
      <AuthForm buttonContent="Sign Up" signUp={true} />
    </div>
  );
};

export default SignupPage;
