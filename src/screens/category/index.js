import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {styles} from './styles';
import CourseGrid from '../../components/molecules/course-grid/index';
import {COURSES} from '../../../assets/constants/courses';

const Category = () => {
  const renderItem = ({item}) => <CourseGrid item={item} />;
  let numColumns = 2;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursos</Text>
      <FlatList
        columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
        numColumns={numColumns}
        data={COURSES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Category;
