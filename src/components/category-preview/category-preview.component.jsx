import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <a className='title' to={title}>{title.toUpperCase()}</a>
    </h2>
    <hr/>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;