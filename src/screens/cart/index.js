import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {colors} from '../../../assets/constants/theme';
import CartItem from '../../components/molecules/cart-item';
import Header from '../../components/molecules/header';
import {confirmCart, removeItem} from '../../store/actions/cart.action';
import {styles} from './styles';

export const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const user = 1;

  const handleDeleteItem = id => dispatch(removeItem(id));
  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total, user));
  };

  const renderItem = ({item}) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );
  return (
    <View style={styles.container}>
      <Header name={'My Cart'} handleNavigation={() => navigation.goBack()} />
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.deliveryContainer}>
          <Text style={styles.delivery}>Delivery:</Text>
          <Text style={styles.deliveryPrice}>S/.0</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.totalPrice}>S/.{total}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleConfirmCart()}>
          <Text style={styles.buttonText}>Comprar por S/.{total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Cart);
