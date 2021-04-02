import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//chemin 
import Actualite from './components/actualite/actualite'
import Groupes from './components/groupes/groupe'
import Groupeslist from './components/groupes/groupesList'
import Profil from './components/profil/profil'
import Inscription from './components/log/inscription'
//import Signin from './components/connexion/signIn'
//import Signup from './components/connexion/signUp'
import Forgetpass from './components/log/forgetpass'
import Page  from'./components/groupes/page'
import MyProfil from './components/profil/myProfil'

//redux
import axios from 'axios'
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

//route securisée 
import AuthRoute from './util/AuthRoute'

//css 
import "tailwindcss/tailwind.css";
import './App.css';

//decode le token 
import jwtDecode from "jwt-decode";



function App() {

  let authenticated;
  //le token generee lors de la connex 
  const token = localStorage.FBIdToken;
  //redux
  const dispatch = useDispatch();
  
  //condition sur le token 
  if (token) {
  
    const decodedToken = jwtDecode(token);
    
  //deconnexion si le decode est expire 
    if (decodedToken.exp * 1000 < Date.now()) {
      
      authenticated=false;
      localStorage.removeItem('FBIdToken');
      delete axios.defaults.headers.common['Authorization'];
      window.location.href = '/'
     
  //autorisation du headers sinon avec passage du token 
    } else { 
     
       axios.defaults.headers.common['Authorization'] = token; 
       dispatch(getUser());
       authenticated=true 
  
      }
  }
  

  return (
   
    <div className='App'>
       
      <BrowserRouter>
        <Switch>
          <Route path='/groupes' component={Groupes} />
          <Route path='/home' exact component={Actualite} />
          
          <Route path='/profil' exact component={Profil} />
          <Route path='/myprofil'   component={MyProfil}/>
        
          <Route path='/page' exact component={Page} />
          <AuthRoute path='/' exact component={Inscription} authenticated={authenticated}  />
          
          <Route path='/forget' exact component={Forgetpass} />
          <Route path='/groupesList' component={Groupeslist} />
        </Switch>
      </BrowserRouter>

      
    </div>
    
  );
}

export default App;
