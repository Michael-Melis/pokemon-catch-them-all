import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import SelectedPokemonBasicInfo from './components/slectedPokemonInfo/selectedPokemonBasicInfo/SelectedPokemonBasicInfo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`/:name`} element={<SelectedPokemonBasicInfo />} />
      </Routes>
    </div>
  );
};

export default App;
