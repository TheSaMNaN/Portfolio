import { Img } from "@/components/elements";
import { motion } from "framer-motion";

const LandingPageLoader = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ minHeight: "100svh" }}
    >
      <Img
        src="/icons/samnanjaleel.svg"
        alt="Samnan Abdul Jaleel"
        height="80"
        width="80"
        className="object-contain"
      />
      <div className="text-center pt-4 pb-24">
        <h1 className=" font-semibold">Samnan Abdul Jaleel</h1>
        <p className="text-xs text-gray">Full-Stack Developer</p>
      </div>
    </motion.div>
  );
};

export default LandingPageLoader;
