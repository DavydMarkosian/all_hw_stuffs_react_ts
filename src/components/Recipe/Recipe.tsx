import React, {FC} from 'react';
import styles from './style.module.css'
import {IRecipeProps} from "../../models/Recipe";




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