import React from 'react';

import Post from '../../posts/containers/Post';
import Loading from '../../shared/components/Loading';

import api from '../../api';

import styles from './Page.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      posts: [],
      loading: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    this.initialFetch();
    window.addEventListener('scroll', this.handleScroll);
  }

  async initialFetch() {
    const posts = await api.posts.getList(this.state.page);
    this.setState({
      posts,
      page: this.state.page + 1,
      loading: false,
    });
  }

  handleScroll() {
    if (this.state.loading) {
      return null;
    }

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    }

    return this.setState({ loading: true }, async () => {
      try {
        const posts = await api.post.getList(this.state.page);

        this.setState({
          post: this.state.posts.concat(posts),
          page: this.state.page + 1,
          loading: false,
        });
      } catch (error) {
        console.error(error);
        this.setState({ loading: false });
      }
    });
  }

  componentDidUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <section name="Home" className={styles.section}>
        <section className={styles.list}>
          {this.state.posts
            .map(post => <Post key={post.id} {...post} />)
          }
          {this.state.loading && (
            <Loading />
          )}
        </section>
      </section>
    );
  }
}

export default Home;
