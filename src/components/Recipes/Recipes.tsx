import React, {FC, useEffect, useState} from 'react';
import Recipe, {IRecipeProps} from "../Recipe/Recipe";


const Recipes: FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([])

    useEffect(() => {

        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(({recipes}) => {
                setRecipes(recipes)
            })

    }, [])

    return (
        <div>
            {
                recipes.map(({id, name, image, mealType, cuisine}) => (
                    <Recipe key={id} id={id} name={name} cuisine={cuisine} image={image} mealType={mealType}/>
                ))
            }
        </div>
    );
};

export default Recipes;