import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

interface Props {
  result: TheMovieDBResult;
}
export default function Card({ result }: Props) {
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        {/* Image */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
          alt={"image is not available"}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{ maxWidth: "100%", maxHeight: "auto" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />

        {/* Card Content */}
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            <p className="truncate">
              {result.release_date || result.first_air_date}
            </p>
            <FiThumbsUp className="mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
