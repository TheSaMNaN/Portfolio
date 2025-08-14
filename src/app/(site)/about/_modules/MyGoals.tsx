import Link from "next/link";
import { useState, useEffect } from "react";
import addComma from "@/utils/addComma";

const MyGoals = () => {
  // Example static project data — replace with your own API or state
  const [project, setProject] = useState({
    title: "Live Project: Anime-Themed Online Store",
    image: "/images/5900_7_04.jpg", // Change to your image
    current: 45, // progress so far
    target: 100, // total target
  });

  // Simulate loading effect
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // fake loading
    return () => clearTimeout(timer);
  }, []);

  const progressPercent = ((project.current / project.target) * 100).toFixed(2);

  return (
    <div id="current-goal">
      {/* Header */}
      <div className="flex items-center max-w-[617px] w-full text-32 font-medium pb-8">
        <h1>
          <Link href="/about-me#current-goal" scroll>
            <span className="text-accent">#</span>current-goal
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-between">
          <div className="border border-gray px-4 bg-gray bg-opacity-50 font-medium">
            {loading ? "Loading..." : project.title}
          </div>

          {loading ? (
            <div className="mx-auto aspect-square w-full object-cover max-w-[500px] bg-gray bg-opacity-20 my-2 animate-pulse" />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto aspect-square w-full object-cover max-w-[500px] my-2"
            />
          )}

          <div className="flex flex-col">
            <div className="border border-accent h-4 mb-12">
              <div
                style={{ width: loading ? "0%" : `${progressPercent}%` }}
                className="bg-accent bg-opacity-50 h-full"
              ></div>
              <div className="flex items-center justify-between">
                <p>
                  Progress ({loading ? "0.00" : progressPercent}%)
                </p>
                <p>
                  {loading
                    ? "0/0"
                    : `${addComma(project.current)}/${addComma(project.target)}`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Updates or Logs */}
        <div className="flex flex-col space-y-4 h-[500px]">
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="border border-gray px-4 bg-gray bg-opacity-50 font-medium">
              Recent Updates
            </div>
            <ul className="flex flex-col space-y-2 overflow-y-auto h-full mt-2 flex-1 text-sm">
              {loading ? (
                <li className="text-gray">Loading...</li>
              ) : (
                <>
                  <li>• Initial project setup completed</li>
                  <li>• Designed homepage layout</li>
                  <li>• Implemented product listing page</li>
                  <li>• Optimized for mobile devices</li>
                  <li>• Conducted user testing</li>
                  <li>• Fixed bugs and improved performance</li>
                  <li>• Launched beta version</li>
                  <li>• Added new features based on user feedback</li>
                  <li>• Fixed bugs and improved performance</li>
                  <li>• Preparing for next release</li>
                  <li>• Launched Customized Anime-themed "COMING SOON" page</li>
                  <li>• Gathering user feedback</li>
                  <li>• Preparing for next phase</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGoals;
