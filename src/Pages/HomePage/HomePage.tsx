import { useTheme } from "@/Utils/ThemeContext";
import WelcomeModal from "../Components/WelcomeModalScreen";
import Header from "./Components/Header/Header";

function HomePage() {
    const {theme, toggleTheme} = useTheme()
    return (
      <div className={`${theme} h-screen w-full p-0 m-0`}>
        <WelcomeModal theme={theme} />
        <section className=" flex flex-col">
          <Header/>
        </section>
      </div>
    );
}

export default HomePage;