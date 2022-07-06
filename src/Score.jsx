const Score = ({score}) => {
  return (
    <>
      <h3>Date: {score.date}</h3>
      <h3>Score: {score.score}</h3>
    </>
  );
}

export default Score;