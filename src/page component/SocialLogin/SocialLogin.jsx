import { useLocation, useNavigate } from "react-router-dom";
import Custom from "../../sharedcomponent/custom/Custom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc"; // Google icon install: npm install react-icons

const SocialLogin = () => {
  const { googleSignIn } = Custom();
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
    <div className="w-full space-y-6">
      {/* Elegant Divider */}
      <div className="relative flex items-center justify-center w-full mt-6">
        <hr className="w-full border-gray-200" />
        <span className="absolute px-4 bg-white text-gray-400 text-sm font-medium tracking-wider uppercase">
          Or continue with
        </span>
      </div>

      {/* Google Login Button */}
      <div className="flex justify-center w-full px-2">
        <button
          onClick={() => handleSocialLogin(googleSignIn)}
          className="group w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 py-3.5 rounded-2xl hover:border-[#AE9467] hover:bg-gray-50 transition-all duration-300 shadow-sm active:scale-[0.98]"
        >
          <FcGoogle className="text-2xl group-hover:scale-110 transition-transform" />
          <span className="text-gray-700 font-bold tracking-wide">
            Sign in with Google
          </span>
        </button>
      </div>

      {/* Optional: Add more social icons here like Github/Facebook if needed */}
      <p className="text-center text-xs text-gray-400 font-light mt-4">
        By continuing, you agree to our{" "}
        <span className="underline cursor-pointer">Terms of Service</span>.
      </p>
    </div>
  );
};

export default SocialLogin;
