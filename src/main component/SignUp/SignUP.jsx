/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { FaCloudUploadAlt, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Custom from "../../sharedcomponent/custom/Custom";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   setIsUploading(true);
  //   try {
  //     // 1. Image Upload to ImgBB
  //     const imageFile = data.photo[0];
  //     const formData = new FormData();
  //     formData.append("image", imageFile);

  //     const imgRes = await axios.post(
  //       `https://api.imgbb.com/1/upload?key=9c8539154be0bafb013ab02d1bbf342b`,
  //       formData
  //     );

  //     const imageUrl = imgRes.data.data.display_url;

  //     // 2. Firebase SignUp
  //     const result = await SignUp(data.email, data.password);

  //     // 3. Update Profile (Name & Hosted Image)
  //     await updateUser(data.UserName, imageUrl);

  //     Swal.fire({
  //       title: "Welcome aboard!",
  //       text: "Account created successfully.",
  //       icon: "success",
  //       confirmButtonColor: "#AE9467",
  //     });

  //     reset();
  //     navigate(location?.state ? location.state : "/");
  //   } catch (err) {
  //     Swal.fire("Error", err.message, "error");
  //   } finally {
  //     setIsUploading(false);
  //   }
  // };






const onSubmit = async (data) => {
  setIsUploading(true);
  try {
    // 1️⃣ Upload image to ImgBB
    const imageFile = data.photo[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const imgRes = await axios.post(
      `https://api.imgbb.com/1/upload?key=9c8539154be0bafb013ab02d1bbf342b`,
      formData
    );

    const imageUrl = imgRes.data.data.display_url;

    // 2️⃣ Prepare payload
    const payload = {
      name: data.UserName,
      email: data.email,
      password: data.password,
      photo: imageUrl,
    };

    // 3️⃣ Call backend register API
    const res = await axios.post("http://localhost:5020/register", payload);

    Swal.fire({
      title: "Success",
      text: res.data.message,
      icon: "success",
      confirmButtonColor: "#AE9467",
    });

    reset();
    navigate("/signin"); // redirect after signup
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: "Error",
      text: err.response?.data?.message || err.message,
      icon: "error",
      confirmButtonColor: "#AE9467",
    });
  } finally {
    setIsUploading(false);
  }
};





  return (
    <div className="h-screen w-full bg-[#FAF9F6] flex items-center justify-center p-4 overflow-hidden">
      <Helmet>
        <title>Hub || Create Account</title>
      </Helmet>

      <div className="w-full max-w-[450px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        {/* Compact Header */}
        <div className="bg-gray-900 py-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-[#AE9467] italic uppercase tracking-tighter">
            Register
          </h2>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-1">
            Join our professional community
          </p>
        </div>

        <div className="p-6 md:p-8 flex-grow overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input
                {...register("UserName", { required: true })}
                className="w-full bg-gray-50 border border-gray-100 py-2.5 pl-11 pr-4 rounded-xl focus:border-[#AE9467] outline-none text-sm transition-all"
                placeholder="Full Name"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input
                {...register("email", { required: true })}
                className="w-full bg-gray-50 border border-gray-100 py-2.5 pl-11 pr-4 rounded-xl focus:border-[#AE9467] outline-none text-sm transition-all"
                placeholder="Email Address"
              />
            </div>

            {/* Photo Upload Styling */}
            <div className="group relative border-2 border-dashed border-gray-200 rounded-xl py-3 flex flex-col items-center justify-center hover:border-[#AE9467] transition-all cursor-pointer">
              <FaCloudUploadAlt className="text-[#AE9467] text-xl group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">
                Upload Profile Photo
              </span>
              <input
                {...register("photo", { required: true })}
                type="file"
                accept=".jpg,.png"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input
                {...register("password", { required: true, minLength: 8 })}
                type={showPassword ? "text" : "password"}
                className="w-full bg-gray-50 border border-gray-100 py-2.5 pl-11 pr-11 rounded-xl focus:border-[#AE9467] outline-none text-sm transition-all"
                placeholder="Secure Password (8+ characters)"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <IoEye size={16} /> : <IoEyeOff size={16} />}
              </button>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 px-1">
              <input
                {...register("check", { required: true })}
                type="checkbox"
                className="accent-[#AE9467] w-3 h-3"
              />
              <label className="text-[11px] text-gray-500">
                I agree to the Terms & Conditions
              </label>
            </div>

            {/* Submit Button */}
            <button
              disabled={isUploading}
              className={`w-full ${
                isUploading ? "bg-gray-400" : "bg-gray-900"
              } text-[#AE9467] font-bold py-3 rounded-xl hover:bg-[#AE9467] hover:text-white transition-all shadow-lg uppercase tracking-widest text-xs active:scale-95`}
            >
              {isUploading ? "Processing..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              Already a member?
              <Link
                to="/signin"
                className="text-[#AE9467] font-bold ml-1.5 hover:underline tracking-tighter uppercase"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
