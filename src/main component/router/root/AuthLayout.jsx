import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Laoding from "../../../page component/loading/Laoding";

const AuthLayout = () => {
  return (
    <div>
      <Suspense fallback={<Laoding/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
