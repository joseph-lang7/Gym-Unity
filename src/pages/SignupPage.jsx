import Hero2 from "../components/hero2/Hero2";
import AuthForm from "../components/authForm/AuthForm";
const SignupPage = () => {
  return (
    <div>
      <Hero2 title="Sign Up" />
      <AuthForm buttonContent="Sign Up" signUp={true} />
    </div>
  );
};

export default SignupPage;
