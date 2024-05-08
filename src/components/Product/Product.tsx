import React, {FC} from 'react';

export interface IProductProps{
    id?: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    images?: string[]
}

export type IProductTypeProps = IProductProps & {children?:React.ReactNode}

const Product:FC<IProductTypeProps> = ({images,brand,id,description,title,price}) => {

    return (
        <div>
            <h2>{title}.{brand}.{price}</h2>

            {description}


        </div>
    );
};

export default Product;