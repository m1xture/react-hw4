const Feedback = ({ cb }) => {
  return (
    <>
      <h1>Please, leave feedback</h1>
      <ul>
        <li>
          <button type="button" onClick={cb}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={cb}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={cb}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
