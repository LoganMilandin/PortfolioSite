import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SpikePong from "./spikePong/SpikePong";
import Snake from "./snake/Snake";
import ClimbingVideos from "./climbing/ClimbingVideos";
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
            <li>
              <Link to="/climbing">Climbing</Link>
            </li>
          </ul>
        </nav>

      </div>
      <Routes>
          <Route path="/pong" element={<SpikePong />}/>
          <Route path="/snake" element={<Snake />}/>
          <Route path="/" element={<>home</>}/>
          <Route path="/climbing" element={<ClimbingVideos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// <>
            
//             {/* <video width="320" height="240" controls>
//               <source src="https://drive.google.com/file/d/1s1L0muRCN_ZbBUNZxqBeKqFu5W4F96P-/preview" type="video/mp4" />
//             Your browser does not support the video tag.
//             </video> */}
//             {/* <iframe src="https://drive.google.com/file/d/1s1L0muRCN_ZbBUNZxqBeKqFu5W4F96P-/preview" width="640" height="480" allow="autoplay"></iframe> */}
//           </>