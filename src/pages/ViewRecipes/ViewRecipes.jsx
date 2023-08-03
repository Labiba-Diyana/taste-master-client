import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const ViewRecipes = () => {
    const data = useLoaderData();
    const { picture, name, bio, experience, recipes, likes, recipeInfo } = data

    return (
        <div className="pt-28 pb-32 w-10/12 mx-auto">
            <div className="flex items-center justify-between space-x-14 pt-16 ">
                <div className="avatar">
                    <div className="w-56 h-56 rounded-full">
                        <LazyLoadImage className="w-full h-full rounded-full"
                            effect="blur"
                            src={picture} />
                    </div>
                </div>
                <div className="italic font-normal text-xl space-y-7 pl-7 border-l-4 border-[#DAA425]">
                    <h2 className="text-4xl font-extrabold">{name}</h2>
                    <p>Bio: {bio}</p>
                    <p>Experience: {experience} years.</p>
                    <p>Recipes: {recipes}.</p>
                    <p>Likes: {likes}.</p>
                </div>
            </div>
            <div className="mt-20 grid grid-cols-3">
                {
                    recipeInfo.map(recipe => <Recipe
                        key={recipe.id}
                        recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ViewRecipes;