import AuthForm from "../components/authForm/AuthForm";
import Hero2 from "../components/hero2/Hero2";
const SigninPage = () => {
  return (
    <div>
      <Hero2 title="Sign In" />
      <AuthForm buttonContent="Sign In" />
    </div>
  );
};

export default SigninPage;
