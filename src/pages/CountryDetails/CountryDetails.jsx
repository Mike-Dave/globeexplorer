import { useParams } from "react-router";
import CountryDetailsList from "./CountryDetailsList";
import { useEffect, useState } from "react";
import { useCountry } from "../../contexts/CountryContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function CountryDetails() {
  const { id } = useParams();

  const { countryDetailData, setCountryDetailData } = useCountry();
  const [error, setError] = useState("");
  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${id}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setCountryDetailData(data);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();

      // Call the function to initiate the request
    },
    [id, setCountryDetailData]
  );

  return (
    <div className="mx-auto container">
      {error ? (
        <ErrorMessage errorText={`${error}`} />
      ) : (
        <CountryDetailsList data={countryDetailData} />
      )}
    </div>
  );
}

export default CountryDetails;
