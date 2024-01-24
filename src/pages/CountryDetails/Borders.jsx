import { Link } from "react-router-dom";

function Borders({ borders }) {
  return (
    <div className="md:flex gap-2 mt-2">
      <h3>
        <span className="font-semibold">Border Countries:</span>
      </h3>

      <div className="flex">
        {borders?.map((border, index) => (
          <Link
            to={`/countryborder/${border}`}
            className="border-2 px-2 md:ml-2 mt-2 md:mt-0"
            key={index}
          >
            {border}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Borders;
