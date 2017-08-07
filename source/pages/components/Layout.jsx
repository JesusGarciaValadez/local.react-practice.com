import React from 'react';
import PropTypes from 'prop-types';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/normalize@0.3.1/lib/normalize/"
        />
        <link
          rel="stylesheet"
          href="http://localhost:3001/styles.css"
        />
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        <script src="http://localhost:3001/app.js" />
      </body>
    </html>
  );
}

Layout.defaultProps = {
  title: '',
  content: '',
};

Layout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Layout;
