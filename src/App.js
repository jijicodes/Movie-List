import "./App.css";
import React, { useEffect, useState } from "react";
import { Grommet, Box, Spinner } from "grommet";
import { LandingHeader } from "./Components/LandingHeader/LandingHeader";
import { MovieList } from "./Components/MovieList/MovieList";
import { SearchByTitle } from "./Components/SearchByTitle/SearchByTitle";
import { SearchByYear } from "./Components/SearchByYear/SearchByYear";

function App() {
  const movieListAPI =
    "https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/movies";
  const [list, setList] = useState();
  const [titleSearch, setTitleSearch] = useState("");
  useEffect(() => {
    fetch(movieListAPI)
      .then((response) => response.json())
      .then((result) =>
        result.sort((a, b) =>
          b.title < a.title ? 1 : b.title > a.title ? -1 : 0
        )
      )
      .then(setList)
      .catch((err) => err);
  }, []);
  console.log(list);

  if (list === undefined) {
    return <Spinner size="large" />;
  }

  return (
    <Grommet>
      <LandingHeader />
      <Box border direction="column" pad="small">
        <SearchByTitle onTitleChange={setTitleSearch} text={titleSearch} />
        <SearchByYear />
      </Box>

      <MovieList
        list={
          titleSearch.length < 1
            ? list
            : list.filter((a) =>
                a.title.toLowerCase().includes(titleSearch.toLowerCase())
              )
        }
      />
    </Grommet>
  );
}

export default App;
