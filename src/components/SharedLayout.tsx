import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import React from "react";
import { CircularProgress } from "@mui/material";

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <CircularProgress
              size={70}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#FFAA90",
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
