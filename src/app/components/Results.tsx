"use client";
import React, { useState } from "react";
import Card from "./Card";

interface Props {
  results: TheMovieDBResult[];
}

export default function Results({ results }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // or any other number you prefer

  // Calculate total pages
  const totalPages = Math.ceil(results.length / itemsPerPage);

  // Logic to get the current page's items
  const currentItems = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {currentItems.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>

      <div className="pagination-controls max-w-6xl mx-auto py-4 flex justify-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
