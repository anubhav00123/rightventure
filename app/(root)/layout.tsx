"use client";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "//in.fw-cdn.com/31914510/1001156.js";
  //   script.async = true;
  //   script.setAttribute("chat", "true");
  //   document.body.appendChild(script);
  // }, []);

  // useEffect(() => {

  // }, [])

  return (
    <main className="root bg-zinc-950">
      <Header />
      {children}
      {/* <TawkTo /> */}
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default Layout;
