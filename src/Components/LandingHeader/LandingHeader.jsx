import React from "react";
import { Grommet, Box, Text, Header } from "grommet";

export const LandingHeader = () => {
  return (
    <Box pad="medium" gap="medium">
      <Text weight="bold" size="50px">
        Movies Evan Likes!
      </Text>
      <Text size="25px">
        Below is a (not) comprehensive list of movies that Evan really likes.
      </Text>
      <Box
        pad={{ top: "medium" }}
        border={{
          side: "bottom",
          color: "#D9D9D9 ",
          size: "3px",
        }}
      />
    </Box>
  );
};
