import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={(
          <FavoritesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FavoritesProvider>
        )}
      >
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/phones">
          <Route index element={<PhonesPage />} />
          <Route path=":itemId" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/tablets">
          <Route index element={<TabletsPage />} />
          <Route path=":itemId" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/accessories">
          <Route index element={<AccessoriesPage />} />
          <Route path=":itemId" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);