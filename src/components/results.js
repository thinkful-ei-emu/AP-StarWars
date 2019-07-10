import React from "react";

function Results(props) {
  const Results = props.results.map((result, index) => {
    return (
      <div>
          <li key={index}>
            <p>{result.name}</p>
          </li>
      </div>
    );
  });

  console.log(props.results);

  return <div>{Results}</div>;
}

export default Results;
