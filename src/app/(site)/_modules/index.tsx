"use client";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Landing from "./Landing";
import Projects from "./Projects";
import Skills from "./Skills";
import MyGoals from "../about/_modules/MyGoals";
import FunFacts from "../about/_modules/FunFacts";

const Content = () => {
  return (
    <div className="overflow-x-clip">
      <div className="container">
        <Landing />
        <div className="flex flex-col space-y-24">
          <Projects />
          <Skills />
          <AboutMe />

          {/* Current Goal section */}
          <section id="current-goal">
            <MyGoals />
          </section>

          {/* Fun Facts section */}
          <section id="fun-facts">
            <FunFacts />
          </section>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Content;
