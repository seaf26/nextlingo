import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
    AOS.refresh();
  }, []);
};