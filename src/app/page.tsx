import Image from "next/image";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <>
    <Hero />
    <Plan />
    <Rooms />
    <ImageSlider />
    </>
  );
}
