import { Outlet } from 'react-router-dom';

import Header from './ui-components/Header';
import NavBar from './ui-components/NavBar';

function App() {
  return (
    <div className="App">
      <Header>
        <NavBar />
      </Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
