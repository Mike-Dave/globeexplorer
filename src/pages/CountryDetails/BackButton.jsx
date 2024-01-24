import { useNavigate } from "react-router";
import { MdKeyboardBackspace } from "react-icons/md";
function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="p-2 px-12 shadow-md flex items-center gap-3 my-10 outline"
      onClick={() => navigate(-1)}
    >
      <MdKeyboardBackspace />
      <span> Back</span>
    </button>
  );
}

export default BackButton;
