import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import { useCountry } from "../../contexts/CountryContext";

function AppLayout() {
  const { darkMode } = useCountry();
  return (
    <div
      className={`${darkMode ? "dark-mode" : ""} min-h-screen cursor-pointer`}
    >
      <Header />
      <hr className="border-b-4" />
      <Outlet />
    </div>
  );
}

export default AppLayout;
