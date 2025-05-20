import { useState } from "react";

const Timing = ({ items }) => {
  const [selectIndex, setSelectIndex] = useState(-1);

  const handleClick = (index) => {
    setSelectIndex(index);
  };

  return (
    <div>
      {items.length > 0 && <h1>Items List</h1>}
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={selectIndex === index ? "bg-neutral-600 active" : ""}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timing;
