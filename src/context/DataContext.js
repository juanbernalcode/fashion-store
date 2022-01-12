import { createContext,  useReducer } from 'react'
import axios from 'axios';
import DataReducer from './DataReducer';

export const DataContext = createContext();


const Dataprovider = ({ children }) => {


    const initialState = {
        data: [],
        productDetail: []
    }

    const [state, dispatch] = useReducer(DataReducer, initialState)


    const getProducts = async () => {
        const res = await  axios.get('https://fakestoreapi.com/products/');
        dispatch({
            type: 'GET_PRODUCTS',
            payload: res.data
        })
    }

    const getProductDetail = async (id) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({
            type: 'GET_PRODUCT_DETAIL',
            payload: res
        })
    }
    

  
    
    return (
        <DataContext.Provider value={{
            data: state.data,
            productDetail: state.productDetail,
            getProducts,
            getProductDetail
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default Dataprovider
