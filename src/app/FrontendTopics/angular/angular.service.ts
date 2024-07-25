import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor() { }

  private cards = [
    {
      title: 'Before you start',
      description:
        'Like most modern frameworks, Angular expects you to be familiar with HTML, CSS and JavaScript.',
      popupContent: `
        <p>If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step. Grasp the basics and then come back! Prior experience with other frameworks helps, but is not required.</p>
        <p>In addition, you should be familiar with the following concepts:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes" target="_blank">JavaScript Classes</a></li>
          <li><a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank">TypeScript fundamentals</a></li>
          <li><a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank">TypeScript Decorators</a></li>
        </ul>
      `,
    },
    {
      title: 'What is Angular',
      description:
        'A web framework that empowers developers to build fast, reliable applications.',
      popupContent: `
        <p>Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, Angular provides a way to build applications for the web, mobile, and desktop.</p>
        <ul>
          <li>Angular combines declarative templates, dependency injection, end-to-end tooling, and integrated best practices to solve development challenges.</li>
          <li>It empowers developers to create applications that can run on multiple platforms, including web, mobile, and desktop, with a unified codebase.</li>
        </ul>
      `,
    },
    {
      title: 'Features',
      description: 'Explore the powerful features of Angular.',
      popupContent: `
        <p>Angular offers a suite of powerful features that enable developers to build robust and scalable applications:</p>
        <ul>
          <li>Two-way data binding</li>
          <li>Dependency injection</li>
          <li>Reactive programming with RxJS</li>
          <li>Component-based architecture</li>
          <li>Modular development structure</li>
          <li>Rich templating syntax</li>
        </ul>
      `,
    },
    {
      title: 'SPA',
      description: 'Learn about Single Page Applications (SPA) in Angular.',
      popupContent: `
        <p>A Single Page Application (SPA) is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. Angular is designed for building SPAs, providing a seamless user experience by loading content dynamically and ensuring fast, responsive performance.</p>
      `,
    },
    {
      title: 'Component',
      description: 'Understand the core concept of components in Angular.',
      popupContent: `
        <p>Components are the fundamental building blocks of an Angular application. Each component consists of an HTML template, CSS styles, and a TypeScript class that defines the component's behavior. Components can be nested, reused, and managed independently, promoting modular and maintainable code.</p>

        <div class="code-editor">
      <div class="header">
        <span class="title">CSS</span>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
      </div>
      <div class="editor-content">
        <code class="code">
          <p><span class="color-0">.code-editor </span> <span>{</span></p>

          <p class="property">
            <span class="color-2">max-width</span><span>:</span>
            <span class="color-1">300px</span>;
          </p>
          <p class="property">
            <span class="color-2">background-color</span><span>:</span>
            <span class="color-preview-1"></span><span class="">#1d1e22</span>;
          </p>
          <p class="property">
            <span class="color-2"> box-shadow</span><span>:</span>
            <span class="color-1">0px 4px 30px  <span class="color-preview-2"></span><span class="color-3">rgba(</span>0, 0, 0, 0.5<span class="color-3">)</span></span>;
          </p>
          <p class="property">
            <span class="color-2">border-radius</span><span>:</span>
            <span class="color-1">8px</span>;
          </p>
          <span>}</span>
        </code>
      </div>
    </div>
      `,
    },
    {
      title: 'Services',
      description:
        'Dive into the concept of services and dependency injection in Angular.',
      popupContent: `
        <p>Services in Angular are used to encapsulate business logic and data access, promoting separation of concerns and reusability. Angular's dependency injection system provides a way to inject services into components or other services, allowing for better modularity and testability.</p>
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
