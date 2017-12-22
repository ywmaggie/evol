const MainMenu = require('./Mainmenu');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

class Index extends React.Component {
  render() {
    const  contentHtml = ReactDOMServer.renderToString(<MainMenu />);
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
          />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: contentHtml}} />

          <script src="/main.js" />
          <script dangerouslySetInnerHTML={{__html: initScript}} />
        </body>
      </html>
    );
  }
}

// Card.propTypes = {
//   cards: PropTypes.string,
// };

module.exports = Index;
