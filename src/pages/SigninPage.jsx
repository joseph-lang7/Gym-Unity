import AuthForm from "../components/AuthForm";
import Hero2 from "../sections/Hero2";
const SigninPage = () => {
  return (
    <div>
      <Hero2 title="Sign In" />
      <AuthForm buttonContent="Sign In" />
    </div>
  );
};

export default SigninPage;
