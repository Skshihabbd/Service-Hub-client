/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc"; // Google icon install: npm install react-icons

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialLogin = (sociallogin) => {
    sociallogin()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Welcome Back!",
            text: `Successfully logged in as ${result.user.displayName}`,
            icon: "success",
            confirmButtonColor: "#AE9467",
            timer: 2000,
            showConfirmButton: false,
          });
          navigate(location?.state ? location.state : "/", { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Login Failed",
          text: "Something went wrong with Google Login.",
          icon: "error",
          confirmButtonColor: "#111827",
        });
      });
  };

  return (
    <div className="flex justify-center w-full px-2">
  <a
    href="http://localhost:5020/auth/google" // 🔥 backend route
    className="group w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 py-3.5 rounded-2xl hover:border-[#AE9467] hover:bg-gray-50 transition-all duration-300 shadow-sm active:scale-[0.98]"
  >
    <FcGoogle className="text-2xl group-hover:scale-110 transition-transform" />
    <span className="text-gray-700 font-bold tracking-wide">
      Sign in with Google
    </span>
  </a>
</div>

  );
};

export default SocialLogin;
