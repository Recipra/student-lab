const StudentList = ({students}) => {
  return (
    <>
      <h1>Student List</h1>
      {students.map(student =>
        <h2>{student.name}</h2>
      )}
    </>
  )
}

export default StudentList;