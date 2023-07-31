import { useEffect } from "react";
import { useState } from "react";
import Chef from "./Chef";
import SectionTitle from "../../../components/SectionTitle";


const Chefs = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    return (
        <div className="w-10/12 mx-auto text-center my-20 lg:my-36">
           <SectionTitle heading="Renowned Chefs" subHeading="Here are some of ours prominent chefs"></SectionTitle>
            <div className="grid grid-cols-3 gap-y-10">
                {
                    chefs.map(chef => <Chef key={chef.id}
                        chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;