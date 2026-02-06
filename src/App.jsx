import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductContent from "./components/ProductContent/ProductContent";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductPrice from "./components/ProductPrice/ProductPrice";
import AddToCartButton from "./components/AddToCartButton/AddToCartButton";

function App() {
  return (
    <main>
      <ProductCard>
        <ProductImage
          desktopSrc="images/image-product-desktop.jpg"
          mobileSrc="images/image-product-mobile.jpg"
          alt="Product Image"
        />

        <ProductContent>
          <ProductCategory category="Perfume" />
          <ProductTitle title="Gabrielle Essence Eau De Parfum" />
          <ProductDescription description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL." />
          <ProductPrice currentPrice="149.99" originalPrice="169.99" />
          <AddToCartButton />
        </ProductContent>
      </ProductCard>
    </main>
  );
}

export default App;
