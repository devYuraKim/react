function Question({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <p>{question}</p>
      ))}
    </div>
  );
}

export default Question;
