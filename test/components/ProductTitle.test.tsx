import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
  test('mostrar el componente con el título personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('mostrar el componente con el nombre del producto 1', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle></ProductTitle>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
