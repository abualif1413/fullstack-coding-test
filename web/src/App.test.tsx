import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductStatus, ProductList } from './App';

test('Delivery status must be the same with disabled button', () => {
  const { getByTestId } = render(
    <ProductList
      productId={1}
      productName='Product name'
      deliveryStatus='ORDERED'
      productType='Desert'
      orderedBy='Ordered By'
      estimatedDeliveryDate='Some Date'
      onButtonStatusClicked={jest.fn()}
    />
  );
  const deliveryStatusTest = getByTestId("delivery-status-1").textContent;
  const deliveryButtonTest = (getByTestId(`delivery-button-${deliveryStatusTest}-1`) as HTMLButtonElement).disabled;
  expect(deliveryButtonTest).toBe(true);
});

test('At least one and only one delivery status button is disabled to determine the delivery status', () => {
  const { getByTestId } = render(
    <ProductList
      productId={1}
      productName='Product name'
      deliveryStatus='ORDERED'
      productType='Desert'
      orderedBy='Ordered By'
      estimatedDeliveryDate='Some Date'
      onButtonStatusClicked={jest.fn()}
    />
  );
  const allDeliveryStatus = [ProductStatus.CANCELLED, ProductStatus.ORDERED, ProductStatus.PENDING, ProductStatus.SHIPPED];
  let noOfDisabled = 0;
  allDeliveryStatus.forEach(status => {
    const deliveryButtonTest = (getByTestId(`delivery-button-${status}-1`) as HTMLButtonElement).disabled;
    if(deliveryButtonTest === true) {
      noOfDisabled++;
    }
  })
  
  expect(noOfDisabled).toBe(1);
});
