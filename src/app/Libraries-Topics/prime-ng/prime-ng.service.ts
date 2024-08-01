import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeNgService {

  constructor() { }

  private cards = [
    {
      title: 'Before you start Prime-Ng',
      description:
        'PrimeNG is a rich set of open source native Angular UI components. ',
      popupContent: `
      <br>
      <h6> Experience PrimeNG right now with the interactive environment. </h6>
      <br>
        <b>--></b> <a href="https://primeng.org/playground" target="_blank">  Prime-Ng </a>
       
      `,
    },
    {
      title: 'What is Prime-Ng',
      description:
        'PrimeNG is a rich set of open source native Angular UI components. ',
      popupContent: `
       <p>Animate on Scroll (Prime-Ng) is an open-source JavaScript library that allows developers to add animations to web pages as users scroll. The library detects when elements appear in the viewport and adds classes for animation. Prime-Ng is designed to be easy to use and highly customizable, with HTML data attributes that can be added to any HTML element or React component.</p>
        <p>Prime-Ng. js (Animation on Scroll) is an animation-providing JavaScript library that makes it easier to add tons of animations by simply changing the name of the class in the div tag in which you want to add an animation. </p>
        <a href="https://michalsnik.github.io/aos/" target="_blank"> Prime-Ng </a>
      `,
    },
    {
      title: 'Prime-Ng in HTML',
      description:
        'Include Prime-Ng in Your HTML File',
      popupContent: `
       <p>Animate on Scroll (Prime-Ng) is an open-source JavaScript library that allows developers to add animations to web pages as users scroll. The library detects when elements appear in the viewport and adds classes for animation. Prime-Ng is designed to be easy to use and highly customizable, with HTML data attributes that can be added to any HTML element or React component.</p>
        <p>Prime-Ng. js (Animation on Scroll) is an animation-providing JavaScript library that makes it easier to add tons of animations by simply changing the name of the class in the div tag in which you want to add an animation. </p>

      <a href="https://gist.github.com/user-attachments/assets/d133b2fe-6932-413d-9ab0-5c4f9bf62051" target="_blank">
            <img src="https://gist.github.com/user-attachments/assets/d133b2fe-6932-413d-9ab0-5c4f9bf62051" alt="Image description">
        </a>
        <p style="color: red;">Note: If the image is not showing properly, click on the image.</p>
      `,
    },
    {
      title: 'Prime-Ng in Angular',
      description: 'Explore the powerful features of Prime-Ng in Angular.',
      popupContent: `
        <p>Angular offers a suite of powerful features that enable developers to build robust and scalable applications:</p>
        <ul>
          <li>Step 1: Install Prime-Ng</li>
          <h6>npm install aos --save</h6>
          <li>Step 2: Add Prime-Ng to angular.json</li>
          <h6> "scripts": [
              "node_modules/aos/dist/aos.js"
            ],</h6>
          <li>Step 3: Initialize Prime-Ng in Angular Component</li>
          <br>
          <h6>
          import { Component, OnInit } from '@angular/core'; <br>
          import * as Prime-Ng from 'aos';<br>

          @Component({<br>
            selector: 'app-root',<br>
            templateUrl: './app.component.html',<br>
            styleUrls: ['./app.component.css']<br>
          })<br>
          export class AppComponent implements OnInit {<br>
            title = 'your-angular-app';<br>

            ngOnInit() {<br>
              Prime-Ng.init();<br>
            }<br>
          }<br>
          </h6>
          <li>Step 4: Use Prime-Ng Attributes in HTML Templates</li>
          <h6>
          &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;
          </h6>
          <h3>Done</h3>
        </ul>
                <a href="https://michalsnik.github.io/aos/" target="_blank"> Prime-Ng </a>

      `,
    },
    {
      title: 'Prime-Ng in React',
      description: 'Explore the powerful features of Prime-Ng in React.',
      popupContent: `
        <p>React offers a suite of powerful features that enable developers to build robust and scalable applications:</p>
        <ul>
          <li>Step 1: Install Prime-Ng</li>
          <h6>npm install aos --save</h6>
          <li>Step 2: Import Prime-Ng in Your React Component</li>
          <br>
          <h6>
          import React, { useEffect } from 'react';<br>
            import Prime-Ng from 'aos';<br>
            import 'aos/dist/aos.css';<br>

            function App() {<br>
              useEffect(() => {<br>
                Prime-Ng.init();<br>
              }, []);<br>

              return (<br>
                <div className="App"><br>
                  <div data-aos="fade-up">Animate me on scroll</div><br>
                </div><br>
              );<br>
            }<br>

            export default App;<br>
            </h6>
          <li>Step 3: Add Prime-Ng Attributes to JSX Elements</li>
          <br>
          <h6>
          &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;

          <h3>Done</h3>
        </ul>
                <a href="https://michalsnik.github.io/aos/" target="_blank"> Prime-Ng </a>

      `,
    },
    {
      title: 'Prime-Ng in VUE',
      description: 'Explore the powerful features of Prime-Ng in VUE.',
      popupContent: `
        <p>VUE offers a suite of powerful features that enable developers to build robust and scalable applications:</p>
        <ul>
          <li>Step 1: Install Prime-Ng</li>
          <h6>npm install aos --save</h6>
          <li>Step 2: Import Prime-Ng in Your Vue Component</li>
          <h6>
          &lt;template&gt;<br>
            &lt;div&gt;<br>
              &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;<br>
            &lt;/div&gt;<br>
          &lt;/template&gt;<br>

          &lt;script&gt;<br>
          import Prime-Ng from 'aos';<br>
          import 'aos/dist/aos.css';<br>

          export default {<br>
            name: 'App',<br>
            mounted() {<br>
              Prime-Ng.init();<br>
            }<br>
          };<br>
          &lt;/script&gt;<br>
 
          </h6>
          <li>&lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;</li>
          <br>
          <h6>
        <h3>Done</h3> 
        </ul>
                <a href="https://michalsnik.github.io/aos/" target="_blank"> Prime-Ng </a>

      `,
    },

  ];

  getCards() {
    return this.cards;
  }

  getCardByTitle(title: string) {
    return this.cards.find(card => card.title === title);
  }
}
