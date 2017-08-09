import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import api from '../../api';

import styles from './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: props.user || null,
      comments: props.comments || null,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    if (!!this.state.user && !!this.state.comments) {
      return this.setState({
        loading: false,
      });
    }

    const [
      user,
      comments,
    ] = await Promise.all([
      !this.state.user ? api.users.getSingle(this.props.userId) : Promise.resolve(null),
      !this.state.user ? api.posts.getComments(this.props.id) : Promise.resolve(null),
    ]);

    return this.setState({
      loading: false,
      user: user || this.state.user,
      comments: comments || this.state.comments,
    });
  }

  render() {
    return (
      <article id={`post-${this.props.id}`} className={styles.post}>
        <h2 className={styles.titles}>
          <Link to={`/post/${this.props.id}`}>
            {this.props.title}
          </Link>
        </h2>
        <p className={styles.body}>
          {this.props.body}
        </p>
        {!this.state.loading && (
          <div className={styles.meta}>
            <Link to={`/user/${this.state.user.id}`} className={styles.user}>
              {this.state.user.name}
            </Link>

            <span className={styles.comments}>
              <FormattedMessage
                id="post.meta.comments"
                values={{
                  amount: this.state.comments.length,
                }}
              />
            </span>
            <Link to={`/post/${this.props.id}`}>
              <FormattedMessage id="post.meta.readMore" />
            </Link>
          </div>
        )}
      </article>
    );
  }
}

Post.defaultProps = {
  id: 0,
  userId: 0,
  title: '',
  body: '',
  user: [],
  comments: [],
};

Post.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

export default Post;
