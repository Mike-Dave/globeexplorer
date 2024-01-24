import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCountry } from "../../contexts/CountryContext";
import CountryDetailsList from "../CountryDetails/CountryDetailsList";

function CountryBorder() {
  const { id } = useParams();
  const { borderData, setBorderData } = useCountry();
  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${id}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setBorderData(data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchData();
    },
    [id, setBorderData]
  );
  return (
    <div className="mx-auto container">
      <CountryDetailsList data={borderData} />
    </div>
  );
}

export default CountryBorder;
