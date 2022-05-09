import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/constants/theme';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import SearchInput from '../../components/atoms/search';
import CategoryGrid from '../../components/molecules/category-grid';
import {selectCourse} from '../../store/actions/course.action';
import {USERS} from '../../../assets/constants/profile';
import {styles} from '../home/styles';
import {connect, useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const users = USERS;
  const courses = useSelector(state => state.courses.courses);
  const handleSelectedCourse = course => {
    dispatch(selectCourse(course.id));
    navigation.navigate('Course');
  };
  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectedCourse} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>Hello, {users[0].name}</Text>
          <Text style={styles.profileMessage}>¡Te damos la bienvenida!</Text>
        </View>
        <Image style={styles.image} source={{uri: `${users[0].image}`}} />
      </View>
      <SearchInput
        placeholder="Buscar"
        placeholderTextColor={colors.darkgray}
      />
      <View>
        <View style={styles.coursesContainer}>
          <Text style={styles.title}>Cursos</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Category', {name: 'Cursos'})}>
            <Text style={styles.seeAll}>
              Ver todos
              <IonicIcons
                name="ios-chevron-forward"
                color={colors.blue}
                size={20}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={courses}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default connect()(Home);
