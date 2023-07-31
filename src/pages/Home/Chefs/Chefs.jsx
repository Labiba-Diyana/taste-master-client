import { useEffect } from "react";
import { useState } from "react";


const Chefs = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


    return (
        <div>
            
        </div>
    );
};

export default Chefs;