import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor() { }
  private cards = [
    {
      title: 'Before you start',
      description:
        'Here are some things to know before starting to write HTML:',
      popupContent: `
      <h4> Prerequisites </h4>
      <hr>
      <p> HTML is text-based computer coding, so you only need basic computer knowledge and the ability to work with files. You should also understand letters and basic symbols.</p>
       <h4> Document type declaration </h4>
       <hr>
       <p> All HTML documents must start with a document type declaration, &lt;!DOCTYPE html&gt;, at the top of the page. This declaration helps browsers display web pages correctly.</p>
       <h4> HTML document </h4>
       <hr>
       <p> The HTML document itself begins with <html> and ends with </html>. The visible part of the HTML document is between <body> and </body>..</p>
       <h4> Tags </h4>
       <hr>
       <p>HTML elements have three parts: opening tag, closing tag, and content. The opening tag is the element's name wrapped in angle brackets, while the closing tag is the same as the opening tag but with a 
       forward slash before the element's name. Forgetting a closing tag can lead to conflicts or unexpected results. Content is what the tags display and can include text, images, or other featured material.</p>
      <ul>
          <li><a href="https://www.w3schools.com/html/html_basic.asp" target="_blank">HTML Basics</a></li>
      </ul>
      `,
    },
    {
      title: 'What is HTML',
      description:
        'HTML, or Hypertext Markup Language, is a markup language used to create and structure web pages.',
      popupContent: `
      <p>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.</p>
        <p>HTML uses predefined tags and elements that instruct the browser on how to display the content. For example, HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", and so on. HTML tags also allow developers to specify the type of content being displayed and how it should be presented.</p>
        <ul>
          <li><b>Easy to learn:</b> HTML is beginner-friendly and has a clean and consistent markup.</li>
          <li><b>Platform independent:</b> HTML ensures consistent rendering and functionality across various devices, operating systems, and web browsers.</li>
          <li><b>Supports a wide range of formats:</b> HTML supports a wide range of colors, formats, and layouts, which helps create attractive web pages. </li>
          <li><b>Search engine friendly:</b> HTML is search engine friendly. </li>
          <br>
          <li><a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">HTML Intro</a></li>
        </ul>
      `,
    },
    {
      title: 'HTML Documents',
      description: 'Understand the core concept of components in Angular.',
      popupContent: `
        <p>All HTML documents must start with a document type declaration 	&lt;!DOCTYPE html&gt;. The HTML document itself begins with < html> and ends with </ html>. 
        The visible part of the HTML document is between < body> and </ body>.</p>
        <h1> html code format</h1>
        <br>
        <img src="https://gist.github.com/user-attachments/assets/2a7d1dd8-eb12-4ce4-9b40-eba4683d03d0" width="330" height="400"> 

       <ul>
          <li><a href="https://www.w3schools.com/html/html_basic.asp" target="_blank">HTML Basics</a></li>
      </ul>
      `,
    },
    {
      title: 'HTML Headings and Paragraphs',
      description: 'HTML headings are defined with the <h1> to <h6> tags.',
      popupContent: `
        <p>h1 defines the most important heading. h6 defines the least important heading.</p>

        <ul>
          <li><h1>Heading 1</h1></li>
          <li><h2>Heading 2</h2></li>
          <li><h3>Heading 3</h3></li>
          <li><h4>Heading 4</h4></li>
          <li><h5>Heading 5</h5></li>
          <li><h6>Heading 6</h6></li>
        </ul>

        <h1>HTML Paragraphs</h1>
        <p>The HTML < p > element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>

              <img src="https://gist.github.com/user-attachments/assets/fa4d4f1e-3c7a-4c93-8a97-2206dd8ff74b">

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
