import { Outlet } from 'react-router-dom';

import Header from './ui-components/Header';
import NavBar from './ui-components/NavBar';

function App() {
  return (
    <div className="App">
      <Header align={'flex-end'} height={'35vh'} color={'transparent'}>
        <NavBar
          height={'8px'}
          justify={'flex-end'}
          padding={'2rem 4rem'}
          gap={'1.5rem'}
        />
      </Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
