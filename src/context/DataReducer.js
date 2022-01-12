// Types :
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'



// Reducer :
// eslint-disable-next-line import/no-anonymous-default-export
export default  (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                data: payload
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: payload
            }

        default:
            return state;
    }
}


