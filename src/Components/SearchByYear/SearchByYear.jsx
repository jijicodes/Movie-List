import React, { useState } from "react";
import { Box, Text, Select, NameValueList, NameValuePair } from "grommet";

export const SearchByYear = ({ year, onYearChange, yearOptions }) => {
  return (
    <NameValueList>
      <NameValuePair name="Decades:">
        <Select
          options={yearOptions}
          value={year}
          onChange={(e) => {
            onYearChange(
              e.target.value !== "All" ? Number(e.target.value) : "All"
            );
          }}
        />
      </NameValuePair>
    </NameValueList>
  );
};
