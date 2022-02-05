import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchStudents} from '../redux/store'

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    }
componentDidMount() {
  this.props.fetchStudents();
}

  render() {
    return (
      <ul>
        {this.props.students.map((student) => (
          <li key={student.id}>
            <div>
              <p>Name: {student.fullName}</p>
              <p>Email: {student.email}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
	students: state.students
});

const mapDispatchToProps = (dispatch) => ({
	fetchStudents: () => dispatch(fetchStudents()),

});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

// export default StudentList;
