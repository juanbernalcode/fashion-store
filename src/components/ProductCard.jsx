import { Link } from 'react-router-dom';



const ProductCard = ({ props }) => {
    

    const { id, title, image } = props

    return (
        <div className="product">
            <img src={image} alt="" className='product__image' />
            <h3 className='product__title'>{title}</h3>
            <div className="product__link">
                <p className="detail__contador">contador</p>
                <Link className="detail__link"
                    to={`/productDetail/${id}`}
                    
                >
                    Go to Detail
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
