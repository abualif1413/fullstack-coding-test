import { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux"
import { showAllProducts, updateDeliveryStatus } from './actions';
import { StoreTypes } from './reducers';

interface ProductListProps {
  productId: number,
  productName: string,
  deliveryStatus: string,
  productType: string,
  orderedBy: string,
  estimatedDeliveryDate: string,
  onButtonStatusClicked: (arg0: string) => void,
}

const ProductCard = styled.div`
  border: solid 1px #CCC;
  padding: 1.5rem;

  & .product-name {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  & .status-type {
    display: flex;
  }
  
  & .delivery-status {
    color: green;
    margin-right: 0.5rem;
    font-size: 90%;
  }

  & .status-type {
    font-weight: bold;
    color: #625e5e;
    font-size: 90%;
  }
`;

const ButtonStatus = styled.button`
  margin-right: 0.5rem;
  padding: 0.3rem;
`;

const enum ProductStatus  {
  PENDING = 'PENDING',
  ORDERED = 'ORDERED',
  SHIPPED = 'SHIPPED',
  CANCELLED = 'CANCELLED',
}

const ProductList: FC<ProductListProps> = ({
  productId,
  productName,
  deliveryStatus,
  productType,
  orderedBy,
  estimatedDeliveryDate,
  onButtonStatusClicked,
}) => {
  const allStatus = [ProductStatus.PENDING, ProductStatus.ORDERED, ProductStatus.SHIPPED, ProductStatus.CANCELLED];

  return(
    <ProductCard>
      <div className='product-name'>{productName}</div>
      <div className='status-type'>
        <div className='delivery-status'>{deliveryStatus}</div>
        <div className='status-type'>{productType}</div>
      </div>
      <div>Ordered by: {orderedBy}</div>
      <div>Estimated at: {estimatedDeliveryDate}</div>
      {
        allStatus.map((status, index) => <ButtonStatus key={index} disabled={deliveryStatus === status} title='Click to change status' onClick={() => onButtonStatusClicked(status)}>{status}</ButtonStatus>)
      }
    </ProductCard>
  );
}

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((gState: StoreTypes[]) => gState);
  const [onlyShowing, setOnlyShowing] = useState<number>(0);

  useEffect(() => {
    dispatch(showAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>List of Products</h3>
      Only showing : {' '}
      <select value={onlyShowing} onChange={(e) => setOnlyShowing(e.target.value as unknown as number)}>
        <option value={0}>All</option>
        {
          state.map((stt, index) => <option key={index} value={stt.product_id}>{stt.name}</option>)
        }
      </select>
      {
        state.map((stt, index) => {
          if(onlyShowing.toString() === '0') {
            return (
              <ProductList
                key={index}
                productId={stt.product_id}
                productName={stt.name}
                deliveryStatus={stt.delivery_status}
                productType={stt.ProductType.name}
                orderedBy={stt.Customer.name}
                estimatedDeliveryDate={stt.estimated_delivery_date}
                onButtonStatusClicked={(newStatus: string) => {
                    dispatch(updateDeliveryStatus(stt.product_id, newStatus));
                  }
                }
              />
            );
          } else {
            if(onlyShowing.toString() === stt.product_id.toString()) {
              return (
                <ProductList
                  key={index}
                  productId={stt.product_id}
                  productName={stt.name}
                  deliveryStatus={stt.delivery_status}
                  productType={stt.ProductType.name}
                  orderedBy={stt.Customer.name}
                  estimatedDeliveryDate={stt.estimated_delivery_date}
                  onButtonStatusClicked={(newStatus: string) => {
                      dispatch(updateDeliveryStatus(stt.product_id, newStatus));
                    }
                  }
                />
              );
            }
          }
        })
      }
    </div>
  )
};

export default App;
