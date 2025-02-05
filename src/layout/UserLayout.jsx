import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSec from "../components/MainSec";

function UserLayout() {
  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Main Section */}

      <MainSec/>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default UserLayout;
