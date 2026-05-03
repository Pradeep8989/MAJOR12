import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {

  const token = localStorage.getItem('token');

  return token
    ? children
    : <Navigate to="/auth" />;

}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/auth"
          element={<AuthPage />}
        />

       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;