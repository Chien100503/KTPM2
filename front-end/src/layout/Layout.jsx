import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-auto scroll-smooth">
      <Header />
      <Menu />
      <div className="p-2">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
