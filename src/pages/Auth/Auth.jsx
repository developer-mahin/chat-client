import { useState } from "react";
import logo from "../../assets/images/logo.png"
import AuthForm from "../../components/AuthForm/AuthForm";

const Auth = () => {
  const [variant, setVariant] = useState("LOGIN");
  return (
    <div
      className={`h-[100vh] flex items-center justify-center px-4 lg:py-0 py-20 `}
    >
      <div className="lg:bg-[#00000017] bg-[#0000006c] lg:px-10 px-5 lg:py-14 py-7 shadow-md rounded-lg md:w-[600px] w-full">
        <div>
          <div className="flex items-center justify-center ]">
            <img src={logo} className="w-[120px]" alt="" />
          </div>
          <h2 className="text-gray-100 text-center font-bold md:text-4xl text-2xl mt-4">
            Sign in to your account
          </h2>
        </div>

        <div>
          <AuthForm variant={variant} setVariant={setVariant} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
