import React, { useEffect, useState } from "react";
import downArrow from "../assets/downArrow.svg";

const FirstSection = ({ typedText }) => {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsArrowVisible(false);
      } else {
        setIsArrowVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="main-content"
      className="flex flex-col items-center justify-center min-h-screen relative"
    >
      <p className="text-xl mr-auto">Hello 🖐, I'm</p>
      <h1 className="text-5xl font-bold mb-3 sm:text-7xl">Matas Grikštas</h1>
      <p className="text-md mr-auto font-bold text-violet-400 tracking-wider uppercase sm:text-xl">
        Student + <span className="text-white">{typedText}</span>
      </p>
      <button className="mr-auto font-bold tracking-wider bg-violet-600 p-3 mt-5 px-10 rounded-full hover:bg-violet-800">
        Contact me
      </button>

      {/* Scroll Down Arrow */}
      {isArrowVisible && (
        <div className="absolute bottom-10 flex flex-col items-center">
          <img
            src={downArrow}
            className="animate-bounce w-8"
            alt="Scroll Down Arrow"
          />
        </div>
      )}
    </div>
  );
};

export default FirstSection;
