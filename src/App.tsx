import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => (
  <div className="app">
    <Header />

    <main className="main">
      <div className="container">
        <Outlet />
      </div>
    </main>

    <Footer />
  </div>
);