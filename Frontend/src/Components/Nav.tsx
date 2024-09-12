import { Link } from 'react-router-dom'
import { useAuth } from '../Context/useAuth'

const Nav = () => {
    const { isLoggedIn, user, logout } = useAuth();

      return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-semibold">AutoGpt</div>
            <div className="flex space-x-4">
              {isLoggedIn() ? (
                <a onClick={logout} className="text-gray-300 hover:text-white">Logout</a>
              ) : (
                <>
                    <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                    <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
                </>
              )}
              <Link to="/blocks" className="text-gray-300 hover:text-white">Blocks</Link>
              <Link to="/executions" className="text-gray-300 hover:text-white">History</Link>
            </div>
          </div>
        </nav>
      );
}

export default Nav
