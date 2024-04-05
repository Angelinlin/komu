"use client";
import Navbar from "@/components/main/Navbar";
import SignUp from "@/components/main/SignUp";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <SignUp />
      </div>
    </>
  );
}

export default page;
