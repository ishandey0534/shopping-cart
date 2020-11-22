import React from 'react';
import {Button} from 'antd';

const OrderButton = (props) => {
    return (
        <Button type="primary" onClick={props.order}>Buy Now</Button>
    );
};

export default OrderButton;