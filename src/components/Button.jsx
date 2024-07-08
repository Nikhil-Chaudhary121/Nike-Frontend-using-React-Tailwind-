const Button = ({
  label,
  iconUrl,
  textColor,
  borderColor,
  backgroundColor,
}) => {
  return (
    <button
      className={` flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : ` text-white bg-coral-red border-coral-red`
      } rounded-full  `}
    >
      {label}
      {iconUrl && (
        <img
          className=" ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          alt="arrowRight"
        />
      )}
    </button>
  );
};

export default Button;
