"use client";

import { CustomButton } from "@/components";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with effortless booking process
        </p>
        <CustomButton
          title="Explore Cars"
          btnType="button"
          className="mt-10 text-white rounded-full bg-primary-blue"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
