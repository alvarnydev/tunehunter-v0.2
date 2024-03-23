import { User, X } from "lucide-react";
import { Button } from "../ui/button";
import ProfileModal from "../modals/ProfileModal";
import { useState } from "react";

const ProfileButton = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <>
      {/* <ProfileModal /> */}
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-primary relative"
        onClick={() => setProfileModalOpen((open) => !open)}
      >
        <X
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[1.6rem] w-[1.6rem] transition-all duration-500 ${profileModalOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
        />
        <User
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[1.6rem] w-[1.6rem] transition-all duration-500 ${profileModalOpen ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`}
        />
      </Button>
    </>
  );
};

export default ProfileButton;