import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Pages from './pages/containers/Page.jsx';
import Layout from './pages/components/Layout.jsx';

class MyComponent extends React.Component {
  render () {
    return (
      <h1>hola</h1>
    );
  }
}

function requestHandler ( request, response ) {
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <StaticRouter location={request.url} context={context}>
          <Pages />
        </StaticRouter>
      </IntlProvider>
    </Provider>,
  );

  response.setHeader( "Contect-Type", "text/html" );

  if ( context.url ) {
    response.writeHead( 301, {
      Location: context.url,
    } );

    response.end();
  }

  if ( result.missed ) {
    response.writeHead( 404 );

    html = renderToString(
      <ServerRouter location={request.url} context={context}>
        <Pages />
      </ServerRouter>
    );
  }

  response.write(
    renderToStaticMarkup(
      <Layout
        title="Aplicación"
        content={html}
      />
    )
  );
  response.end();
}

const server = http.createServer( requestHandler );

server.listen( 3000 );