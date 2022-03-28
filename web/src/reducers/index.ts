import { SHOW_ALL_PRODUCTS, UPDATE_DELIVERY_STATUS } from '../actions';

export interface ActionTypes {
  type: string,
  payload: StoreTypes[],
}

export interface StoreTypes {
  product_id: number,
  customer_id: number,
  product_type_id: number,
  delivery_status: string,
  name: string,
  delivery_address: string,
  estimated_delivery_date: string,
  Customer: {
    name: string,
  },
  ProductType: {
    name: string,
  }
}

const initialState: StoreTypes[] = [];

const rootReducer = (state: StoreTypes[] = initialState, action: ActionTypes): StoreTypes[] => {
  switch (action.type) {
    case SHOW_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;