import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

const AddToCartButton = (props) => {

    const handleClick = (index) => {
        props.addToCart(index);
    }

    return <ShoppingCartOutlined onClick={() => handleClick(props.index)}/>
};

export default AddToCartButton;