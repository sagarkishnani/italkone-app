import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {COURSES} from '../../../assets/constants/courses';
import {colors} from '../../../assets/constants/theme';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import SearchInput from '../../components/atoms/search';
import CategoryGrid from '../../components/molecules/category-grid';
import {styles} from '../home/styles';

const Home = () => {
  const courses = COURSES;
  const renderItem = ({item}) => <CategoryGrid item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>Hello, Aakash</Text>
          <Text style={styles.profileMessage}>¡Te damos la bienvenida!</Text>
        </View>
        <View>
          <Text>Hola</Text>
          <Image />
        </View>
      </View>
      <SearchInput
        placeholder="Buscar"
        placeholderTextColor={colors.darkgray}
      />
      <View>
        <View style={styles.coursesContainer}>
          <Text style={styles.title}>Cursos</Text>
          <Text style={styles.seeAll}>
            Ver todos
            <IonicIcons
              name="ios-chevron-forward"
              color={colors.blue}
              size={20}
            />
          </Text>
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

export default Home;
