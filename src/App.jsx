import '../src/App.css';

import { Outlet } from 'react-router-dom';

import LayaoutGeneral from './Layout/LayoutGeneral';
import Footer from './ui-components/Footer';
import Header from './ui-components/Header';
import Hero from './ui-components/Hero';
import NavBar from './ui-components/NavBar';

function App() {
  return (
    <div className="App">
      <LayaoutGeneral>
        <Header align={'flex-end'} height={'35vh'} color={'transparent'}>
          <Hero />
          <NavBar
            height={'8px'}
            justify={'flex-end'}
            padding={'2rem 4rem'}
            gap={'1.5rem'}
          />
        </Header>
        <Outlet></Outlet>
        <Footer justify={'space-between'} padding={'2rem 4rem'}></Footer>
      </LayaoutGeneral>
    </div>
  );
}

export default App;
