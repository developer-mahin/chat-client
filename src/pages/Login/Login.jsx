import AuthSocialButtons from "../../components/AuthSocialButtons/AuthSocialButtons";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Input from "../../components/Input/Input";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/authSlice/authSlice";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { isLoading, authenticate } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(signInUser(data));
  };
  const socialAction = () => {};

  useEffect(() => {
    if (authenticate && token) {
      navigate("/");
    }
  }, [authenticate, navigate, token]);

  return (
    <div className="h-[100vh] flex items-center justify-center px-4 lg:py-0 py-20 ">
      <div className="lg:bg-[#00000017] bg-[#0000006c] lg:px-10 px-5 lg:py-14 py-7 shadow-md rounded-lg md:w-[600px] w-full">
        <div>
          <div className="flex items-center justify-center ]">
            <img src={logo} className="w-[120px]" alt="" />
          </div>
          <h2 className="text-gray-100 text-center font-bold md:text-4xl text-2xl mt-4">
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="md:mt-10 mt-5">
          <Input
            type="email"
            name="email"
            label="Enter Email Address"
            register={register}
            errors={errors}
          />

          <Input
            type="password"
            name="password"
            label="Enter password"
            register={register}
            errors={errors}
          />

          <div className="flex items-center justify-center mt-6">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="bg-gradient-to-r from-[#6976EF] to-[#35D4B9] rounded-md duration-200 transition-all text-white"
              sx={{
                py: "12px",
                fontSize: "18px",
                textTransform: "capitalize",
                fontWeight: "600",
              }}
            >
              {isLoading ? "Lading..." : "Login"}
            </Button>
          </div>
        </form>

        <div className=" flex items-center justify-center gap-5 mt-6">
          <hr className="border-b-2 border-gray-100 lg:w-[33%] w-[30%]" />
          <p className="text-gray-100">Or continue with</p>
          <hr className="border-b-2 border-gray-100 lg:w-[33%] w-[30%]" />
        </div>

        <div className="flex items-center justify-between gap-6 md:mt-6 mt-4">
          <AuthSocialButtons
            Icon={BsGithub}
            onClick={() => socialAction("github")}
          />
          <AuthSocialButtons
            Icon={BsGoogle}
            onClick={() => socialAction("google")}
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-[#fff]  mt-4">
          <p>New to here?</p>
          <div className="hover:underline cursor-pointer">
            <Link to="/register">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
