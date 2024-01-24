import { FcGlobe } from "react-icons/fc";
import { useNavigate } from "react-router";
function HeaderName() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <FcGlobe className="w-[30px] h-[30px]" />
      <h1 className="font-poppins font-bold tracking-wider text-lg">
        GlobeExplorer.
      </h1>
    </div>
  );
}

export default HeaderName;
