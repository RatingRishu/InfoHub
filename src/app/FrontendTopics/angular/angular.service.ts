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


    {
      title: 'ng-onchange',
      description:
        'A web framework that empowers developers to build fast, reliable applications.',
      popupContent: `
        <p>Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, Angular provides a way to build applications for the web, mobile, and desktop.</p>
        <ul>
          <li>Angular combines declarative templates, dependency injection, end-to-end tooling, and integrated best practices to solve development challenges.</li>
          <li>It empowers developers to create applications that can run on multiple platforms, including web, mobile, and desktop, with a unified codebase.</li>
        </ul>
          <a href="content" target="_blank">To see function click</a>
      `,
    },

    {
      title: 'Modules',
      description:
        'Angular Application is just a collection of many individual module.',
      popupContent: `
        <p>Angular is a Modular framework. Modularity is the property which measures the amount to which components connected together within a system can be separated as an individual unit and can function by themselves without depending on each other.</p>
        <p>An angular application can contain several modules.There is minimum one module present in every angular application, which is <strong>'NgModule'</strong></p>
        <ul>
          <li>Module is a unit that groups Components, Pipes, Directives, and Services.</li>
          <li>The default NgModule is AppModule and is present in app.module.ts file.When you launch the application, this is the module that gets bootstrapped.</li>
          <li>You can also import and export functionalities from one module to the other for efficient and clean programming.</li>

        </ul>
        <img src="https://gist.github.com/user-attachments/assets/abf9d5ac-420e-45af-a0f5-ef357f10b089" width="450px">

        <p>For More Info: </p>
        <a href="https://angular-training-guide.rangle.io/modules/introduction" target="_blank">Angular Modules</a>
       
      `,
    },
   {
  title: 'Templates & Data Binding',
  description: 'Understand how Angular binds data between component and template.',
  popupContent: `
    <p>Angular templates provide a declarative way to bind application data to the DOM. When the component state changes, the view updates automatically.</p>
    <ul>
      <li>Interpolation: {{ value }}</li>
      <li>Property Binding: [property]</li>
      <li>Event Binding: (event)</li>
      <li>Two-way Binding: [(ngModel)]</li>
    </ul>
    <a href="https://angular.dev/guide/templates" target="_blank">Official Angular Docs – Templates & Data Binding</a>
  `,
},

{
  title: 'Directives',
  description: 'Learn how directives manipulate the DOM in Angular.',
  popupContent: `
    <p>Directives are special classes that add behavior to elements in the DOM. They help control layout, appearance, and interaction.</p>
    <ul>
      <li><strong>Structural Directives:</strong> *ngIf, *ngFor, *ngSwitch</li>
      <li><strong>Attribute Directives:</strong> ngClass, ngStyle</li>
      <li><strong>Custom Directives:</strong> Create reusable DOM behavior</li>
    </ul>
    <a href="https://angular.dev/guide/directives" target="_blank">Official Angular Docs – Directives</a>
  `,
},

{
  title: 'Pipes',
  description: 'Transform data in templates using pipes.',
  popupContent: `
    <p>Pipes transform displayed data in templates without changing the underlying value.</p>
    <ul>
      <li>Built-in pipes: date, currency, uppercase, lowercase</li>
      <li>Async Pipe for Observables & Promises</li>
      <li>Custom Pipes for reusable transformations</li>
    </ul>
    <a href="https://angular.dev/guide/pipes" target="_blank">Official Angular Docs – Pipes</a>
  `,
},

{
  title: 'Routing & Navigation',
  description: 'Handle navigation and routing in Angular applications.',
  popupContent: `
    <p>Angular Router enables navigation between application views without full page reloads.</p>
    <ul>
      <li>RouterModule configuration</li>
      <li>routerLink & router-outlet</li>
      <li>Lazy Loading Modules</li>
      <li>Route Guards for security</li>
    </ul>
    <a href="https://angular.dev/guide/routing" target="_blank">Official Angular Docs – Routing</a>
  `,
},

{
  title: 'Lifecycle Hooks',
  description: 'Understand Angular component lifecycle.',
  popupContent: `
    <p>Lifecycle hooks let you run code at specific moments during a component’s creation, update, and destruction.</p>
    <ul>
      <li>ngOnInit – Initialization logic</li>
      <li>ngOnChanges – Input property changes</li>
      <li>ngAfterViewInit – View initialization</li>
      <li>ngOnDestroy – Cleanup logic</li>
    </ul>
    <a href="https://angular.dev/guide/lifecycle-hooks" target="_blank">Official Angular Docs – Lifecycle Hooks</a>
  `,
},

{
  title: 'Forms',
  description: 'Build forms efficiently in Angular.',
  popupContent: `
    <p>Angular forms provide a structured way to capture, validate, and process user input.</p>
    <ul>
      <li>Template-driven Forms for simple use cases</li>
      <li>Reactive Forms for complex and scalable forms</li>
      <li>FormControl, FormGroup, Validators</li>
    </ul>
    <a href="https://angular.dev/guide/forms" target="_blank">Official Angular Docs – Forms</a>
  `,
},

{
  title: 'HTTP & API Integration',
  description: 'Communicate with backend services.',
  popupContent: `
    <p>The HttpClient service allows Angular apps to communicate with backend APIs using HTTP.</p>
    <ul>
      <li>GET, POST, PUT, DELETE requests</li>
      <li>HTTP Interceptors</li>
      <li>Centralized Error Handling</li>
    </ul>
    <a href="https://angular.dev/guide/http" target="_blank">Official Angular Docs – HTTP Client</a>
  `,
},

{
  title: 'RxJS & Observables',
  description: 'Reactive programming in Angular.',
  popupContent: `
    <p>RxJS enables reactive programming by handling asynchronous data streams efficiently.</p>
    <ul>
      <li>Observable & Subscription</li>
      <li>Operators: map, filter, switchMap</li>
      <li>Subjects & BehaviorSubject</li>
    </ul>
    <a href="https://angular.dev/guide/rx-library" target="_blank">Official Angular Docs – RxJS</a>
  `,
},

{
  title: 'Change Detection',
  description: 'Optimize performance with Angular change detection.',
  popupContent: `
    <p>Change detection keeps the view in sync with application data.</p>
    <ul>
      <li>Default Change Detection Strategy</li>
      <li>OnPush Strategy for performance optimization</li>
      <li>trackBy function in ngFor</li>
    </ul>
    <a href="https://angular.dev/guide/change-detection" target="_blank">Official Angular Docs – Change Detection</a>
  `,
},

{
  title: 'Lazy Loading',
  description: 'Improve performance by loading modules on demand.',
  popupContent: `
    <p>Lazy loading reduces initial bundle size by loading modules only when required.</p>
    <ul>
      <li>Improves application startup time</li>
      <li>Configured using Angular Router</li>
    </ul>
    <a href="https://angular.dev/guide/lazy-loading" target="_blank">Official Angular Docs – Lazy Loading</a>
  `,
},

{
  title: 'State Management',
  description: 'Manage application state effectively.',
  popupContent: `
    <p>State management ensures predictable data flow across components.</p>
    <ul>
      <li>Services with BehaviorSubject</li>
      <li>NgRx Store</li>
      <li>Component Store</li>
    </ul>
    <a href="https://angular.dev/guide/signals" target="_blank">Official Angular Docs – State Management & Signals</a>
  `,
},

{
  title: 'Testing',
  description: 'Write unit and integration tests in Angular.',
  popupContent: `
    <p>Angular provides built-in testing utilities to ensure application quality.</p>
    <ul>
      <li>Jasmine & Karma</li>
      <li>TestBed</li>
      <li>Component & Service testing</li>
    </ul>
    <a href="https://angular.dev/guide/testing" target="_blank">Official Angular Docs – Testing</a>
  `,
},

{
  title: 'Deployment',
  description: 'Build and deploy Angular applications.',
  popupContent: `
    <p>Angular applications can be optimized and deployed for production environments.</p>
    <ul>
      <li>ng build</li>
      <li>Environment configuration</li>
      <li>Hosting on Firebase, Netlify, Vercel</li>
    </ul>
    <a href="https://angular.dev/guide/deployment" target="_blank">Official Angular Docs – Deployment</a>
  `,
}

    
  ];


  getCards() {
    return this.cards;
  }

  getCardByTitle(title: string) {
    return this.cards.find(card => card.title === title);
  }

}
