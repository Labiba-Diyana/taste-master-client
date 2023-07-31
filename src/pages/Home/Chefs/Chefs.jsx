import { useEffect } from "react";
import { useState } from "react";
import Chef from "./Chef";


const Chefs = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])


    return (
        <div>
            {
                chefs.map(chef => <Chef key={chef.id}
                chef={chef}></Chef>)
            }
        </div>
    );
};

export default Chefs;