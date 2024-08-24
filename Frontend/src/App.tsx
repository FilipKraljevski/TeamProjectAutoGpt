import logo from './logo.svg';
import './App.css';
import { UserProvider } from './Context/useAuth';
import LoginPage from './Pages/LoginPage';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <UserProvider>
      <Outlet />
      <ToastContainer/>
    </UserProvider>
  );
}

export default App;
