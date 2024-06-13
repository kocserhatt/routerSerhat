import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ paddingTop: '50px' }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
