import tripixPhoto from "../assets/Tripix.jpg";
import "../App.css";
import { useEffect } from "react";

function ThirdSection({ refProject1, isIntersectingProject1 }) {
  useEffect(() => {
    if (isIntersectingProject1) {
      refProject1.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      refProject1.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersectingProject1]);
  return (
    <div
      className={`w-full py-8 rounded-3xl text-center mb-2 mx-4 sm:mx-8 ${
        isIntersectingProject1 ? "" : "opacity-0"
      }`}
      ref={refProject1}
    >
      <h2 className="text-5xl font-bold mb-8 uppercase tracking-widest">
        Projects
      </h2>
      <div className="flex flex-col p-10 sm:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex-1 border-4 border-slate-800 shadow-2xl">
            <img src={tripixPhoto} className="" alt="Tripix Project"></img>
          </div>
        </div>
        <div className="flex-1 p-6">
          <h3 className="text-3xl font-bold mb-4 text-left tracking-widest">
            Tripix
          </h3>
          <p className="ml-12 text-xl font-medium mb-4 text-left tracking-widest">
            Developed a comprehensive travel diary system for documenting and
            sharing personal travel experiences, allowing users to add trips,
            document travel steps, share journeys with others, and view travel
            statistics for personal and shared trips. The system is optimized
            for both desktop and mobile devices.
          </p>
          {/* Technologies Used Section */}
          <div className="mt-8">
            <h4 className="text-2xl font-bold mb-4 text-left tracking-widest">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-4 ml-12 text-xl font-medium text-left tracking-widest">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></span>
                <span>React</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50 "></span>
                <span>Laravel</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50 "></span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></span>
                <span>Mapbox API</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 "></span>
                <span>Leaflet</span>
              </div>
            </div>
          </div>
          <button className="flex font-bold bg-violet-600 p-2  mt-12 px-10 rounded-full hover:bg-violet-800 ">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
