import Map from "../../components/Map/Map";
import BackButton from "./BackButton";
import Borders from "./Borders";
import DetailsInfo from "./DetailsInfo";
function CountryDetailsItem({
  flag,

  name,
  population,
  region,
  capital,
  nativeName,
  subregion,
  tld,
  currencies,
  languages,
  latlng,
  borders,
}) {
  const languageNames = Object?.values(languages)?.join(", ");

  const currency = Object.values(currencies)[0].name;

  return (
    <div className="font-poppins ml-10 md:ml-0 pb-10">
      <BackButton />
      <div className="flex flex-col-reverse md:flex-row gap-20">
        <div>
          <picture>
            <img
              className="w-[18.75rem] md:w-[37.5rem] h-[12.5rem] md:h-[21.875rem]"
              src={flag.png}
              alt="country flag"
            />
          </picture>
          <h1 className="font-bold font-poppins text-2xl my-5">
            {name.common}
          </h1>
          <DetailsInfo
            nativeName={nativeName}
            population={population}
            region={region}
            subregion={subregion}
            capital={capital}
            tld={tld}
            currency={currency}
            languageNames={languageNames}
          />
          <Borders borders={borders} />
        </div>
        <div>
          <Map latlng={latlng} nativeName={nativeName[1]} region={region} />
        </div>
      </div>
    </div>
  );
}

export default CountryDetailsItem;
