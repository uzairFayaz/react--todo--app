import { useState } from "react";
import Handleclick from "./Handleclick";
import "./Togle.css";
const Togle = () => {

    const [isOn, setIsOn] = useState(false);
    function handleOnClick(){
return () => {
    setIsOn(!isOn);    
}
    }

  return (
    <div onClick={handleOnClick()} className={` px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2{isOn ? bg-black : bg-white}`} >
      <div>
        <span className={isOn ?'text-white tr' :"text-black"}>
            {isOn ? "on": "off"}
        </span>
      </div>
    </div>
  )
}

export default Togle
