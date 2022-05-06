import {COURSES} from '../../../assets/constants/courses';
import {courseTypes} from '../types/course.types';
const {SELECT_COURSE, FILTERED_COURSES} = courseTypes;

const initialState = {
  courses: COURSES,
  filteredCourses: [],
  selectedCourse: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COURSE:
      return {
        ...state,
        selectedCourse: state.courses.find(
          course => course.id === action.courseId,
        ),
      };
    case FILTERED_COURSES:
      return {
        ...state,
        filtered: state.courses.filter(
          course => course.category === action.categoryId,
        ),
      };
    default:
      return state;
  }
};

export default courseReducer;
