import React, { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/FourthSection";

function useTypewriter(
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const handleTyping = () => {
      setText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return text;
}

function App() {
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });
  const [showHeader, setShowHeader] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersectingProject1, setIsIntersectingProject1] = useState(false);
  const [isIntersectingProject2, setIsIntersectingProject2] = useState(false);

  const ref = useRef(null);
  const refProject1 = useRef(null);
  const refProject2 = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { top, left, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setLightPosition({ x, y });
  };

  const handleScroll = () => {
    const mainContentHeight =
      document.getElementById("main-content").clientHeight;
    const scrollPosition = window.scrollY;
    setShowHeader(scrollPosition >= mainContentHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const typedText = useTypewriter(
    [
      "Front-End developer?",
      "Back-End developer?",
      "Full-Stack developer?",
      "Programmer?",
      "Web Developer?",
      "Developer?",
    ],
    100,
    50,
    1500
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === ref.current) {
          setIsIntersecting(entry.isIntersecting);
        } else if (entry.target === refProject1.current) {
          setIsIntersectingProject1(entry.isIntersecting);
        } else if (entry.target === refProject2.current) {
          setIsIntersectingProject2(entry.isIntersecting);
        }
      },
      {
        rootMargin: "-100px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    if (refProject1.current) {
      observer.observe(refProject1.current);
    }
    if (refProject2.current) {
      observer.observe(refProject2.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (refProject1.current) {
        observer.unobserve(refProject1.current);
      }
      if (refProject2.current) {
        observer.unobserve(refProject2.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between text-white transition-all duration-300 ease-linear overflow-x-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, rgba(79,23,135,0.8) 0%, rgba(31,41,55,1) 55%), rgb(31, 41, 55)`,
      }}
    >
      {/* Header Section */}
      <Header isFixed={true} showHeader={showHeader} />
      <Header isFixed={false} />

      {/* Main Content Section */}
      <FirstSection typedText={typedText} />

      {/* About Me Section */}
      <SecondSection refe={ref} isIntersecting={isIntersecting} />

      {/* Project section */}
      <ThirdSection
        refProject1={refProject1}
        isIntersectingProject1={isIntersectingProject1}
      />

      <FourthSection
        refProject2={refProject2}
        isIntersectingProject2={isIntersectingProject2}
      />
    </div>
  );
}

export default App;
