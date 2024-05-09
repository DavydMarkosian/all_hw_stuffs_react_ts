import axios, {AxiosResponse} from "axios";
import {IRecipeProps} from "../models/Recipe";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

const getAllRecipes = ():Promise<AxiosResponse<IRecipeProps[]>> => {
    return axiosInstance.get('/recipes');
}

export {getAllRecipes}
