import Button from "./Button";
const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Kapil Show",
    "Movies",
    "Tom Cruise",
    "Marvel",
    "India",
    "Bharat",
    "Bollywood",
    "Hollywood",
    "Gaming",
    "Kapil Show",
    "Coding",
    "Gaming",
  ];
  return (
    <div className="flex flex-wrap">
      {buttonList.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};
export default ButtonList;
