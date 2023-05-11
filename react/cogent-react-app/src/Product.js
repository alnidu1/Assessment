import React from 'react';
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    id: 1,
    name: 'Apple',
    description: 'Fresh, juicy, tart, crispy',
    price: 0.99,
    date: Date.now.toString
  },
  {
    id: 2,
    name: 'Pear',
    description: 'Sweet and juicy pears',
    price: 1.9,
    date: Date.now.toString

  },
  {
    id: 3,
    name: 'Orange',
    description: 'Oranges not mandarin',
    price: 0.89,
    date: Date.now.toString

  },
];

const Product = ({ id, name, description, price, date }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">ID: {id} Date:{date} </h6>
        <p className="card-text">{description}</p>
        <p className="card-text">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

class ProductList extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Product List</h1>
        <div className="row">
        <div>id={products[0].id} name={products[0].name} price={products[0].price}</div>
          <br></br>
          {products.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                date={product.date}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
