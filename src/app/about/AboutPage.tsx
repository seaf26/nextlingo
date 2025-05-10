"use client";
import React from "react";
import { TimelineDemo } from "@/app/components/TimelineDemo";
import { GoogleGeminiEffectDemo } from "../components/GoogleGeminiEffectDemo";



const AboutPage = () => {
  return (
    <>
      <GoogleGeminiEffectDemo />
      <TimelineDemo />
    </>
  );
};

export default AboutPage;