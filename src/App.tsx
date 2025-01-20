import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Goals from './pages/Goals';
import ExerciseLibrary from './pages/ExerciseLibrary';
import Progress from './pages/Progress';
import Nutrition from './pages/Nutrition';
import Layout from './components/Layout';
import Landing from './pages/Landing';

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user } = useAuth();
//   return user ? <>{children}</> :<Login />;
// };

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = localStorage.getItem('token');
  return auth ? <>{children}</> :<Login />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="goals" element={<Goals />} />
            <Route path="exercises" element={<ExerciseLibrary />} />
            <Route path="progress" element={<Progress />} />
            <Route path="nutrition" element={<Nutrition />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;