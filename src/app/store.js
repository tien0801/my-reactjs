import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loginReducer from '../redux/loginSlice';
// import userReducer from '../redux/userSlice';
// import orderReducers from '../redux/reducers/orders';
// import paymentMethodReducers from '../redux/reducers/paymentMethod';
// import paymentStatusReducers from '../redux/reducers/paymentStatus';
// import storesReducers from '../redux/reducers/stores';
// import deliveryByReducers from '../redux/reducers/deliveryBy';
// import phoneNumberReducers from '../redux/reducers/phoneNumber';
// import skuReducers from '../redux/reducers/sku';
// import detailReducer from '../redux/reducers/detailSlice';
// import paymentReducer from '../redux/reducers/paymentSlice';
// import otherAddressReducer from '../redux/reducers/otherAddress';
// import stocksReducers from '../redux/reducers/checkStocks';
// import serviceReducer from '../redux/reducers/serviceSlice';
// import deliveryReducer from '../redux/reducers/deliverySlice';
// import syncReducer from '../redux/reducers/sync';


const { configureStore, combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
    login: loginReducer,
    // user: userReducer,
    // orders: orderReducers,
    // paymentMethod: paymentMethodReducers,
    // paymentStatus: paymentStatusReducers,
    // stores: storesReducers,
    // deliveryBy: deliveryByReducers,
    // phoneNumber: phoneNumberReducers,
    // sku: skuReducers,
    // detail: detailReducer,
    // payment: paymentReducer,
    // otherAddress: otherAddressReducer,
    // service: serviceReducer,
    // delivery: deliveryReducer,
    // stocks: stocksReducers,
    // sync: syncReducer
});

const middleware = [thunk];

const store = configureStore(
    {
        reducer: rootReducer
    },
    applyMiddleware(...middleware)
);

export default store;