import React, { useEffect, useState } from "react";
import { Anchor, Box, Grommet, Text } from "grommet";

export const MovieList = ({ list }) => {
  return (
    <Box>
      <ul>
        {list.map((movie) => (
          <Text>
            <li key={movie.id}>
              {movie.score * 100}%{" "}
              <Anchor target="_blank" href={movie.url} label={movie.title} />(
              {movie.year})
            </li>
          </Text>
        ))}
      </ul>
    </Box>
  );
};
