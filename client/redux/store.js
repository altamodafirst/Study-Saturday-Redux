import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
// import {Main} from '../components/main'
// import SingleStudent from '../components/SingleStudent'
// import StudentList from '../components/StudentList';
// ACTION TYPES go here:
const GETTING_STUDENTS = 'GETTING_STUDENTS'

// ACTION CREATORS go here:
//student has id, fullName, email
const _gettingStudents = (students) => {
	return {
		type: GETTING_STUDENTS,
		students,
	};
};

console.log("did we get students----", _gettingStudents);

// THUNK CREATORS go here:
export const fetchStudents= () => {
	return async (dispatch) => {
		const { data} = await axios.get('/api/students');
		dispatch(_gettingStudents(data));
	};
};

const initialState = {
  students: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_STUDENTS: {
      return {students: action.students}
    }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

// dispatch your own actions here to test your store functionality:

// ^ you can see the logs above in your console, thanks to redux-logger!

export default store;
