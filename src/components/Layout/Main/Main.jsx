/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Home/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import LeftNav from "../Page/LeftNav/LeftNav";
import RightNav from "../Page/RightNav/RightNav";
import Home from "../Home/Home";

const Main = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense">
      <div className="bg-cyan-100 min-h-[50px] col-span-3 ">
        <Home></Home>
      </div>
      <div className="bg-green-500 min-h-[50px] col-span-3">
        <Header></Header>
      </div>
      <div className="bg-cyan-400 min-h-[50px]">
        <LeftNav></LeftNav>
      </div>
      <div className="bg-yellow-400 min-h-[50px]">
        <Outlet></Outlet>
      </div>
      <div className="bg-cyan-400 min-h-[50px]">
        <RightNav></RightNav>
      </div>
      <div className="bg-red-400 min-h-[50px] col-span-3">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
