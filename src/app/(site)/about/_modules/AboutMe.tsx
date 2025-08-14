import { Img } from "@/components/elements";
import BoxAccent from "@/components/modules/BoxAccent";
import { swivelVariants, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutMe = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative"
    >
      <motion.div
        variants={zoomIn(0.2, 0.6)}
        className="absolute bottom-[12rem] left-[-17rem]"
      >
        <BoxAccent className="aspect-square w-[155px]" />
      </motion.div>

      <div className="flex items-center max-w-[516px] w-full text-32 font-medium">
        <h1>
          <Link href="/about" title="About" scroll>
            <span className="text-accent">/</span>about
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>

      <div className="scroll-mt-[6rem] flex flex-col-reverse gap-8 lg:flex-row items-center justify-between">
        <motion.div
          variants={swivelVariants}
          className="flex items-start flex-col space-y-4 lg:max-w-[515px] text-gray"
        >
          <p>Hello, I&apos;m Samnan Abdul Jaleel,</p>
          <p>
            A full-stack developer from India with a passion for building sleek,
            responsive, and high-performing websites and applications from the ground up. 
            I transform ideas into modern, intuitive digital experiences that engage users
            and strengthen brand presence.
          </p>
          <p>
            With a proven track record of helping clients establish a strong online identity,
            I stay ahead of industry trends and continually explore new technologies and frameworks
            to ensure every project is impactful, scalable, and future-ready.
          </p>
        </motion.div>

        <div>
          <div className="relative hidden lg:block">
            <Img
              src="/images/about-me-1.png"
              alt="hacker"
              width="339"
              height="507"
              className="p-12 pb-0 lg:p-0"
            />

            <Img
              src="/images/accent-grid-1.png"
              alt="hacker"
              width="84"
              height="84"
              className="absolute top-8 left-0"
            />

            <Img
              src="/images/accent-grid-2.png"
              alt="hacker"
              width="104"
              height="56"
              className="absolute top-1/2 -translate-y-1/2 right-0"
            />

            <Img
              src="/images/accent-grid-3.png"
              alt="hacker"
              width="80"
              height="103"
              className="absolute top-1/2 bottom-[5rem] right-[-9rem]"
            />
          </div>

          <div className="w-full h-[1px] bg-accent max-w-[271px] mx-auto"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
