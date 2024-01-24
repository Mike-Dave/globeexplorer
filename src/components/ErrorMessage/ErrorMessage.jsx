function ErrorMessage({ errorText }) {
  return (
    <>
      <p className="text-red-400 bg-gray-800 p-4 font-poppins m-3 md:m-0">
        {errorText}
      </p>
    </>
  );
}

export default ErrorMessage;
