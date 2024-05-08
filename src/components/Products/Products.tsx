import React, {FC, useEffect, useState} from 'react';
import Product, {IProductTypeProps, IProductProps} from "../Product/Product";

const Products: FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(({products}) => {
                setProducts(products)
            });
    }, [])
    return (
        <div>
            {
                products.map(({title, description, brand, images, id, price}) =>
                    (<Product
                        key={id}
                        title={title}
                        description={description}
                        price={price}
                        brand={brand}/>))
            }
        </div>
    );
};

export default Products;