import CountryDetailsItem from "./CountryDetailsItem";
function CountryDetailsList({ data }) {
  return (
    <div>
      {data?.map(
        ({
          flags: flag,
          name,
          population,
          region,
          capital,
          altSpellings: nativeName,
          subregion,
          tld,
          currencies,
          languages,
          latlng,
          borders,
        }) => (
          <CountryDetailsItem
            flag={flag}
            key={name.common}
            name={name}
            population={population}
            region={region}
            capital={capital}
            nativeName={nativeName}
            subregion={subregion}
            tld={tld}
            currencies={currencies}
            languages={languages}
            latlng={latlng}
            borders={borders}
          />
        )
      )}
    </div>
  );
}

export default CountryDetailsList;
