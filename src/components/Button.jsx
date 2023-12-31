const Button = ({ children, ...props }) => {
  return (
    <button className="block mx-auto px-4 py-2 text-xs sm:text-sm 2xl:text-lg md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" {...props}>
      {children}
    </button>
  );
};

export default Button;
