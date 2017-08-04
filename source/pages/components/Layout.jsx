import React from 'react';

function Layout ( props ) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="http://localhost:3001/styles.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/normalize@0.3.1/lib/normalize/"
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

export default Layout;