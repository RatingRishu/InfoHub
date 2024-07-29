import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AosService {

  constructor() { }

  private cards = [
    {
      title: 'Before you start AOS',
      description:
        'AOS (Animate On Scroll) is a library that allows you to animate elements when they scroll into view. ',
      popupContent: `
        


      `,
    },
    {
      title: 'What is AOS',
      description:
        'AOS (Animate On Scroll) is a library that allows you to animate elements when they scroll into view. ',
      popupContent: `
       <p>Animate on Scroll (AOS) is an open-source JavaScript library that allows developers to add animations to web pages as users scroll. The library detects when elements appear in the viewport and adds classes for animation. AOS is designed to be easy to use and highly customizable, with HTML data attributes that can be added to any HTML element or React component.</p>
        <p>AOS. js (Animation on Scroll) is an animation-providing JavaScript library that makes it easier to add tons of animations by simply changing the name of the class in the div tag in which you want to add an animation. </p>
        <a href="https://michalsnik.github.io/aos/" target="_blank"> AOS </a>
      `,
    },
    {
      title: 'AOS in HTML',
      description:
        'Include AOS in Your HTML File',
      popupContent: `
       <p>Animate on Scroll (AOS) is an open-source JavaScript library that allows developers to add animations to web pages as users scroll. The library detects when elements appear in the viewport and adds classes for animation. AOS is designed to be easy to use and highly customizable, with HTML data attributes that can be added to any HTML element or React component.</p>
        <p>AOS. js (Animation on Scroll) is an animation-providing JavaScript library that makes it easier to add tons of animations by simply changing the name of the class in the div tag in which you want to add an animation. </p>

        <h2>Step 1: Include AOS in Your HTML File</h2>
      &lt;!DOCTYPE html&gt;<br>
      &lt;html lang="en"&gt;<br>
      &lt;head&gt;<br>
          &lt;meta charset="UTF-8"&gt;<br>
          &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br>
          &lt;title&gt;AOS Example&lt;/title&gt;<br>
          &lt;link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet"&gt;<br>
      &lt;/head&gt;<br>
      &lt;body&gt;<br>
          &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;<br>
          
          &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"&gt;&lt;/script&gt;<br>
          &lt;script&gt;<br>
              AOS.init();<br>
          &lt;/script&gt;<br>
      &lt;/body&gt;<br>
      &lt;/html&gt;<br>
     <h2>Step 2: Add AOS Attributes to HTML Elements</h2>
      &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;
      <br>
        <a href="https://michalsnik.github.io/aos/" target="_blank"> AOS </a>

      `,
    },
    {
      title: 'AOS in Angular',
      description: 'Explore the powerful features of AOS in Angular.',
      popupContent: `
        <p>Angular offers a suite of powerful features that enable developers to build robust and scalable applications:</p>
        <ul>
          <li>Step 1: Install AOS</li>
          <h6>npm install aos --save</h6>
          <li>Step 2: Add AOS to angular.json</li>
          <h6> "scripts": [
              "node_modules/aos/dist/aos.js"
            ],</h6>
          <li>Step 3: Initialize AOS in Angular Component</li>
          <br>
          <h6>
          import { Component, OnInit } from '@angular/core'; <br>
          import * as AOS from 'aos';<br>

          @Component({<br>
            selector: 'app-root',<br>
            templateUrl: './app.component.html',<br>
            styleUrls: ['./app.component.css']<br>
          })<br>
          export class AppComponent implements OnInit {<br>
            title = 'your-angular-app';<br>

            ngOnInit() {<br>
              AOS.init();<br>
            }<br>
          }<br>
          </h6>
          <li>Step 4: Use AOS Attributes in HTML Templates</li>
          <h6>
          &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;
          </h6>
          <h3>Done</h3>
        </ul>
                <a href="https://michalsnik.github.io/aos/" target="_blank"> AOS </a>

      `,
    },
    {
      title: 'AOS in React',
      description: 'Explore the powerful features of AOS in React.',
      popupContent: `
        <p>React offers a suite of powerful features that enable developers to build robust and scalable applications:</p>
        <ul>
          <li>Step 1: Install AOS</li>
          <h6>npm install aos --save</h6>
          <li>Step 2: Import AOS in Your React Component</li>
          <br>
          <h6>
          import React, { useEffect } from 'react';<br>
            import AOS from 'aos';<br>
            import 'aos/dist/aos.css';<br>

            function App() {<br>
              useEffect(() => {<br>
                AOS.init();<br>
              }, []);<br>

              return (<br>
                <div className="App"><br>
                  <div data-aos="fade-up">Animate me on scroll</div><br>
                </div><br>
              );<br>
            }<br>

            export default App;<br>
            </h6>
          <li>Step 3: Add AOS Attributes to JSX Elements</li>
          <br>
          <h6>
          &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;

          <h3>Done</h3>
        </ul>
                <a href="https://michalsnik.github.io/aos/" target="_blank"> AOS </a>

      `,
    },
    {
      title: 'AOS in VUE',
      description: 'Explore the powerful features of AOS in VUE.',
      popupContent: `
        <p>VUE offers a suite of powerful features that enable developers to build robust and scalable applications:</p>
        <ul>
          <li>Step 1: Install AOS</li>
          <h6>npm install aos --save</h6>
          <li>Step 2: Import AOS in Your Vue Component</li>
          <h6>
          &lt;template&gt;<br>
            &lt;div&gt;<br>
              &lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;<br>
            &lt;/div&gt;<br>
          &lt;/template&gt;<br>

          &lt;script&gt;<br>
          import AOS from 'aos';<br>
          import 'aos/dist/aos.css';<br>

          export default {<br>
            name: 'App',<br>
            mounted() {<br>
              AOS.init();<br>
            }<br>
          };<br>
          &lt;/script&gt;<br>
 
          </h6>
          <li>&lt;div data-aos="fade-up"&gt;Animate me on scroll&lt;/div&gt;</li>
          <br>
          <h6>
        <h3>Done</h3> 
        </ul>
                <a href="https://michalsnik.github.io/aos/" target="_blank"> AOS </a>

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
