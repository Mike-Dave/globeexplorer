import { useEffect, useState } from "react";
import CountryList from "./CountryList";
import { useCountry } from "../../contexts/CountryContext";
import SearchAndFilter from "../../components/SearchAndFilter/SearchAndFilter";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function CountryAll() {
  const { countryAllData, setCountryAllData } = useCountry();
  const [error, setError] = useState("");
  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/all`);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          setCountryAllData(data);
        } catch (error) {
          setError(error);
        }
      };

      // Call the function to initiate the request
      fetchData();
    },
    [setCountryAllData]
  );

  return (
    <div className="mx-auto container">
      <SearchAndFilter />
      {error ? (
        <ErrorMessage errorText={`${error}`} />
      ) : (
        <CountryList data={countryAllData} />
      )}
    </div>
  );
}

export default CountryAll;
