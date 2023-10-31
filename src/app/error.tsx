"use client";

import { NextPageContext } from "next";
import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(`Error occur; Status code: ${error}`);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <p>
        {error
          ? `An error occurred on server; ${error.message}`
          : "An error occurred on client"}
      </p>

      <button
        className="hover:text-amber-600 border-2 hover:border-amber-600 p-2"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
