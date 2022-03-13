import { useTheme } from 'next-themes'
import Tooltip from '@components/Tooltip'
import { SunIcon, MoonIcon } from '@icons'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  const svgClassnames = `block text-center cursor-pointer w-5 h-5 text-gray-600 transition-colors duration-200 hover:text-gray-400`

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Tooltip text="Switch theme">
      <button
        onClick={() => handleThemeChange()}
        aria-label="Theme Switcher"
        className="flex items-center"
      >
        {theme === 'light' ? (
          <SunIcon className={svgClassnames} />
        ) : (
          <MoonIcon className={svgClassnames} />
        )}
      </button>
    </Tooltip>
  )
}

export default ThemeChanger
