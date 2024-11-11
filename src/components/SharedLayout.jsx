import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import TopScrollButton from "./Shared/TopScrollButton";
import Footer from "./Footer/Footer";
import Loader from "./Shared/Loader";

const SharedLayout = () => {
  return (
    <div className="text-white flex flex-col min-h-screen">
      <NavMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <TopScrollButton />
      <Footer />
    </div>
  );
};

export default SharedLayout;
