import React, { useEffect, useState } from "react";
import { Anchor, Box, Grommet, Spinner, Text } from "grommet";

export const MovieList = () => {
  const movieListAPI =
    "https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/movies";
  const [list, setList] = useState();

  useEffect(() => {
    fetch(movieListAPI)
      .then((response) => response.json())
      .then(setList);
  }, []);

  if (list === undefined) {
    return <Spinner size="large" />;
  }
  console.log(list);
  return (
    <Box>
      <ul>
        {list.map((movie) => (
          <Text>
            <li key={movie.id}>
              {movie.score * 100}% <Anchor href="#" label={movie.title} />(
              {movie.year})
            </li>
          </Text>
        ))}
      </ul>
    </Box>
  );
};
