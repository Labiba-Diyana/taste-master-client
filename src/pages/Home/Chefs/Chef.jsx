import { Link } from "react-router-dom";


const Chef = ({ chef }) => {
    const {_id, picture, name, experience, recipes, likes } = chef;

    return (
        <div className="card rounded-none p-10 w-56 lg:w-96 bg-base-100 shadow-xl">
            <figure className="shadow-xl"><img className="w-full h-[300px] border-double border-8 border-[#DAA425]" src={picture} alt="Shoes" /></figure>
            <div className="text-start mt-8 space-y-5">
                <h2 className="text-2xl font-extrabold text-center">{name}</h2>
                <div className="flex justify-between items-center text-xl font-normal italic">
                <p>Experience: {experience} years.</p>
                <p>Recipes: {recipes}.</p>
                </div>
                <div className="flex justify-between items-center text-xl font-normal italic">
                   <p>Likes: {likes}</p>
                   <Link to={`/viewRecipes/${_id}`}><button className="btn bg-white border-none text-lg font-semibold  italic text-[#DAA425]">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;