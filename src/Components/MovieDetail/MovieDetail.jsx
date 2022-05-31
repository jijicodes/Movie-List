import React, { useState } from "react";
import { Anchor, Box, Text } from "grommet";

export const MovieDetail = ({
  movieScore,
  movieUrl,
  movieTitle,
  movieYear,
  movieSynopsis,
}) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Box>
      <Box onClick={() => setCollapse(!collapse)}>
        <Text>
          {movieScore * 100}%
          <Anchor target="_blank" href={movieUrl} label={movieTitle} />(
          {movieYear})
        </Text>
      </Box>
      {collapse ? (
        <Box background="#f3f3f3" pad="small">
          <Text>{movieSynopsis}</Text>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};
