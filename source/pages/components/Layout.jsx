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
          href={`${props.domain}/styles.css`}
        />
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        <script src={`${props.domain}/app.js"`} />
      </body>
    </html>
  );
}

Layout.defaultProps = {
  title: '',
  content: '',
  domain: '',
};

Layout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  domain: PropTypes.string,
};

export default Layout;
