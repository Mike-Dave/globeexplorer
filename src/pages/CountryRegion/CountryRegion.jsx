import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchAndFilter from "../../components/SearchAndFilter/SearchAndFilter";
import { useCountry } from "../../contexts/CountryContext";
import CountryRegionList from "./CountryregionList";

function CountryRegion() {
  const { countryRegionError } = useCountry();
  return (
    <div className="mx-auto container">
      <SearchAndFilter />

      {/* I purposely used ! here the api seems to be misbehaving, the dat still loads even after claiimg status 404 */}
      {!countryRegionError ? (
        <ErrorMessage errorText={`${countryRegionError}`} />
      ) : (
        <CountryRegionList />
      )}
    </div>
  );
}

export default CountryRegion;
