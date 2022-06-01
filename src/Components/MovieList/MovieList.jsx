import React from "react";
import { Box } from "grommet";
import { MovieDetail } from "../MovieDetail/MovieDetail";

export const MovieList = ({ movieList }) => {
  return (
    <Box>
      <ul>
        {movieList.map((movie) => (
          <MovieDetail
            image={movie["cover-url"]}
            movieScore={movie.score}
            movieUrl={movie.url}
            movieTitle={movie.title}
            movieYear={movie.year}
            movieSynopsis={movie.synopsis}
          />
        ))}
      </ul>
    </Box>
  );
};
