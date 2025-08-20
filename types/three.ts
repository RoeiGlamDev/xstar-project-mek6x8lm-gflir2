import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Collection {
  id: number;
  title: string;
  products: Product[];
}

interface ThreeTypesProps {
  collections: Collection[];
}

const ThreeTypes: React.FC<ThreeTypesProps> = ({ collections }) => {
  return (
    <div className="three-types">
      {collections.map(collection => (
        <div key={collection.id} className="collection">
          <h2 className="collection-title">{collection.title}</h2>
          <div className="products">
            {collection.products.map(product => (
              <div key={product.id} className="product">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-price">${product.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeTypes;