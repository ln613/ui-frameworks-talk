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
          <h3>Agenda</h3>
          <ul>
            <li>Evolution of UI technologies</li>
            <li>Comparison of JS UI frameworks</li>
          </ul>
        </section>

        <section>
          <h3>Evolution of UI technologies</h3>
          <ul>
            <li>Message loop</li>
            <li>Event based</li>
            <li>MVC</li>
            <li>MVVM (2-way data binding)</li>
            <li>State driven (1-way data binding)</li>
          </ul>
        </section>

        <section>
          <h3>Event Based</h3>
          <ul>
            <li>WinForms / ASP.Net WebForms</li>
            <li>No Separation of Concerns</li>
            <li>WebForms: WinForms over Http</li>
            <ul>
              <li>Http is stateless</li>
              <li>Serialization (whole page)</li>
              <li>Validation can be reused</li>
            </ul>
          </ul>
        </section>

        <section>
          <h3>MVC</h3>
          <ul>
            <li>Separation of Concerns</li>
            <li>Model has no knowledge of view</li>
            <li>Model supports multiple views</li>
            <li>Controller</li>
            <ul>
              <li>Handle user events</li>
              <li>Send updates to Model</li>
              <li>Send data to view</li>
            </ul>
            <li>Just a structure</li>
            <li>Use jQuery/Async to reduce full page load</li>
          </ul>
        </section>

        <section>
          <h3>MVVM (2-Way Data Binding)</h3>
          <ul>
            <li>Separation of Concerns</li>
            <li>Model has no knowledge of view</li>
            <li>Model supports multiple views</li>
            <li>Controller</li>
            <ul>
              <li>Handle user events</li>
              <li>Send updates to Model</li>
              <li>Send data to view</li>
            </ul>
            <li>Just a structure</li>
          </ul>
        </section>

      </div>
    );
  }
}

export default App;
