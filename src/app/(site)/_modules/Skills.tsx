"use client";
import Link from "next/link";
import TagSphere from "./CubeWithTexts";

const Skills = () => {
  return (
    <section id="skills" className=" scroll-mt-[6rem]">
      <div className="flex items-center max-w-[391px] w-full text-32 font-medium pb-8">
        <h1>
          <Link href="/#skills" scroll>
            <span className="text-accent">#</span>skills
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center">
        <TagSphere className="lg:col-start-2   aspect-square z-10 hidden md:block" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start self-start flex-1 w-full">
          <div className="border border-gray">
            <div className="border-b border-gray px-2">Language</div>
            <div className="px-2 text-gray">
              <p>JavaScript TypeScript Python Django Java</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="border border-gray">
              <div className="border-b border-gray px-2">Front-End</div>
              <div className="px-2 text-gray">
                <p>
                  React.js Next.js{" "}
                </p>
              </div>
            </div>

            <div className="border border-gray">
              <div className="border-b border-gray px-2">Back-End</div>
              <div className="px-2 text-gray">
                <p>Node.js</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="border border-gray">
              <div className="border-b border-gray px-2">Databases</div>
              <div className="px-2 text-gray">
                <p>MySQL MongoDB</p>
              </div>
            </div>

            <div className="border border-gray">
              <div className="border-b border-gray px-2">Tools</div>
              <div className="px-2 text-gray">
                <p>Git Figma VSCode Wordpress</p>
              </div>
            </div>

            <div className="border border-gray">
              <div className="border-b border-gray px-2">Others</div>
              <div className="px-2 text-gray">
                <p>HTML CSS Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
