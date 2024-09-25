import { useEffect } from "react";
import gamePhoto from "../assets/game.jpg";
import "../App.css";

function FourthSection({ refProject2, isIntersectingProject2 }) {
  useEffect(() => {
    if (isIntersectingProject2) {
      refProject2.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("right-slide-in");
      });
    } else {
      refProject2.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("right-slide-in");
      });
    }
  }, [isIntersectingProject2]);

  return (
    <div
      className={`w-full rounded-3xl text-center mb-8 mx-4 sm:mx-8 ${
        isIntersectingProject2 ? "" : "opacity-0"
      }`}
      ref={refProject2}
    >
      <div className="flex flex-col p-10 sm:flex-row gap-8">
        {/* Left Side (Project Details) */}
        <div className="flex-1 p-6">
          <h3 className="text-3xl font-bold mb-4 text-left tracking-widest">
            Pizza Ninja Game
          </h3>
          <p className="ml-12 text-xl font-medium mb-4 text-left tracking-widest">
            Pizza Ninja is a web game created for a company, designed to provide
            an engaging and entertaining experience for their audience. Inspired
            by the popular Fruit Ninja, players must slice through pizzas and
            chicken boxes flying across the screen. The game features a global
            leaderboard that resets weekly, offering prizes to the top players.
            Optimized for both desktop and mobile devices, Pizza Ninja will be
            used in the company's page in the future.
          </p>
          {/* Technologies Used Section */}
          <div className="mt-8">
            <h4 className="text-2xl font-bold mb-4 text-left tracking-widest">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-4 ml-12 text-lg font-medium text-left tracking-widest">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></span>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
          <button
            className="flex font-bold bg-violet-600 p-2 mt-12 px-10 rounded-full hover:bg-violet-800"
            onClick={() => window.open("https://game.picagroup.lt", "_blank")}
          >
            Live Demo
          </button>
        </div>

        {/* Right Side (Project Image) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="border-4 border-slate-800 shadow-2xl">
            <img src={gamePhoto} className="block" alt="Game Project"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
