import Score from "./Score";

const Student = ({student}) => {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <h3>{student.bio}</h3>
      {student.scores.map(score =>
        <Score score={score}/>
      )}
    </div>
  );
}

export default Student;