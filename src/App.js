import { Row,message } from 'antd';
import { Fragment, useState } from 'react';
import './App.css';
import data from './components/data/shoppingcart.json';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import OrderButton from './components/OrderButton';

const App = () => {

  const productsArray = [];
  data.photos.forEach((product,index) => {
    productsArray.push({
      id: index,
      name: product.product_name,
      pic: product.src.original,
      price: product.price
    });
  });

  const [products,setProducts] = useState(productsArray);
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0);

  const existsInCart = (index) => {
    for(let i=0;i<cart.length;i++){
      if(cart[i].id===index){
        cartError();
        return true;
      }
    }
    return false;
  };

  const addToCart = (index) => {
    if(existsInCart(index)){
      return;
    }
    setCart([
      ...cart,
      {
        id: index,
        name: products[index].name,
        price: products[index].price,
        pic: products[index].pic
      }
    ]);
    addtocartSuccess();
    setTotal(prevState => prevState+products[index].price);
  };

  const order = () => {
    setTotal(0);
    setCart([]);
    orderSuccess();
  };

  const orderSuccess = () => {
    message.success('Ordered successfully!');
  };

  const addtocartSuccess = () => {
    message.success('Added to cart!');
  };

  const cartError = () => {
    message.error('Duplicate order!');
  };

  return (
    <Fragment>
      <Row>
        {products.map((product) => {
          return (
            <ProductCard 
              key={product.id}
              index={product.id}
              pic={product.pic}
              title={product.name}
              price={product.price}
              addToCart={addToCart}
              />
          );
        })}
      </Row>
      <Row>
        {cart.length===0 
        ? 
        "Cart is empty! Please add something to cart." 
        : 
        <Cart cart={cart} />
        }
      </Row>
      <Row>
        Your total is Rs.{total}.
      </Row>
      {cart.length!==0 && <OrderButton order={order} />}
    </Fragment>
  );
};

export default App;
