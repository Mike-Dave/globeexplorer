import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [countryAllData, setCountryAllData] = useState([]);
  const [region, setRegion] = useState("");
  const [countryRegionData, setCountryRegionData] = useState([]);
  const [countryDetailData, setCountryDetailData] = useState([]);
  const [borderData, setBorderData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [countryNameError, setCountryNameError] = useState("");
  const [countryRegionError, setCountryRegionError] = useState("");
  return (
    <CountryContext.Provider
      value={{
        query,
        setQuery,
        data,
        setData,
        countryAllData,
        setCountryAllData,
        countryRegionData,
        setCountryRegionData,
        region,
        setRegion,
        countryDetailData,
        setCountryDetailData,
        darkMode,
        setDarkMode,
        borderData,
        setBorderData,
        countryNameError,
        setCountryNameError,
        countryRegionError,
        setCountryRegionError,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined)
    throw new Error("CountryContext was used outside of the CountryProvider");
  return context;
}
export { CountryProvider, useCountry };
