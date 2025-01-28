import { FC, useState } from "react";

const DropText: FC<{ heading: string; text: string }> = ({ heading, text }) => {
  const [showDrop, setShowSet] = useState<boolean>(false);

  const toggleDrop = () => {
    setShowSet(!showDrop);
  };

  return (
    <div className="droptext">
      <h4 className="droptext-heading" onClick={toggleDrop}>{heading}</h4>
      {showDrop && <span>{text}</span>}
    </div>
  );
};

export default DropText;
