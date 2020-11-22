import React from 'react';
import { Col, Card } from 'antd';
import AddToCartButton from './AddToCartButton';

const { Meta } = Card;

const ProductCard = (props) => {
    return (
        <Col span={6}>
            <Card 
                cover={
                    <img 
                      alt="product"
                      src={props.pic}
                      />
                  }
                actions={[
                    <AddToCartButton index={props.index} addToCart={props.addToCart}/>
                ]}
                >
                <Meta
                    title={props.title}
                    description={"Price: Rs." +props.price}
                    >
                </Meta>
            </Card>
        </Col>
    );
};

export default ProductCard;
