import Student from "./Student";

const StudentList = ({students}) => {
  return (
    <div>
      <h1>Student List</h1>
      {students.map(student =>
        <Student student={student}/>
      )}
    </div>
  )
}

export default StudentList;