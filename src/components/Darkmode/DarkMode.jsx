import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { useCountry } from "../../contexts/CountryContext";

function DarkMode() {
  const { darkMode, setDarkMode } = useCountry();
  return (
    <div
      className="flex items-center gap-3"
      onClick={() => setDarkMode((darkMode) => !darkMode)}
    >
      {darkMode ? (
        <IoMoonOutline className="w-[20px] h-[25px]" />
      ) : (
        <MdOutlineLightMode className="w-[20px] h-[25px]" />
      )}
      <p className="font-poppins text-lg">
        {darkMode ? "Dark Mode" : "Light mode"}
      </p>
    </div>
  );
}

export default DarkMode;
