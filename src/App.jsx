import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home'; 
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Strona Główna</Link>
            </li>
            <li>
              <Link to="/register">Rejestracja</Link>
            </li>
            <li>
              <Link to="/login">Logowanie</Link>
            </li>
            <li>
              <Link to="/contacts">Kontakty</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Prywatna strona - Kontakty */}
          <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
