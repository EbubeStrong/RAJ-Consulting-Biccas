"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export const AOSInit = () => {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-quad',
      duration: 1000,
      once: true, 
    });
  }, []);

  return null;
};