"use client";
import Navbar from "@/components/main/Navbar";
import SignInSect from "@/components/main/SignIn";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <SignInSect />
      </div>
    </>
  );
}

export default page;
