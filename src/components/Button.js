const Button = ({ name }) => {
  return (
    <div>
      <button className="py-1.5 px-4 my-4 mr-1.5 bg-gray-300 rounded-md w-max">
        {name}
      </button>
    </div>
  );
};
export default Button;
