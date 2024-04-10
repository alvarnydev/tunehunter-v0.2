import { ThemeToggle } from "../interactive/ThemeToggle";
import ProfileButton from "../interactive/ProfileButton";
import dynamic from "next/dynamic";
const LanguagePicker = dynamic(() => import("@/components/interactive/LanguagePicker"), {
  ssr: false,
});

const Footer = () => {
  return (
    <div className="flex h-20 w-full items-center bg-muted">
      <div className="flex flex-1 justify-center">
        <ThemeToggle />
      </div>
      <div className="flex flex-1 justify-center">
        <ProfileButton />
      </div>
      <div className="flex flex-1 justify-center">
        <LanguagePicker />
      </div>
    </div>
  );
};

export default Footer;
