import React, { useEffect, useState } from "react";
import { Anchor, Box, Text } from "grommet";
import { MovieDetail } from "../MovieDetail/MovieDetail";

export const MovieList = ({ list }) => {
  return (
    <Box>
      <ul>
        {list.map((movie) => (
          <MovieDetail
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
