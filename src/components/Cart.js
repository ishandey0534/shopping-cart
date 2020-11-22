import React, { Fragment } from 'react';
import { List, Avatar,Divider } from 'antd';

const Cart = (props) => {
    return (
        <Fragment>
            <Divider orientation="left">Your shopping cart!</Divider>
            <List
                itemLayout="horizontal"
                dataSource={props.cart}
                renderItem={product => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={product.pic} />}
                            title={product.name}
                            description={"Rs."+product.price}
                            />
                    </List.Item>
                )}
            />
        </Fragment>
    );
};

export default Cart;