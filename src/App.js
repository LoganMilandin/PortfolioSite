import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SpikePong from "./spikePong/SpikePong";
import Snake from "./snake/Snake";
import './App.css';
import './spikePongStyles.css';



function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pong">Pong</Link>
            </li>
            <li>
              <Link to="/snake">Snake</Link>
            </li>
          </ul>
        </nav>

      </div>
      <Routes>
          <Route path="/pong" element={<SpikePong />}/>
          <Route path="/snake" element={<Snake />}/>
          <Route path="/" element={<>home</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
