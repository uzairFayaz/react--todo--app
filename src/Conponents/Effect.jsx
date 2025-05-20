import {useState,  useEffect} from 'react'; 

const Effect =()=>{
    const [count, setCount] = useState(0);


    useEffect(()=>{
        setInterval(() => {
            console.log (`count is ${count}`)
            
        }, 2000);

    },[count])
    return(
        <div>{count + 1 }</div>
    )

}
export default Effect;