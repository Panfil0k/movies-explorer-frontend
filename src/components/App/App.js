import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';

import PageLayout from '../PageLayout/PageLayout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute';
import moviesAuth from '../../utils/auth';
import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const auth = (jwt) => {
    return moviesAuth.validationToken(jwt).then((res) => {
      if (res) {
        setLoggedIn(true);
        setUserData(res);
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth(jwt);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies');
    }
  }, [loggedIn]);

  const onRegister = ({ username, email, password }) => {
    return moviesAuth.register(username, email, password)
    .then((res) => {
      return res;
    })
    .then(() => {
      navigate('/signin')
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }

  const onLogin = ({ email, password }) => {
    return moviesAuth.authorize(email, password).then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }

  function signOut() {
    setLoggedIn(false);
    setUserData({});
    setCurrentUser({});
    localStorage.removeItem('jwt');
    navigate('/');
  }

  useEffect(() => {
    mainApi.getUserInfo()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }, [loggedIn])

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path='/' element={<Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies />
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    userData={userData}
                    signOut={signOut}
                  />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path='/signin' element={<Login onLogin={onLogin} />} />
          <Route path='/signup' element={<Register onRegister={onRegister} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
