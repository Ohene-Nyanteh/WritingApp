import { useTheme } from "@/Utils/ThemeContext";
import { useState } from "react";
import { string } from "yup";
import DarkLogo from "../../assets/Images/Logo-Dark.png";
import LightLogo from "../../assets/Images/Logo-Light.png";

interface Props{
  theme: string
}

function WelcomeModal({theme}: Props) {
  // Prevent the Page for showing Forever
  const [showModal, setShowModal] = useState(true);

  setTimeout(() => setShowModal(false), 5000);
  return (
    <section
      className={`${
        showModal ? "flex" : "hidden"
      } w-full place-content-center z-[1] h-screen dark:bg-gray-800 bg-gray-50 absolute top-0 left-0`}
    >
      <div className="w-fit h-fit my-auto">
        {theme === "light" ? (
          <img src={LightLogo} width={300} height={300} />
        ) : (
          <img src={DarkLogo} width={300} height={300} />
        )}
      </div>
    </section>
  );
}

export default WelcomeModal;
