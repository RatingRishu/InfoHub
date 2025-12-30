import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssService {

  constructor() { }
  private cards = [
    {
      title: 'CSS – Introduction',
      description: 'CSS is used to control the style and layout of web pages.',
      note: 'Note: If the image is not showing properly, click on the image.',
      popupContent: `
      <h4>CSS – Cascading Style Sheets</h4>
      <hr>
      <p>
        CSS (Cascading Style Sheets) is a stylesheet language used to describe
        the presentation of an HTML document. While HTML defines structure,
        CSS controls layout, colors, fonts, spacing, and responsiveness.
      </p>
      <p>
        CSS follows a cascading order, meaning styles are applied based on
        priority, specificity, and order.
      </p>
    `,
    },
    {
      title: 'CSS – Types of CSS',
      description: 'Different ways to apply CSS to HTML.',
      popupContent: `
      <h4>Types of CSS</h4>
      <hr>
      <p>CSS can be applied in three ways:</p>

      <h4>1. Inline CSS</h4>
      <pre>&lt;p style="color:red;"&gt;Text&lt;/p&gt;</pre>

      <h4>2. Internal CSS</h4>
      <pre>
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;
      </pre>

      <h4>3. External CSS</h4>
      <pre>
&lt;link rel="stylesheet" href="style.css"&gt;
      </pre>
    `,
    },
    {
      title: 'CSS – Selectors',
      description: 'Selectors are used to target HTML elements.',
      popupContent: `
      <h4>CSS Selectors</h4>
      <hr>
      <ul>
        <li>Element Selector (p)</li>
        <li>Class Selector (.box)</li>
        <li>ID Selector (#main)</li>
        <li>Universal Selector (*)</li>
        <li>Group Selector (h1, h2)</li>
      </ul>
      <pre>
p { color: red; }
.box { padding: 10px; }
#main { background: yellow; }
      </pre>
    `,
    },
    {
      title: 'CSS – Colors',
      description: 'CSS allows you to apply colors in different formats.',
      popupContent: `
      <h4>CSS Colors</h4>
      <hr>
      <ul>
        <li>Color Names (red, blue)</li>
        <li>HEX (#ff0000)</li>
        <li>RGB (rgb(255,0,0))</li>
        <li>RGBA (rgba(255,0,0,0.5))</li>
      </ul>
      <pre>
p { color: #ff0000; }
      </pre>
    `,
    },
    {
      title: 'CSS – Box Model',
      description: 'Every HTML element is a box.',
      popupContent: `
      <h4>CSS Box Model</h4>
      <hr>
      <p>
        The CSS box model consists of content, padding, border, and margin.
      </p>
      <pre>
div {
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
}
      </pre>
    `,
    },
    {
      title: 'CSS – Positioning',
      description: 'Controls how elements are positioned.',
      popupContent: `
      <h4>CSS Position</h4>
      <hr>
      <ul>
        <li>static</li>
        <li>relative</li>
        <li>absolute</li>
        <li>fixed</li>
        <li>sticky</li>
      </ul>
      <pre>
div {
  position: relative;
  top: 10px;
}
      </pre>
    `,
    },
    {
      title: 'CSS – Flexbox',
      description: 'Flexbox is used for one-dimensional layouts.',
      popupContent: `
      <h4>CSS Flexbox</h4>
      <hr>
      <pre>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
      </pre>
      <p>
        Flexbox makes alignment and spacing easier.
      </p>
    `,
    },
    {
      title: 'CSS – Media Queries',
      description: 'Used to create responsive designs.',
      popupContent: `
      <h4>CSS Media Queries</h4>
      <hr>
      <pre>
@media (max-width: 768px) {
  body {
    background: lightgray;
  }
}
      </pre>
      <p>
        Media queries adapt layouts for different screen sizes.
      </p>
    `,
    },
    {
      title: 'CSS – Best Practices',
      description: 'Write clean and maintainable CSS.',
      popupContent: `
      <h4>Best Practices</h4>
      <hr>
      <ul>
        <li>Use external CSS</li>
        <li>Avoid inline styles</li>
        <li>Use meaningful class names</li>
        <li>Follow mobile-first design</li>
      </ul>
    `,
    },
     {
    title: 'CSS – Text Styling',
    description: 'CSS provides properties to control text appearance.',
    popupContent: `
      <h4>CSS Text Properties</h4>
      <hr>
      <ul>
        <li>color</li>
        <li>text-align</li>
        <li>text-decoration</li>
        <li>text-transform</li>
        <li>line-height</li>
        <li>letter-spacing</li>
      </ul>

      <pre>
p {
  color: blue;
  text-align: center;
  text-transform: uppercase;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Fonts',
    description: 'Fonts control the appearance of text.',
    popupContent: `
      <h4>CSS Font Properties</h4>
      <hr>
      <ul>
        <li>font-family</li>
        <li>font-size</li>
        <li>font-style</li>
        <li>font-weight</li>
      </ul>

      <pre>
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Backgrounds',
    description: 'CSS allows styling element backgrounds.',
    popupContent: `
      <h4>CSS Background Properties</h4>
      <hr>
      <ul>
        <li>background-color</li>
        <li>background-image</li>
        <li>background-repeat</li>
        <li>background-position</li>
        <li>background-size</li>
      </ul>

      <pre>
div {
  background-color: lightblue;
  background-image: url(bg.jpg);
  background-size: cover;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Display Property',
    description: 'Controls how elements are displayed.',
    popupContent: `
      <h4>CSS Display</h4>
      <hr>
      <ul>
        <li>block</li>
        <li>inline</li>
        <li>inline-block</li>
        <li>none</li>
      </ul>

      <pre>
span {
  display: inline-block;
  width: 100px;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Overflow',
    description: 'Controls content overflow behavior.',
    popupContent: `
      <h4>CSS Overflow</h4>
      <hr>
      <ul>
        <li>hidden</li>
        <li>scroll</li>
        <li>auto</li>
        <li>visible</li>
      </ul>

      <pre>
div {
  width: 100px;
  height: 50px;
  overflow: auto;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Z-Index',
    description: 'Controls element stacking order.',
    popupContent: `
      <h4>CSS Z-Index</h4>
      <hr>
      <p>
        z-index works only on positioned elements.
      </p>

      <pre>
.box {
  position: absolute;
  z-index: 10;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Pseudo Classes',
    description: 'Used to define a special state of an element.',
    popupContent: `
      <h4>CSS Pseudo-Classes</h4>
      <hr>
      <ul>
        <li>:hover</li>
        <li>:active</li>
        <li>:focus</li>
        <li>:visited</li>
      </ul>

      <pre>
a:hover {
  color: red;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Pseudo Elements',
    description: 'Style specific parts of an element.',
    popupContent: `
      <h4>CSS Pseudo-Elements</h4>
      <hr>
      <ul>
        <li>::before</li>
        <li>::after</li>
        <li>::first-letter</li>
        <li>::first-line</li>
      </ul>

      <pre>
p::first-letter {
  font-size: 30px;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Transitions',
    description: 'Adds smooth animation effects.',
    popupContent: `
      <h4>CSS Transitions</h4>
      <hr>
      <pre>
button {
  transition: background-color 0.3s;
}

button:hover {
  background-color: green;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Animations',
    description: 'Create complex animations using keyframes.',
    popupContent: `
      <h4>CSS Animations</h4>
      <hr>
      <pre>
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}

.box {
  position: relative;
  animation: move 2s infinite;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Grid Layout',
    description: 'Grid is used for two-dimensional layouts.',
    popupContent: `
      <h4>CSS Grid</h4>
      <hr>
      <pre>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
      </pre>
    `,
  },
  {
    title: 'CSS – Variables',
    description: 'CSS variables store reusable values.',
    popupContent: `
      <h4>CSS Variables</h4>
      <hr>
      <pre>
:root {
  --main-color: blue;
}

p {
  color: var(--main-color);
}
      </pre>
    `,
  },
  {
    title: 'CSS – Interview Notes',
    description: 'Important points for interviews.',
    popupContent: `
      <h4>Interview Tips</h4>
      <hr>
      <ul>
        <li>Difference between class and id</li>
        <li>Box model explanation</li>
        <li>Flexbox vs Grid</li>
        <li>Position types</li>
        <li>Inline vs block</li>
      </ul>
    `,
  },
   {
    title: 'Real-World CSS – Navbar Layout',
    description: 'Create a common website navigation bar using CSS.',
    popupContent: `
      <h4>Real-World Example: Navigation Bar</h4>
      <hr>

      <p>
        Navigation bars are one of the most common UI components in websites.
        CSS Flexbox is widely used to align menu items horizontally.
      </p>

      <pre>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 10px;
}

.navbar a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
      </pre>

      <p>
        This layout is used in almost every real-world website.
      </p>
    `,
  },
  {
    title: 'Real-World CSS – Card UI Design',
    description: 'Design reusable card components using CSS.',
    popupContent: `
      <h4>Real-World Example: Card Component</h4>
      <hr>

      <p>
        Cards are used in dashboards, product listings, blogs, and profiles.
      </p>

      <pre>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
      </pre>

      <p>
        Card UI improves content readability and visual grouping.
      </p>
    `,
  },
  {
    title: 'Responsive Layout – Mobile First Design',
    description: 'Design layouts starting from small screens.',
    popupContent: `
      <h4>Mobile-First Responsive Design</h4>
      <hr>

      <p>
        Mobile-first means designing for mobile screens first and then
        enhancing for larger devices using media queries.
      </p>

      <pre>
body {
  font-size: 14px;
}

@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}
      </pre>

      <p>
        This approach improves performance and usability.
      </p>
    `,
  },
  {
    title: 'Responsive Layout – Grid Based Page',
    description: 'Create a responsive page layout using CSS Grid.',
    popupContent: `
      <h4>Responsive Grid Layout</h4>
      <hr>

      <p>
        CSS Grid is commonly used for dashboard and page layouts.
      </p>

      <pre>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
      </pre>

      <p>
        The layout automatically adapts to screen size.
      </p>
    `,
  },
  {
    title: 'CSS Practice – Beginner Challenge',
    description: 'Practice basic CSS properties.',
    popupContent: `
      <h4>Practice Challenge</h4>
      <hr>

      <p>
        Try to complete the following tasks:
      </p>

      <ul>
        <li>Create a div with width 200px and height 100px</li>
        <li>Center the text horizontally and vertically</li>
        <li>Add a border and background color</li>
      </ul>

      <p>
        Hint: Use Flexbox for alignment.
      </p>
    `,
  },
  {
    title: 'CSS Practice – Interview Level Challenge',
    description: 'Advanced CSS challenge for real interviews.',
    popupContent: `
      <h4>Advanced Practice Challenge</h4>
      <hr>

      <p>
        Build a responsive card layout with:
      </p>

      <ul>
        <li>Flexbox or Grid</li>
        <li>Hover effect</li>
        <li>Media query for mobile</li>
      </ul>

      <p>
        Bonus: Add transition animation on hover.
      </p>

      <p>
        This challenge reflects real frontend interview tasks.
      </p>
    `,
  },
   {
    title: 'CSS – Practice & Real-World Resources',
    description: 'Learn CSS through real projects, responsive layouts, and hands-on challenges.',
    popupContent: `
      <h3>🎯 Real-World CSS Examples</h3>
      <hr>
      <ul>
        <li>
          <b>MDN CSS Examples</b> – Industry-standard usage and demos<br>
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            https://developer.mozilla.org/en-US/docs/Web/CSS
          </a>
        </li>
        <li>
          <b>CSS Tricks</b> – Practical UI patterns & real solutions<br>
          <a target="_blank" href="https://css-tricks.com/">
            https://css-tricks.com/
          </a>
        </li>
      </ul>

      <h3>📱 Responsive Layout Projects</h3>
      <hr>
      <ul>
        <li>
          <b>W3Schools – Responsive Web Design</b><br>
          <a target="_blank" href="https://www.w3schools.com/css/css_rwd_intro.asp">
            https://www.w3schools.com/css/css_rwd_intro.asp
          </a>
        </li>
        <li>
          <b>MDN – Responsive Design Guide</b><br>
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design">
            https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
          </a>
        </li>
        <li>
          <b>Flexbox Froggy</b> – Learn Flexbox by playing<br>
          <a target="_blank" href="https://flexboxfroggy.com/">
            https://flexboxfroggy.com/
          </a>
        </li>
        <li>
          <b>Grid Garden</b> – Learn CSS Grid interactively<br>
          <a target="_blank" href="https://cssgridgarden.com/">
            https://cssgridgarden.com/
          </a>
        </li>
      </ul>

      <h3>🧪 CSS Practice & Challenges</h3>
      <hr>
      <ul>
        <li>
          <b>Frontend Mentor</b> – Real-world UI challenges<br>
          <a target="_blank" href="https://www.frontendmentor.io/">
            https://www.frontendmentor.io/
          </a>
        </li>
        <li>
          <b>freeCodeCamp</b> – Learn CSS by building projects<br>
          <a target="_blank" href="https://www.freecodecamp.org/learn/">
            https://www.freecodecamp.org/learn/
          </a>
        </li>
        <li>
          <b>CodePen</b> – Practice & experiment with CSS live<br>
          <a target="_blank" href="https://codepen.io/">
            https://codepen.io/
          </a>
        </li>
      </ul>

      <hr>
      <p>
        👉 Tip: Start with <b>W3Schools</b> → practice on <b>Flexbox Froggy</b> →
        build real projects on <b>Frontend Mentor</b>.
      </p>
    `,
  },{
      title: 'Thank You',
      description:
        'We love to hear how you felt after exploring all the content at the provided URL—your feedback is invaluable to us!',
      popupContent: `
        We value your feedback immensely! <br> 
        After exploring all the content at here, we'd love to hear your thoughts. Could you kindly share your insights and experiences with us?
       <br> Your perspective helps us improve and serve you better. 
       <br> <h2> Thank you! </h2>
            `,
    },
  ]

  getCards() {
    return this.cards;
  }

  getCardByTitle(title: string) {
    return this.cards.find(card => card.title === title);
  }
}
