import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import javascriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import pythonLogo from "../assets/python.svg";
import nodejsLogo from "../assets/nodejs.svg";
import gitLogo from "../assets/git.svg";
import mysqlLogo from "../assets/mysql.svg";
import laravelLogo from "../assets/laravel.svg";
import { useEffect } from "react";

import "../App.css";

function SecondSection({ refe, isIntersecting }) {
  useEffect(() => {
    if (isIntersecting) {
      const whoAmISection = refe.current.querySelector(".who-am-i-section");
      const mySkillsSection = refe.current.querySelector(".my-skills-section");
      if (whoAmISection) {
        whoAmISection.classList.add("slide-in-left");
      }
      if (mySkillsSection) {
        mySkillsSection.classList.add("slide-in-right");
      }
    } else {
      const allAnimatedDivs = refe.current.querySelectorAll(
        ".slide-in-left, .slide-in-right"
      );
      allAnimatedDivs.forEach((el) => {
        el.classList.remove("slide-in-left", "slide-in-right");
      });
    }
  }, [isIntersecting]);

  return (
    <div
      className={`w-full py-8 rounded-3xl text-center mb-8 mx-4 sm:mx-8 flex flex-col min-h-screen transition-opacity duration-500 ${
        isIntersecting ? "" : "opacity-0"
      }`}
      ref={refe}
    >
      <h2 className="text-5xl font-bold mb-8 uppercase tracking-widest">
        About Me
      </h2>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex-1 p-6 rounded-3xl who-am-i-section">
          <h3 className="text-3xl font-bold mb-4 text-left">Who am I?</h3>
          <p className="ml-12 text-xl font-medium mb-4 text-left tracking-widest">
            Enthusiastic computer science student with a focus on web
            development and a solid foundation in various programming languages.
            Currently pursuing a Master's degree. Eager to apply my web
            development skills to contribute to innovative projects. In my free
            time, I love exploring new coding frameworks and engaging with the
            developer community.
          </p>
          <div className="ml-12 text-xl font-medium mb-4 text-left tracking-widest">
            <p>
              I hold a Bachelor's degree in Computer Science from Kauno
              Technologijų Universitetas and am currently seeking a Master's
              degree. My academic journey has equipped me with a robust
              understanding of computer science principles and practical
              experience in web development.
            </p>
          </div>
        </div>

        <div className="flex-1 p-6 rounded-lg my-skills-section">
          <h3 className="text-3xl font-bold mb-4">My Skills</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <SkillCard title="HTML" img={htmlLogo} />
            <SkillCard title="CSS" img={cssLogo} />
            <SkillCard title="JavaScript" img={javascriptLogo} />
            <SkillCard title="React" img={reactLogo} />
            <SkillCard title="Node.js" img={nodejsLogo} />
            <SkillCard title="Python" img={pythonLogo} />
            <SkillCard title="Git" img={gitLogo} />
            <SkillCard title="Laravel" img={laravelLogo} />
            <SkillCard title="SQL" img={mysqlLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center px-4 py-16 border-white rounded-lg shadow-lg">
      <img src={img} className="w-12 h-12 mb-2" />
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default SecondSection;
