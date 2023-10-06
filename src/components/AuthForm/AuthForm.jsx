import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useCallback, useState } from "react";
import AuthSocialButtons from "../AuthSocialButtons/AuthSocialButtons";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Button } from "@mui/material";
import user from "../../assets/images/user.png";
import axios from "axios";

const AuthForm = ({ variant, setVariant }) => {
  const [imageData, setImageData] = useState(null);

  const convertImage = (e) => {
    const image = e.target.files[0];
    if (image) {
      const render = new FileReader();
      render.onload = (e) => {
        setImageData(e.target.result);
      };
      render.readAsDataURL(image);
    }
  };

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant, setVariant]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const image = imageData;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const formData = {
      name,
      email,
      password,
      image,
    };
    console.log(formData);
    if (variant === "REGISTER") {
      // axios
      //   .post("api/v1/auth/sign_up", data)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err.message);
      //   });
      console.log("hello register");
      reset();
    } else {
      console.log("hello login");
      reset();
    }
  };

  const socialAction = (action) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="md:mt-10 mt-5">
        {variant === "REGISTER" && (
          <>
            <Input
              type="text"
              name="name"
              label="Enter Name"
              register={register}
              errors={errors}
            />
          </>
        )}
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
        {variant === "REGISTER" && (
          <>
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
                  className="w-full p-3 text-[var(--text-color)] font-medium border-2 rounded-md"
                />
              </div>
            </div>
          </>
        )}

        <div className="flex items-center justify-center mt-6">
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-gradient-to-r from-[#6976EF] to-[#35D4B9] rounded-md duration-200 transition-all text-[var(--text-color)]"
            sx={{
              py: "12px",
              fontSize: "18px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            {variant === "LOGIN" ? "Sign in" : "Register"}
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

      <div className="flex items-center justify-center gap-2 text-[var(--text-color)]  mt-4">
        {variant === "LOGIN" ? "New to here?" : "Already have an account?"}
        <div onClick={toggleVariant} className="hover:underline cursor-pointer">
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
