"use-client";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
