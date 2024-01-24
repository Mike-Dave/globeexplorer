import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchAndFilter from "../../components/SearchAndFilter/SearchAndFilter";
import { useCountry } from "../../contexts/CountryContext";
import CountryNameList from "./CountryNameList";

function CountryName() {
  const { countryNameError } = useCountry();
  return (
    <div className="mx-auto container">
      <SearchAndFilter />
      {/* I purposely used ! here the api seems to be misbehaving, the dat still loads even after claiimg status 404 */}
      {!countryNameError ? (
        <ErrorMessage errorText={`${countryNameError}`} />
      ) : (
        <CountryNameList />
      )}
    </div>
  );
}

export default CountryName;
