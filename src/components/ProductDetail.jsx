import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import './productDetail.css';

const ProductDetail = () => {

    const { id } = useParams();



    const { getProductDetail, productDetail } = useContext(DataContext);
    const { data } = productDetail;
    useEffect(() => {
        getProductDetail(id)

        return () => {
            getProductDetail(id)
        }
    }, [])






    return (
        <div className="Container__product">
            {data ? (<>
                <h2 className="Product__title">
                    {data.title}
                </h2>
                <div className="Product__details">
                    <img
                        src={data.image}
                        alt="Product__image"
                        className="Product__image"
                    />

                    <div className="Details__group">
                        <h3 className="Product__category">
                            {/* category: */}
                            {data.category}
                            <hr className="hr"/>
                        </h3>

                        <div className="price__count">
                            <h3 className="Product__price">
                                US $
                                {data.price}
                            </h3>
                            <h4 className="Product__count">
                                count:
                                {data.rating.count}
                            </h4>
                        </div>
                        <div className="Product__description">
                            <p>"{data.description}"</p>
                        </div>


                        <div className="rating">

                            <h4 className="rate">
                                rate:
                                {`   ${data.rating.rate}`}
                            </h4>
                            <p className="buy">Buy !</p>
                        </div>
                    </div>

                </div>
            </>
            )
                : (
                    <div className="reload">
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z" />
                        </svg>
                        <p className="reload__title"><i>Wait! </i>  Please ...</p>
                    </div>

                )
            }






        </div>
    )
}

export default ProductDetail; 
