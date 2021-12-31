import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@icons";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return theme === "light" ? (
    <SunIcon
      onClick={() => handleThemeChange()}
      className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400"
    />
  ) : (
    <MoonIcon
      onClick={() => handleThemeChange()}
      className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400"
    />
  );
};

export default ThemeChanger;
