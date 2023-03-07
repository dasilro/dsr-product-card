# DSR-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Daniel Silvestre

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'dsr-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
          count: 4,
          //maxCount: 10
        }} >
  {({ count, isMaxCountReached, increaseBy, reset }) => (
    <>
      <ProductImage img={product.img} />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
