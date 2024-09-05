function Question({ questions, index }) {
  const question = questions[index];
  return (
    <div>
      <p>{question.id}</p>
    </div>
  );
}

export default Question;
