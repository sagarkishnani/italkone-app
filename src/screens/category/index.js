import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {styles} from './styles';
import CourseGrid from '../../components/molecules/course-grid/index';
import {COURSES} from '../../../assets/constants/courses';
import {selectCourse} from '../../store/actions/course.action';
import {useDispatch} from 'react-redux';

const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const handleSelectedCourse = course => {
    dispatch(selectCourse(course.id));
    navigation.navigate('Course');
  };

  const renderItem = ({item}) => (
    <CourseGrid item={item} onSelected={handleSelectedCourse} />
  );
  let numColumns = 2;
  return (
    <View style={styles.container}>
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
