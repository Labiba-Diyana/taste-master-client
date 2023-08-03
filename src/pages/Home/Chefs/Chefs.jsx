import { useEffect } from "react";
import { useState } from "react";
import Chef from "./Chef";
import SectionTitle from "../../../components/SectionTitle";


const Chefs = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('https://taste-master-server-labiba-diyana.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    return (
        <div className="lg:w-10/12 mx-auto text-center my-20 lg:my-36">
           <SectionTitle heading="Renowned Chefs" subHeading="Here are some of ours prominent chefs"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-10">
                {
                    chefs.map(chef => <Chef key={chef._id}
                        chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;