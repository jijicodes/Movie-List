import "./App.css";
import React, { useEffect, useState } from "react";
import { Grommet, Box, Spinner } from "grommet";
import { LandingHeader } from "./Components/LandingHeader/LandingHeader";
import { MovieList } from "./Components/MovieList/MovieList";
import { SearchByTitle } from "./Components/SearchByTitle/SearchByTitle";
import { SearchByYear } from "./Components/SearchByYear/SearchByYear";

const uniq = (xs) =>
  xs.reduce(
    (uniques, x) => (uniques.includes(x) ? uniques : [...uniques, x]),
    []
  );

function App() {
  const movieListAPI =
    "https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/movies";
  const [list, setList] = useState();
  const [titleSearch, setTitleSearch] = useState("");
  const [year, setYear] = useState("All");
  console.log("year", year, list);

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

  const titleFilteredMovies =
    titleSearch.length < 1
      ? list
      : list.filter((a) =>
          a.title.toLowerCase().includes(titleSearch.toLowerCase())
        );

  const yearFilteredMovies =
    year === "All"
      ? titleFilteredMovies
      : titleFilteredMovies.filter(
          (movie) => movie.year >= year && movie.year < year + 10
        );

  if (list === undefined) {
    return <Spinner size="large" />;
  }

  return (
    <Grommet>
      <LandingHeader />
      <Box border direction="column" pad="small">
        <SearchByTitle text={titleSearch} onTitleChange={setTitleSearch} />
        <SearchByYear
          year={year}
          onYearChange={setYear}
          yearOptions={[
            "All",
            ...uniq(
              titleFilteredMovies
                .map(({ year }) => Math.floor(Number(year) / 10) * 10)
                .sort()
            ),
          ]}
        />
      </Box>
      <MovieList movieList={yearFilteredMovies} />
    </Grommet>
  );
}

export default App;
