import { useCountry } from "../../contexts/CountryContext";
import CountryRegionItem from "./CountryRegionItem";

function CountryRegionList() {
  const { countryRegionData } = useCountry();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
      {countryRegionData?.map(
        ({ flags: flag, name, population, region, capital }) => (
          <CountryRegionItem
            flag={flag}
            key={name.common}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        )
      )}
    </div>
  );
}

export default CountryRegionList;
