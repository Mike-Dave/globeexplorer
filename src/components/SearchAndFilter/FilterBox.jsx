import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useCountry } from "../../contexts/CountryContext";
import { useEffect, useState } from "react";
function FilterBox() {
  const navigate = useNavigate();
  const {
    setCountryRegionData,
    region,
    setRegion,
    darkMode,
    setCountryRegionError,
  } = useCountry();
  const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const [continent, setContinent] = useState("Filter by Region");

  const [dropdown, setDropdown] = useState(false);
  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setCountryRegionData(data);
        } catch (error) {
          setCountryRegionError(error);
        }
      };

      fetchData();
    },
    [region, setCountryRegionData, setCountryRegionError]
  );

  function handleClick(continent = "Africa", e) {
    e.stopPropagation();
    setRegion(continent);
    setContinent(continent);
    navigate("/countryregion");
    setDropdown(false);
  }
  return (
    <div
      className="flex flex-col gap-2 p-3 mt-10 relative ml-5 md:ml-0"
      onClick={() => setDropdown((click) => !click)}
    >
      <div className="flex items-center justify-between gap-3 outline w-[12.5rem] p-3">
        <p>{continent}</p>
        <FaAngleDown />
      </div>
      {dropdown && (
        <ul
          className={`outline w-[12.5rem] rounded-md py-2 absolute top-[4.688rem] ${
            darkMode ? "dark-mode" : "bg-white"
          } `}
        >
          {continents.map((continent, index) => (
            <li
              key={index}
              className="hover:bg-slate-300 p-1 px-3 cursor-pointer"
              onClick={(e) => handleClick(continent, e)}
            >
              {continent}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterBox;
