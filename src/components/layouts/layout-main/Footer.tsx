import Icon from "@/components/elements/Icon";

export const SOCIALS = [
  {
    name: "Github",
    linkTo: "https://github.com/SamnanAbdulJaleel",
    icon: "/icons/github.svg",
  },
  {
    name: "Linkedin",
    linkTo: "https://www.linkedin.com/in/samnan-jaleel/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Discord",
    linkTo: "https://discord.com/users/908632341637898281",
    icon: "/icons/discord.svg",
  },
];
const Footer = () => {
  return (
    <footer className="py-8 border-t-[0.5px] border-gray flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        {SOCIALS.map((x, i) => (
          <a key={i} href={x.linkTo} target="_blank" rel="noopener noreferrer">
            <Icon
              src={x.icon}
              alt={x.name}
              width="24"
              height="24"
              className="hover:scale-110 transition-all ease-out"
            />
          </a>
        ))}
      </div>
      <p className="text-gray text-center text-sm">
          Samnan Abdul Jaleel
      </p>
    </footer>
  );
};

export default Footer;
