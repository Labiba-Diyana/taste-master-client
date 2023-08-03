import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {
    const { recipeName, ingredients, method, ratings } = recipe;
    const [disabled, setDisabled] = useState(false);

    const handleFavorite = () => {
        toast('This recipe is your favorite ')
        setDisabled(true)
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body italic space-y-2">
                <h2 className="text-2xl font-extrabold">{recipeName}</h2>
                <p>Ingredients: {ingredients}</p>
                <hr />
                <p className="h-[170px] overflow-hidden hover:overflow-auto">Method: {method}</p>
                <hr />
                <div className="flex justify-between items-center">
                    <div className='flex items-center justify-center space-x-2'>
                        <span>
                            Ratings: {ratings}
                        </span>
                        <span>
                            <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
                        </span>
                    </div>
                    {
                        disabled ? <button disabled className='font-bold'>Favorite</button> :
                            <button onClick={handleFavorite} className="btn bg-white border-none text-[#DAA425]">
                                Favorite
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                <Toaster></Toaster>
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;