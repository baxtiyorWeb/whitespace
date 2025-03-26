"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";
import Main from "./(pages)/Home";


export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      window.location.href = "/auth"
    }
  }, [])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
