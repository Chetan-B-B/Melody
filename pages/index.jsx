import React from "react";
import AsideNavBar from "../components/asideNavBar/AsideNavBar";
import Main from "../components/Main/Main";
import TopNavBar from "../components/TopNavBar/TopNavBar";
// #1DB954--green
//##191414-->black
const index = () => {
  return (
    <div className="grid grid-cols-custom ">
      <AsideNavBar />
      <TopNavBar />
      <Main />
    </div>
  );
};

export default index;
