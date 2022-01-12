
import { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext';

import ProductCard from '../components/ProductCard';


const HomePage = () => {

    const { data, getProducts } = useContext(DataContext);
    useEffect(() => {

        getProducts()

    }, [])

    return (
        <>
            <h1 className="Home__Title">Products</h1>
            <div className="container">
                {
                    data.map(product => 
                        <ProductCard
                            props={product}
                            key={product.id}
                        />


                    )
                }
            </div>
        </>
    )
}

export default HomePage
