import React, { useState, useEffect } from "react";
import { TextInput, NameValueList, NameValuePair } from "grommet";

export const SearchByTitle = ({ text, onTitleChange }) => {
  return (
    <NameValueList>
      <NameValuePair name="Title contains:">
        <TextInput
          placeholder="search by title"
          value={text}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </NameValuePair>
    </NameValueList>
  );
};
