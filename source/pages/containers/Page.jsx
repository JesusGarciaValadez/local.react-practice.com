import React from 'react';
import {
  Match,
  Miss,
} from 'react-router';

import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from '../../shared/components/Header';
import Error404 from './Error404';

function Pages() {
  return (
    <main role="applicaction">
      <Header />

      {/* Lista de artículos */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      {/* Detalle de artículo */}
      <Match
        pattern="/post/:id"
        exactly
        component={Post}
      />
      {/* Perfil de usuario */}
      <Match
        pattern="/user/:id"
        exactly
        component={Profile}
      />
      <Miss component={Error404} />
    </main>
  );
}

export default Pages;
