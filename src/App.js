import "./App.css";
import React from "react";
import { Grommet } from "grommet";
import { LandingHeader } from "./Components/LandingHeader/LandingHeader";
import { MovieList } from "./Components/MovieList/MovieList";

function App() {
  return (
    <Grommet>
      <LandingHeader />
      <MovieList />
    </Grommet>
  );
}

export default App;
