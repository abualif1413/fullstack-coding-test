import { SHOW_ALL_PRODUCTS } from './types';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { StoreTypes } from '../reducers';

export interface ActionProperties<T> {
  type: string,
  payload: T,
}

export const showAllProducts = (): ThunkAction<void, StoreTypes, unknown, AnyAction> => {
  return async (dispatch) => {
    const res = await axios.get(`${process.env.REACT_APP_API_HOST}all-products`);
    dispatch({
      type: SHOW_ALL_PRODUCTS,
      payload: res.data,
    });
  };
};

export const updateDeliveryStatus = (productId: number, newStatus: string): ThunkAction<void, StoreTypes, unknown, AnyAction> => {
  return async (dispatch) => {
    await axios.get(`${process.env.REACT_APP_API_HOST}update-delivery-status/${productId}/to/${newStatus}`);
    const res = await axios.get(`${process.env.REACT_APP_API_HOST}all-products`);
    dispatch({
      type: SHOW_ALL_PRODUCTS,
      payload: res.data,
    });
  };
};

export * from './types';