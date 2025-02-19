"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
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