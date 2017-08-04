import React, { Component } from 'react';
import { Link } from 'react-router';

import Post from '../../posts/containers/Post.jsx';

import api from '../../api.js';

class Home extends React.Component {

  constructor () {
    super ( props );

    this.state = {
      page: 1,
      posts: [],
      loading: true,
    };
  }

  async componentDidMount () {
    const posts = await api.posts.getList ( this.state.page );

    this.setState ( {
      posts,
      page: this.state.page + 1,
      loading: false,
    } );
  }

  render () {
    return (
      <section name="home">
        <h1>Home</h1>

        <section>
          {this.state.loading && (
            <h2>Loading posts…</h2>
          )}
          {this.state.posts
            .map ( post => <Post key={} />)
          }
        </section>
        <Link to="/about">
          Go to about
        </Link>
      </section>
    );
  }
}

export default Home;