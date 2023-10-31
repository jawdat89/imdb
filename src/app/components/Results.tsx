import React from "react";

interface Props {
  results: TheMovieDBResult[];
}
export default function Results({ results }: Props) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
