import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

async function getMovie(id: string) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
}

export default async function MoviePage({ params }: Props) {
  const movieId = params.id;
  const res = await getMovie(movieId);

  const movie = (await res.json()) as TheMovieDBMovieDetails;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={"Movie poster"}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>

          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Release Date:</span>
            {movie.release_date}
          </p>

          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Vote Count:</span>
            {movie.vote_count}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Vote Average:</span>
            {movie.vote_average}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Popularity:</span>
            {movie.popularity}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Status:</span>
            {movie.status}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Tagline:</span>
            {movie.tagline}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Runtime:</span>
            {movie.runtime}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Budget:</span>
            {movie.budget} USD
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Revenue:</span>
            {movie.revenue} USD
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Homepage:</span>
            <Link
              className="text-blue-800 dark:text-blue-300 underline "
              href={movie.homepage}
            >
              {movie.homepage}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
