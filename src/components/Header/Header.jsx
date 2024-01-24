import DarkMode from "../Darkmode/DarkMode";
import HeaderName from "./HeaderName";

function Header() {
  return (
    <div className="p-4 shaddow-lg">
      <div className="mx-auto container flex justify-between">
        <HeaderName />
        <DarkMode />
      </div>
    </div>
  );
}

export default Header;
