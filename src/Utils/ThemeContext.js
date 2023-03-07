import { createContext, useContext } from "react";
import usePersistedState from "./usePersistedstate";


const ThemeContext = createContext([]);

export function useTheme(){
  return useContext(ThemeContext)
}

function ThemeContextProvider({children}){
    const [theme, setTheme] = usePersistedState("theme", "light");

   const toggleTheme = () => {
     setTheme(theme === "light" ? "dark" : "light");
   };
     return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
     )
 }

 export default ThemeContextProvider;