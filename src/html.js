import React from 'react';

function HTML({ headComponents, preBodyComponents, body, postBodyComponents }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Component Library Starter</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        {headComponents}
      </head>
      <body>
        {preBodyComponents}
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

export default HTML;
