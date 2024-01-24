import { Link } from "react-router-dom";

function CountryItem({ flag, name, population, region, capital }) {
  return (
    <Link
      to={`/countrydetail/${name.common}`}
      className="w-full h-[21.875rem] rounded-lg shadow-xl ml-10 md:ml-0"
    >
      <picture>
        <img
          className="w-full rounded-t-lg h-[150px]"
          src={flag.png}
          alt="country flag"
        />
      </picture>
      <div className="p-5 space-y-1">
        <h1 className="font-bold font-poppins pb-3">{name.common}</h1>
        <p>
          Populations: <span>{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
}

export default CountryItem;
