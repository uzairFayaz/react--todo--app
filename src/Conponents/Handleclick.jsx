import React from "react";

const Handleclick = () => {
  const handleClick = () =>{
    alert('hello')
  }
  return (
    <div>
      <button onClick={handleClick}>click me </button>
    </div>
  );
};

export default Handleclick;
