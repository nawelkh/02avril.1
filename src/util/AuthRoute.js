import React from 'react';
import { Route, Redirect } from 'react-router-dom';


//si jamais lutilisateur est connecté il ne pourra pas se redireger vers connex ou inscription 

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Redirect to="/profil" /> : <Component {...props} />
    }
  />
);



  
  export default AuthRoute ;
  