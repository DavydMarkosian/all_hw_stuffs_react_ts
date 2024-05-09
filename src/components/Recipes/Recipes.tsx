import   React, {FC, useEffect, useState} from 'react';
import Recipe from "../Recipe/Recipe";
import {getAllRecipes} from "../../services/recipes.api.service";
import {IRecipeProps} from "../../models/Recipe";


const Recipes: FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([])

    useEffect(() => {

        getAllRecipes()
            .then(value => console.log(value.data))

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