import React, { Component } from 'react';
import 'reveal.js/lib/js/head.min';
import Reveal from 'reveal.js/js/reveal';
import hljs from 'highlight.js/lib/highlight';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/beige.css';
import 'highlight.js/styles/vs.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    Reveal.initialize({
      dependencies: [
        { src: 'highlight.js/lib/highlight', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
      ]
    });
  }
  
  render() {
    return (
      <div className="slides">

        <section>
          <h1>UI Frameworks</h1>
        </section>

        <section>
          <h1>UI Frameworks</h1>
        </section>

      </div>
    );
  }
}

export default App;
