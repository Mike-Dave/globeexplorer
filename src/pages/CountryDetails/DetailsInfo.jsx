function DetailsInfo({
  nativeName,
  population,
  region,
  subregion,
  capital,
  tld,
  currency,
  languageNames,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-24">
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Native Name: </span>
          {nativeName[1]}
        </p>
        <p>
          <span className="font-semibold">Population: </span> {population}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-semibold">Sub Region: </span>
          {subregion}
        </p>
        <p>
          <span className="font-semibold">Capital: </span> {capital}
        </p>
      </div>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Top Level Domain: </span> {tld}
        </p>

        <p>
          <span className="font-semibold">Currencies: </span> {currency}
        </p>
        <p>
          <span className="font-semibold">Languages: </span> {languageNames}
        </p>
      </div>
    </div>
  );
}

export default DetailsInfo;
