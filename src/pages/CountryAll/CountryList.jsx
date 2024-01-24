import CountryItem from "./CountryItem";

function CountryList({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
      {data?.map(({ flags: flag, name, population, region, capital }) => (
        <CountryItem
          flag={flag}
          data={data}
          key={name.common}
          name={name}
          population={population}
          region={region}
          capital={capital}
        />
      ))}
    </div>
  );
}

export default CountryList;
