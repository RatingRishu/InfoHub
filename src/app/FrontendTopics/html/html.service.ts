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
          <li><a target='_blank' href="https://www.w3schools.com/html/html_basic.asp" target="_blank">HTML Basics</a></li>
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
          <li><a target='_blank' href="https://www.w3schools.com/html/html_intro.asp" target="_blank">HTML Intro</a></li>
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
          <li><a target='_blank' href="https://www.w3schools.com/html/html_basic.asp" target="_blank">HTML Basics</a></li>
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
      title: 'Line Break Tag',
      description: 'BR tag < br > , Whenever you use the <br /> element, anything following it starts from the next line. ',
      note: 'Note: If the image is not showing properly, click on the image.',
      popupContent: `
        Whenever you use the < br /> element, anything following it starts from the next line. This
        tag is an example of an empty element, where you do not need opening and closing tags, as
        there is nothing to go in between them.
        The <br /> tag has a space between the characters br and the forward slash. If you omit this
        space, older browsers will have trouble rendering the line break, while if you miss the forward
        slash character and just use <br> it is not valid in XHTML.    
        
         <a target='_blank' href="https://gist.github.com/user-attachments/assets/2f176331-6faa-414f-a24b-32ed0458c405">
          <img src="https://gist.github.com/user-attachments/assets/2f176331-6faa-414f-a24b-32ed0458c405" />
        </a>
        `,
    },
    {
      title: 'Horizontal Lines',
      description: 'Horizontal lines are used to visually break-up sections of a document. The < hr > tag creates a line from the current position in the document to the right margin and breaks the line accordingly.',
      note: 'Note: If the image is not showing properly, click on the image.',
      popupContent: `
       Horizontal lines are used to visually break-up sections of a document. The < hr > tag creates
        a line from the current position in the document to the right margin and breaks the line
        accordingly.
         <a target='_blank' href="https://gist.github.com/user-attachments/assets/07569284-7f0f-435a-8630-8f7c6ccee0a5">
          <img src="https://gist.github.com/user-attachments/assets/07569284-7f0f-435a-8630-8f7c6ccee0a5" />
        </a>
        `,
    },
    {
      title: 'HTML – ATTRIBUTES',
      description: 'An attribute is used to define the characteristics of an HTML element and is placed inside the elements opening tag. ',
      note: 'Note: If the image is not showing properly, click on the image.',
      popupContent: `
        We have seen few HTML tags and their usage like heading tags < h1 >, < h2 >, paragraph tag
        < p > and other tags. We used them so far in their simplest form, but most of the HTML tags
        can also have attributes, which are extra bits of information.
        An attribute is used to define the characteristics of an HTML element and is placed inside the
        element's opening tag. All attributes are made up of two parts: a name and a value:
         The name is the property you want to set. For example, the paragraph < p > element
        in the example carries an attribute whose name is align, which you can use to indicate
        the alignment of paragraph on the page.
        <br>
      Core Attributes: <br>
        The four core attributes that can be used on the majority of HTML elements (although not all)
        are: <br>
        1. Id : <br>
        2. Title : <br>
        3. Class : <br>
        4. Style : <br>
<br>
         The value is what you want the value of the property to be set and always put within
        quotations. The below example shows three possible values of align attribute: left,
        center and right.
        Attribute names and attribute values are case-insensitive. However, the World Wide Web
        Consortium (W3C) recommends lowercase attributes/attribute values in their HTML 4
        recommendation.    
        
         <a target='_blank' href="https://gist.github.com/user-attachments/assets/7255697c-5218-42b0-87b9-494ac50feee3">
          <img src="https://gist.github.com/user-attachments/assets/7255697c-5218-42b0-87b9-494ac50feee3" />
        </a>
        `,
    },
    {
      title: 'HTML Links - The target Attribute',
      description: 'By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.',
      note: 'Note: If the image is not showing properly, click on the image.',
      popupContent: `
        <h6>The target attribute specifies where to open the linked document.</h6>
        <p>The target attribute can have one of the following values:</p>
        <ul>
          <li>_self - Default. Opens the document in the same window/tab as it was clicked</li>
          <li>_blank - Opens the document in a new window or tab</li>
          <li>_parent - Opens the document in the parent frame</li>
          <li>_top - Opens the document in the full body of the window</li>
        </ul>
        <a target='_blank' href="https://gist.github.com/user-attachments/assets/5dfd52f6-ff4e-40a3-8a40-47eb24d08004">
          <img src="https://gist.github.com/user-attachments/assets/5dfd52f6-ff4e-40a3-8a40-47eb24d08004" />
        </a>
      `,
    },
    {
      title: 'HTML – META TAGS ',
      description: 'HTML lets you specify metadata - additional important information about a document in avariety of ways.',
      note: 'Note: If the image is not showing properly, click on the image.',
      popupContent: `
        HTML lets you specify metadata - additional important information about a document in a
        variety of ways. The META elements can be used to include name/value pairs describing
        properties of the HTML document, such as author, expiry date, a list of keywords, document
        author etc.<br>
        The <meta> tag is used to provide such additional information. This tag is an empty element
        and so does not have a closing tag but it carries information within its attributes.
        You can include one or more meta tags in your document based on what information you
        want to keep in your document but in general, meta tags do not impact physical appearance
        of the document so from appearance point of view, it does not matter if you include them or
        not.<br>
        <h3>Adding Meta Tags to Your Documents</h3>
        You can add metadata to your web pages by placing <meta> tags inside the header of the
        document which is represented by < head> and < /head> tags. A meta tag can have
        following attributes in addition to core attributes:

         <a target='_blank' href="https://gist.github.com/user-attachments/assets/84fa443f-f345-4114-9796-4e4d56b44fd8">
          <img src="https://gist.github.com/user-attachments/assets/84fa443f-f345-4114-9796-4e4d56b44fd8" />
        </a>
      `,
    },
    {
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
  ];

  getCards() {
    return this.cards;
  }

  getCardByTitle(title: string) {
    return this.cards.find(card => card.title === title);
  }
}
