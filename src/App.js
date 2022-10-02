import logo from './images/logo.svg';
import './styles/App.css';

import {GameWrapper} from "./components/common/GameWrapper";
import SplashScene from "./components/scenes/SplashScene";
import TextEntry from "./components/common/TextEntry";
import LoginScene from "./components/scenes/LoginScene";

function App() {
  return (
    <div className="App">
      <GameWrapper>
          {/*<SplashScene/>*/}
          {/*<TextEntry name={"Input"}/>*/}
          <LoginScene />
      </GameWrapper>
    </div>
  );
}

export default App;
