import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';  

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem('userToken'); 

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children 
        ) : (
          <Navigate to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default PrivateRoute;
