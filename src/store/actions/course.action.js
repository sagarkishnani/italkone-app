import {courseTypes} from '../types/course.types';

const {SELECT_COURSE} = courseTypes;

export const selectCourse = courseId => ({
  type: SELECT_COURSE,
  courseId,
});
