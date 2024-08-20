import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Fondo from './components/Fondo';
import Rutas from "./components/Rutas";
import Hablame from './components/Hablame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Fondo />} />
        <Route path='/rutas' element={<Rutas />} />
        <Route path='/hablame' element={<Hablame />} />
      </Routes>
    </Router>
  );
}

export default App;
