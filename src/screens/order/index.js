import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, connect, useSelector} from 'react-redux';
import Header from '../../components/molecules/header';
import OrderItem from '../../components/molecules/order-item/index';
import {getOrders, removeOrder} from '../../store/actions/order.action';

import {styles} from './styles';

const Order = ({navigation}) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const orders = useSelector(state => state.order.orders);

  useEffect(() => {
    dispatch(getOrders(userId));
  }, []);

  const onDelete = id => {
    dispatch(removeOrder(id));
  };

  const onDetails = id => {
    console.log(id);
  };

  const renderItem = ({item}) => (
    <OrderItem data={item} onDelete={onDelete} onDetails={onDetails} />
  );

  return (
    <View style={styles.container}>
      <Header name={'My Orders'} handleNavigation={() => navigation.goBack()} />
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default connect()(Order);
