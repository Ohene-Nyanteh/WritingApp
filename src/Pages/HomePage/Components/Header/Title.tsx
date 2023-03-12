import { useTheme } from "@/Utils/ThemeContext";
import LightLogo from "../../../../assets/Images/logo-min.png"
import DarkLogo from "../../../../assets/Images/logo-min-dark.png"
import menu from "./Functions/Menu";
import { FaMoon, FaSun } from 'react-icons/fa'
import App from '../../../../App.json'

function TitleBar() {
    const project_name = App.Projects[0].name
    const {theme, toggleTheme} = useTheme()
    return (
      <section className="w-full border-b-[1px] items-center dark:border-b-gray-700 border-gray-300 dark:text-gray-50 flex gap-2 bg-gray-50 dark:bg-gray-800 py-1 px-1">
        <div className="rounded-md p-0 s-auto">
          {theme === "light" ? (
            <img
              src={LightLogo}
              width={20}
              height={20}
              className="rounded-md max-w-none max-h-none"
            />
          ) : (
            <img
              src={DarkLogo}
              width={20}
              height={20}
              className="rounded-md max-w-none max-h-none"
            />
          )}
        </div>
        <div className="flex gap-2">
          {menu.map((menuList, key) => {
            return (
              <small
                onClick={menuList.func}
                className="rounded-lg cursor-pointer px-4 dark:hover:bg-gray-700 hover:bg-gray-100"
                key={key}
              >
                {menuList.name}
              </small>
            );
          })}
        </div>
        <p className="w-full flex flex-grow justify-center">{project_name}</p>
        <div className="ml-32">
          {theme === "light" ? (
            <FaMoon onClick={toggleTheme} size={20} />
          ) : (
            <FaSun size={20} onClick={toggleTheme} />
          )}
        </div>
      </section>
    );
}

export default TitleBar;