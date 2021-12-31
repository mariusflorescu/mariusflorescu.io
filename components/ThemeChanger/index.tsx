import { useTheme } from "next-themes";
import Tooltip from "@components/Tooltip";
import { SunIcon, MoonIcon } from "@icons";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Tooltip text="Switch theme">
      {theme === "light" ? (
        <button onClick={() => handleThemeChange()}>
          <SunIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
        </button>
      ) : (
        <button onClick={() => handleThemeChange()}>
          <MoonIcon className="cursor-pointer w-5 h-5 text-neutral-600 transition-colors duration-200 hover:text-neutral-400" />
        </button>
      )}
    </Tooltip>
  );
};

export default ThemeChanger;
