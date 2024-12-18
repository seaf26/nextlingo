"use client";

import React from "react";
import { useAOS } from "../hooks/aos";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  useAOS(); // Use the custom hook

  return <>{children}</>;
};

export default ClientWrapper;