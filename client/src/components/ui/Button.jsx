function Button({ handleOnClick, text }) {
  return (
    <button
      className="p-2 border-4 border-[#AF8F6F] rounded-2xl text-center hover:bg-[#AF8F6F]"
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
}

export default Button;
