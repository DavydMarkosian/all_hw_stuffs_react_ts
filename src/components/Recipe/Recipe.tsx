import React, {FC} from 'react';
import styles from './style.module.css'

export interface IRecipeProps {
    id: number,
    name:string,
    ingredients?: string[],
    instructions?: string[],
    prepTimeMinutes?: number,
    cookTimeMinutes?: number,
    servings?: number,
    difficulty?: string,
    cuisine: string,
    caloriesPerServing?: number,
    tags?: string[],
    userId?: number,
    image: string,
    rating?: number,
    reviewCount?: number,
    mealType: string[]
}


const Recipe:FC<IRecipeProps> = ({id,mealType,cuisine,name,image}) => {
    return (
        <div >
            <h2>{id}.{name}.{mealType}</h2>
            <img src={image} alt={name} className={styles.w400}/>
            <p>{cuisine}</p>
        </div>
    );
};

export default Recipe;