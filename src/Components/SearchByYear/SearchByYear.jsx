import React, { useState } from "react";
import { Box, Text, Select, NameValueList, NameValuePair } from "grommet";

export const SearchByYear = () => {
  const [year, setYear] = useState();
  return (
    <NameValueList>
      <NameValuePair name="Decades:">
        <Select
          options={["1960", "1970", "1980", "1990", "2000", "2010"]}
          value={year}
          onChange={({ option }) => setYear(option)}
        />
      </NameValuePair>
    </NameValueList>
  );
};
