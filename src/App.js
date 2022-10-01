import logo from './images/logo.svg';
import './styles/App.css';

import {GameWrapper} from "./components/common/GameWrapper";
import SplashScreen from "./components/scenes/SplashScreen";

function App() {
  return (
    <div className="App">
      <GameWrapper>
          <SplashScreen/>
      </GameWrapper>
    </div>
  );
}

export default App;
