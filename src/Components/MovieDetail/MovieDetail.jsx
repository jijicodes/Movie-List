import React, { useState } from "react";
import { Anchor, Box, Text, Image, Paragraph } from "grommet";

export const MovieDetail = ({
  movieScore,
  movieUrl,
  movieTitle,
  movieYear,
  movieSynopsis,
  image,
}) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Box gap="small">
      <Box onClick={() => setCollapse(!collapse)}>
        <Text>
          {movieScore * 100}%
          <Anchor target="_blank" href={movieUrl} label={movieTitle} />(
          {movieYear})
        </Text>
      </Box>
      {collapse ? (
        <Box
          background="#f3f3f3"
          pad="small"
          align="center"
          direction="row"
          justify="around"
        >
          <Box height="medium" width="30vw" align="center">
            <Image fit="cover" src={image}></Image>
          </Box>
          <Box width="40vw">
            <Paragraph>{movieSynopsis}</Paragraph>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};
