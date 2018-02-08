import React, { Component } from 'react';
import 'reveal.js/lib/js/head.min';
import Reveal from 'reveal.js/js/reveal';
import hljs from 'highlight.js/lib/highlight';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/beige.css';
import 'highlight.js/styles/vs.css';
import './App.css';
import img1 from './1.png';
import img2 from './2.png';

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
            <li>VB (UI Controls)</li>
            <li>WinForms / ASP.Net WebForms</li>
            <li>No Separation of Concerns</li>
            <li>Manipulate controls in event handlers</li>
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
            <li>Maintain UI</li>
            <li>Use jQuery/Async to reduce full page reload</li>
          </ul>
        </section>

        <section>
          <h3>Client Side Rendering</h3>
          <ul>
            <li>Smart Client (desktop), Mobile App, Web App</li>
            <li>R/W Data through Web Service/Api</li>
            <li>Due to improvement of JS/HTML/CSS</li>
            <li>Pros:</li>
            <ul>
              <li>No full-page re-render</li>
              <li>Stateful, dynamic UI/Rich interactions</li>
              <li>minimal server dependency (Offline, Meteor)</li>
              <li>UWP, Xamarin, React Native, PhoneGap/Cordova</li>
            </ul>
            <li>Cons:</li>
            <ul>
              <li>Initial loading time (build tools, minify, combine)</li>
              <li>No SEO</li>
            </ul>
          </ul>
        </section>

        <section>
          <h3>MVVM (2-Way Data Binding)</h3>
          <ul>
            <li>UI {'<'}={'>'} ViewModel/State (Change Detection)</li>
            <li>Separate UI logic from UI elements</li>
            <li>Pros:</li>
            <ul>
              <li>Fewer responsibilities on UI/Model sync</li>
              <li>Swappable UI (Xamarin)</li>
            </ul>
            <li>Cons:</li>
            <ul>
              <li>No state management</li>
              <li>ViewModel not pure objects (observable)</li>
            </ul>
            <li>WPF, Silverlight, UWP (Metro, Modern Apps)</li>
            <li>Ember, Knockout, Angular 1 (Angular 2, Vue)</li>
          </ul>
        </section>

        <section>
          <h3>State Driven (1-way data binding)</h3>
          <ul>
            <li>State ={'>'} UI</li>
            <li>UI is derived from State</li>
            <li>Virtual DOM (Define a representation of UI)</li>
            <li>Maintaining UI is no longer our responsibility</li>
            <li>High performance (must ensure immutability)</li>
            <li>State management (Redux)</li>
            <li>React/Redux, Cycle, (Angular 2, Vue)</li>
          </ul>
        </section>

        <section>
          <h3>Functional Programming</h3>
          <ul>
            <li>SOC, single responsibility, immutability</li>
            <li>Pure function, no side effect</li>
            <li>Side effect handled by external library:</li>
            <ul>
              <li>DB: Entity Framework</li>
              <li>UI: React</li>
              <li>Memory: Redux</li>
              <li>Http: no-redux</li>
            </ul>
            <li>Much fewer responsibilities, thus high quality</li>
            <li>FP languages too restrictive</li>
            <li>React: best of both worlds (OOP + FP)</li>
          </ul>
        </section>

        <section>
          <h3>VUE</h3>
          <ul>
            <li>By default 2-way data-binding</li>
            <li>Also supports 1-way data-binding (Virtual DOM)</li>
            <li>Change Detection: Observable (getter/setter)</li>
            <li>Redux - revue/Vuex</li>
            <li>Small learning curve</li>
          </ul>
        </section>

        <section>
          <h3>Angular 2</h3>
          <ul>
            <li>By default 1-way data-binding (Zone)</li>
            <li>Also supports 2-way data-binding</li>
            <li>Change Detection: Observable/Immutability</li>
            <li>Redux - ngrx</li>
            <li>Big learning curve</li>
            <li>FRP, TypeScript</li>
          </ul>
        </section>

        <section>
          <h3>Component Model</h3>
          <ul>
            <li>React: JS class/function, JSX</li>
            <div className="indent">Stateless/Pure function/component</div>
            <li>Angular: Template (inline template is string)</li>
            <div className="indent">Weird syntax for stateless component</div>
            <li>Vue: Template/JSX</li>
            <div className="indent">Stateless component similar to react, easy accesss to context</div>
          </ul>
        </section>

        <section>
          <h3>UI Engine/Change Detection</h3>
          <ul>
            <li>React: Virtual DOM, Immutability</li>
            <li>Angular: Zone, Observable/Immutability</li>
            <li>Vue: Virtual DOM, Observable/Immutability</li>
          </ul>
        </section>

        <section>
          <h3>State Management</h3>
          <ul>
            <li>React: Redux</li>
            <li>Angular: 2-way data-binding, FRP, ngrx</li>
            <li>Vue: 2-way data-binding, vuex</li>
          </ul>
        </section>

        <section>
          <h3>% Functional</h3>
          <ul>
            <li>React + Redux: 80%</li>
            <li>Angular: 50% (with ngrx and FRP), 20% w/o</li>
            <li>Vue: 20%</li>
          </ul>
        </section>

        <section>
          <h3>Size of library</h3>
          <ul>
            <li>React: 43K</li>
            <li>Angular: 143K</li>
            <li>Vue: 23K</li>
          </ul>
        </section>

        <section>
          <h3>Number of NPM downloads (1 year)</h3>
          <ul>
            <li>React: 64M</li>
            <li>Angular 2 ~ 5: 21M</li>
            <li>Vue: 9M</li>
            <li>jQuery: 49M</li>
            <li>https://npm-stat.com/charts.html?package=react</li>
            <li>https://npm-stat.com/charts.html?package=%40angular%2Fcore</li>
          </ul>
        </section>

        <section>
          <h3>Jobs</h3>
          <div className="f">
          <div>
            <div>2017</div>
            <img src={img2}/>
          </div>
          <div>
            <div>2016</div>
            <img src={img1}/>
          </div>
          </div>
        </section>

        <section>
          <h3>Angular 2/VUE</h3>
          <ul>
            <li>Mainly 2-way data-binding</li>
            <li>Observable</li>
            <li>Based on "Change"</li>
            <li>Just another framework</li>
            <li>Copy React/Redux ideas, but not focused on FP</li>
            <li>Skills learned may not be useful in the future</li>
          </ul>
        </section>

      </div>
    );
  }
}

export default App;
