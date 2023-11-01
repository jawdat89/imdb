import Results from "@/app/components/Results";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    searchTerm: string;
  };
}

export default async function SearchPage({ params }: Props) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = (await res.json()) as TheMovieDBSearchResult;
  const results = data.results;

  return (
    <div className="max-w-6xl">
      {results && !results.length && <h2>No results found</h2>}
      {results && results.length && <Results results={results} />}
    </div>
  );
}
