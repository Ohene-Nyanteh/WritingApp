import { list_for_mac, list_for_win } from "@/Pages/HomePage/Components/Header/Functions/DetectFont";
import { createContext, useContext, useState } from "react";
import usePersistedState from "./usePersistedstate";

const FontContext = createContext({});

export function useFont(): any {
  return useContext(FontContext);
}

function FontContextProvider({ children }: any) {
  const [font, setFont] = usePersistedState("font", "Arial");
    let list_of_fonts = [];
    const platform = window.navigator.platform;
    let new_platform_name = platform.split("").slice(0, 3).join("");
    new_platform_name.toLowerCase === "win".toLowerCase
      ? (list_of_fonts = list_for_win)
      : (list_of_fonts = list_for_mac);

  return (
    <FontContext.Provider value={{ font, setFont, list_of_fonts }}>
      {children}
    </FontContext.Provider>
  );
}

export default FontContextProvider;


