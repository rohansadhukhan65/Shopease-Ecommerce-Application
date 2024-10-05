'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import imgOne from "@/assets/img/banner-one.jpg";
import imgTwo from "@/assets/img/banner-two.jpg";
import imgThree from "@/assets/img/banner-three.jpg";
import './HomeBanner.css';

const HomeBanner = () => {
  const imageArray = [imgOne, imgTwo, imgThree];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000); // Change image every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
 
  return (
    <div className="slider-container">
 

      {imageArray.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <Image
            src={image}
            className="h-[550px]"
            height={550}
            width={2000}
            alt="Banner One"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
