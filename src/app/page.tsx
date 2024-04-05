'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
        offset: 100,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <>
    <Hero />
    <Plan />
    <Rooms />
    <ImageSlider />
    </>
  );
}
