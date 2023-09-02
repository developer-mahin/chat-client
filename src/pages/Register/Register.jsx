import { Link } from "react-router-dom";
import AuthSocialButtons from "../../components/AuthSocialButtons/AuthSocialButtons";
import { Button } from "@mui/material";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import user from "../../assets/images/user.png";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { singUpUser } from "../../redux/authSlice/authSlice";

const Register = () => {
  const [imageData, setImageData] = useState(null);
  const [addImage, setAddImage] = useState(null);

  const convertImage = (e) => {
    const image = e.target.files[0];
    setAddImage(image);
    if (image) {
      const render = new FileReader();
      render.onload = (e) => {
        setImageData(e.target.result);
      };
      render.readAsDataURL(image);
    }
  };
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  console.log(isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const image = addImage;
    const name = data.name;
    const email = data.email;
    const password = data.password;

    let formData = new FormData();
    formData.append("image", image);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    // dispatch function
    dispatch(singUpUser(formData));
  };

  const socialAction = () => {};

  return (
    <div className="px-4 lg:py-0 py-20">
      <div className="lg:bg-[#00000017] bg-[#0000006c] lg:px-10 px-5 lg:py-14 py-7 shadow-md rounded-lg md:w-[600px] mx-auto w-full">
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
            type="text"
            name="name"
            label="Enter Name"
            register={register}
            errors={errors}
          />
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
          <div className="flex items-center gap-4">
            <div className="w-[80px] h-[80px]">
              <img
                src={imageData ? imageData : user}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>
            <div className="flex-1">
              <input
                type="file"
                id="image"
                accept="image/*"
                name="image"
                required
                onChange={convertImage}
                className="w-full p-3 text-white font-medium border-2 rounded-md"
              />
            </div>
          </div>

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
              {isLoading ? "Loading..." : "Register"}
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
          <p>Already have an account?</p>
          <div className="hover:underline cursor-pointer">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
