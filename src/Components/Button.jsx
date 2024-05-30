// eslint-disable-next-line react/prop-types
const Button = ({ text, classname }) => {
  return (
    <button
      className={` px-6 py-2 border-slate-300  border-2 text-white rounded-lg bg-transparent ${classname} `}
    >
      {text}
    </button>
  );
};

export default Button;
