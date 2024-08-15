const Statistics = ({ data }) => {
  const sum = Object.values(data).reduce((acc, num) => acc + num, 0);
  const positivePercent = (data.good / sum) * 100;
  return (
    <>
      <h2>Statistics</h2>
      {sum !== 0 && (
        <ul>
          <li>
            <p>
              Good: <span data-good>{data.good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral: <span data-neutral>{data.neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad: <span data-bad>{data.bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total:
              <span data-total>{sum}</span>
            </p>
          </li>
          <li>
            <p>
              Positive feedback:
              <span data-total>
                {!isNaN(positivePercent) ? Math.round(positivePercent) : 0}%
              </span>
            </p>
          </li>
        </ul>
      )}
    </>
  );
};

export default Statistics;
