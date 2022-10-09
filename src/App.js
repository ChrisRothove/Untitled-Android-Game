
import './styles/App.css';

import {GameWrapper} from "./components/common/GameWrapper";
import SceneRouter from "./components/SceneRouter";

function App() {
  return (
    <div className="App">
      <GameWrapper>
          <SceneRouter/>
      </GameWrapper>
    </div>
  );
}

export default App;
