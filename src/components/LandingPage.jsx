"use client";
import React from "react";
import Testimonial from "./Testimonial";
import FeatureSection from "./FetureSection";
import WorkManagerActionSection from "./ActionSection";

const LandingPage = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 md:h-96"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1513818433747-5f175a60caee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex items-center h-full relative z-10">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover amazing content and services tailored just for you.
            </p>
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div>
        <FeatureSection />
        {/* <WorkManagerActionSection/> */}
      </div>

      <div>
        <Testimonial />
      </div>
    </>
  );
};

export default LandingPage;
