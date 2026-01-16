/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Custom from "../../sharedcomponent/custom/Custom";
import SocialLogin from "../../page component/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const { SignIn } = Custom();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    SignIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Welcome Back",
          icon: "success",
          confirmButtonColor: "#AE9467",
          timer: 1500,
          showConfirmButton: false,
        });
        reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => toast.error("Invalid credentials"));
  };

  return (
    <div className="h-screen w-full bg-[#FAF9F6] flex items-center justify-center p-4 overflow-hidden">
      <Helmet>
        <title>Hub || Login</title>
      </Helmet>

      <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Compact Header */}
        <div className="bg-gray-900 py-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-[#AE9467] italic tracking-tight">
            Sign In
          </h2>
          <p className="text-gray-400 text-xs mt-1 font-light">
            Access your professional dashboard
          </p>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-50 border border-gray-200 py-3 pl-11 pr-4 rounded-xl focus:border-[#AE9467] outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-gray-50 border border-gray-200 py-3 pl-11 pr-11 rounded-xl focus:border-[#AE9467] outline-none transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash size={14} />
                  ) : (
                    <FaEye size={14} />
                  )}
                </button>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-gray-900 text-[#AE9467] font-bold py-3.5 rounded-xl hover:bg-[#AE9467] hover:text-white transition-all shadow-md uppercase tracking-widest text-xs active:scale-95">
              Login Now
            </button>
          </form>

          {/* Social Login with reduced margin */}
          <div className="mt-4">
            <SocialLogin />
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              New here?
              <Link
                to="/signup"
                className="text-[#AE9467] font-bold ml-1.5 hover:underline uppercase tracking-tighter"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default SignIn;
