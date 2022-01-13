import MainPage from "./pages/MainPage";

import axios from "axios";
import { useEffect, useState } from "react";
import Pokemons from "./Pokemons";

const App = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"
  //       );
  //       console.log(res.data);
  //       setData(res.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <MainPage />
      {/* {data.map((pokemon) => (
        <div key={pokemon.name}>
          <Pokemons pokemon={pokemon} />
        </div>
      ))} */}
    </div>
  );
};

export default App;
