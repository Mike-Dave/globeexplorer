import { IoMdSearch } from "react-icons/io";
import { useCountry } from "../../contexts/CountryContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function SearchBox() {
  const navigate = useNavigate();
  const { query, setQuery, setData, darkMode, setCountryNameError } =
    useCountry();

  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${query}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setData(data);
          console.log(data);
        } catch (error) {
          setCountryNameError(error);
        }
      };

      // Call the function to initiate the request
      fetchData();
    },
    [query, setCountryNameError, setData]
  );

  function submitQuery(e) {
    e.preventDefault();
    setQuery(e.target.value);
    navigate("/countryname");
  }
  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-black" : ""
        } outline shadow-2xsl w-[21.875rem] flex gap-1 items-center mt-10 ml-5 md:ml-0`}
      >
        <IoMdSearch className="w-[30px] h-[20px] ml-2" />
        <input
          className={`outline-none w-full p-2 ${darkMode ? "bg-black" : ""}`}
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={submitQuery}
        />
      </div>
    </div>
  );
}

export default SearchBox;
