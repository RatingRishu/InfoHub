import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor() { }

  private cards = [
    {
      title: 'What we learn in Web Api',
      description:
        'Summary',
      popupContent: `
        
      <h1>Web API</h1>
      <p><strong>&nbsp;1.1 Introduction</strong></p>
      <p><strong>&nbsp;1.2 How to create Web APIs with Instant Developer</strong></p>
      <p><strong>&nbsp;1.3 Web API specification</strong></p>
      <p><strong>&nbsp;1.4 Examples of calls</strong></p>
      <p><strong>&nbsp;1.5 Algorithm for handling a call</strong></p>
      <p><strong>&nbsp;1.6 Customization code examples</strong></p>
      <p><strong>&nbsp;1.7 Testing a Web API</strong></p>

      <h1>Integration with RESTful Web API Services</h1>
      <p><strong>&nbsp;2.1 Introduction</strong></p>
      <p><strong>&nbsp;2.2 Importing a service</strong></p>
      <p><strong>&nbsp;2.3 Integration with a service at runtime</strong></p>

      `,
    },
    {
      title: 'Introduction',
      description:
        'A Web API is a set of rules that allows different software applications to communicate and exchange data over the internet.',
      popupContent: `
       <p>One common way to market software today is through SaaS (Software as a Service), which lets users access software over the internet and run it in the cloud. With SaaS, the software is available through a Web API (Application Programming Interface). A Web API is a tool that allows different programs to communicate with each other and exchange data over the internet.</p>
      <p>The most popular way of designing Web APIs is using the RESTful model. This model is based on several important principles:</p>

    <ul>
      <li><strong>Resources:</strong> The application’s features and data are represented as "web resources."</li>
      <li><strong>Unique and Addressable Resources:</strong> Every resource has a unique address (URL) that can be used to access it.</li>
      <li><strong>Uniform Interface:</strong> Resources are accessed using a consistent set of rules. This includes:
        <ul>
          <li>A clear set of operations that can be performed on the resources.</li>
         <li>A defined set of data formats that can be used, with optional support for adding extra code when needed.</li>
        </ul>
      </li>
      <li><strong>Client-Server Architecture:</strong> The system works with two separate parts: the client (the user) and the server (where the software runs).</li>
      <li><strong>Stateless:</strong> Every request from the client to the server is independent, and the server doesn't remember any previous requests.</li>
      <li><strong>Cacheable:</strong> Responses from the server can be stored temporarily to improve performance.</li>
      <li><strong>Layered System:</strong> The system can have multiple layers, each responsible for specific tasks, like security or load balancing.</li>
    </ul>
      `,
    },

    {
      title: 'How to create Web APIs with Instant Developer',
      description: 'Creating Web APIs with Instant Developer is very simple',
      popupContent: `
        <p>Creating Web APIs with Instant Developer is very simple. For each resource that you want to expose, you can easily create a DO (Data Object) class with the necessary properties and enable the WebAPI service. This automatically provides the following features:</p>
        <ul>
          <li>Reading, inserting, deleting, and updating a resource given its identifier.</li>
          <li>Searching through a collection of resources based on search criteria related to their properties.</li>
        </ul>
      <p>You can also expose specific features by creating class methods and enabling the WebAPI flag.</p>
      <p><strong>Example:</strong> Suppose you want to create a Web API for querying products identified by an alphanumeric code (like P10). First, you would create the Product class by dragging the corresponding database table onto the application. Then, simply enable the WebAPI service and compile the application. Afterward, information for the product with the code P10 can be retrieved by typing the URL <code>http://mydomain/myapp/Product/P10</code> in the browser.</p>
      `,
    },

    {
      title: 'Web API specification ',
      description: 'Let`s take a closer look at how to call a Web API created with Instant Developer',
      popupContent: `
       <h1>1.3 Web API Specification</h1>

<p>Let's take a closer look at how to call a Web API created with Instant Developer.</p>

<h5>1.3.1 Stateless Calls</h5>
<p>Calls are stateless. In other words, each request has no memory of the past and therefore the session is not managed.</p>
<p>If you want to use a non-stateless management mode, you can identify calls with a token and store the session information in a database or any other data source.</p>

<h5>1.3.2 Data Format</h5>
<p>The default format of the data exchanged is JSON, but you can specify the desired format (JSON or XML) in the URL.</p>
<p>If you wanted to retrieve the product P10 in XML format, you would use the URL <code>http://mydomain/myapp/Product.xml/P10</code>.</p>

<h5>1.3.3 Composition of URLs</h5>
<p>The URL of Web API calls includes the following parts:</p>
<ul>
  <li>The application path (e.g., <code>http://mydomain/myapp</code>).</li>
  <li>The name of the class (Tag) including any component package or namespace. For example, if the Product class is defined in a component with the namespace <code>com.progamma.catalog</code>, the URL should be followed by <code>/com/progamma/catalog/Product</code>.</li>
  <li>The desired format (optional), specified by appending the string <code>.json</code> or <code>.xml</code> to the class name.</li>
  <li>Primary key (PK) values separated by forward slashes for read or delete requests (e.g., <code>/P10/2010</code>).</li>
  <li>Search criteria for search requests or property values for update requests (e.g., <code>?Year=2010&Supplier=2</code>). Properties are identified by the corresponding value of Tag.</li>
  <li>Parameter values for custom method requests.</li>
</ul>

<h5>1.3.4 Types of Calls</h5>
<p>The types of calls that can be made depend on the HTTP method used, as shown in the following table:</p>
<table border="1">
  <tr>
    <th>HTTP Method</th>
    <th>Type of Call</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>Reading a resource with the PK values in the URL.</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>Searching for resources with the search criteria in the URL.</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>Updating an existing resource identified by the PK values in the URL, with the modified values in the URL or in the content.</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>Inserting a new resource with the serialization of the resource in the content.</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>Deleting an existing resource identified by the PK values in the URL.</td>
  </tr>
  <tr>
    <td>METHODNAME</td>
    <td>Call to a custom method with the parameters in the URL or in the content.</td>
  </tr>
</table>

<h5>1.3.5 Depth of Child Object Hierarchy</h5>
<p>When making calls using the default Web API service functions (GET, PUT, POST, and DELETE), you can specify the level of depth for child objects to include by setting a request header named <code>child-level</code>.</p>
<p>If not specified, the default value is 0 for a GET with search criteria, and 9999 in all other cases.</p>

<h5>1.3.6 Custom Methods and Call Limitations</h5>
<p>For calls to custom methods, the name of the method to be called must be specified as the HTTP method of the request. However, there may be situations where a call using a nonstandard HTTP method is not possible, for example when:</p>
<ul>
  <li>The language used on the client side to make the call does not allow it.</li>
  <li>The firewall on the client or server does not allow it.</li>
  <li>The web server does not allow it.</li>
</ul>
<p>In these cases, you can use POST as the HTTP method and specify the name of the method to be called in a request header named <code>X-HTTP-Method-Override</code>. The server checks if this header is present before deciding which operation to perform.</p>

<h5>1.3.7 Encoding of Values</h5>
<p>The values exchanged in Web API calls must comply with the encodings listed in the following table:</p>
<table border="1">
  <tr>
    <th>Data Type</th>
    <th>Encoding</th>
  </tr>
  <tr>
    <td>Null</td>
    <td>Null values are encoded with the string <code>~~NULL~~</code> to distinguish them from empty string values.</td>
  </tr>
  <tr>
    <td>Datetime</td>
    <td>The format used for dates is <code>yyyy-mm-dd hh:nn.ss</code>.</td>
  </tr>
  <tr>
    <td>Number with decimal point</td>
    <td>For numeric values with a decimal point, the decimal separator is used and the thousands separator is omitted.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>Boolean values are represented by <code>-1</code> and <code>0</code>.</td>
  </tr>
  <tr>
    <td>BLOB</td>
    <td>Blobs are represented in web format (e.g. <code>data:image/gif;base64,...</code>).</td>
  </tr>
  <tr>
    <td>DocID</td>
    <td>DocID values are encoded in the form of a GUID.</td>
  </tr>
  <tr>
    <td>IDDocument and IDCollection</td>
    <td>Only instances of these classes are serialized into XML or JSON. Use of any other type of object is reported by Instant Developer during the validation phase as not permitted for Web API calls.</td>
  </tr>
</table>
<p>Properties in XML, JSON, and search criteria are identified by the corresponding value of Tag. These encodings must be used by the client for the data sent and are used by the server for the data returned.</p>

      `,
    },

    {
      title: 'Examples of calls ',
      description: 'This section shows some examples of calls, one for each type.',
      popupContent: `
        <h1>1.4 Examples of Calls</h1>
<p>This section shows some examples of calls, one for each type. The examples call a hypothetical application reachable through the URL <code>http://www.progamma.com/NewWebApp</code>.</p>

<h5>1.4.1 Example of Reading Resources</h5>
<p>To retrieve a resource identified by key values (e.g., Invoice with Year and Number as a PK), you would make a call like this:</p>
<pre><code>GET http://www.progamma.com/NewWebApp/Invoice/2013/1 HTTP/1.1</code></pre>
<p>The response might be:</p>
<pre><code>HTTP/1.1 200 OK
Content-type: application/json
{
  Year : 2013,
  Number : 1, ...
  Row : [ { id: 1, ... }, { id: 2, ... }, ... ]
}</code></pre>
<p>Note that the rows of the invoice were also returned since the child-level header was omitted (thus defaulting to 9999), and the response is in the default JSON format since no format was specified.</p>

<h5>1.4.2 Example of Searching for Resources</h5>
<p>To retrieve resources that match certain search criteria (e.g., invoices for the years 2013 and 2014 with the status P), you would make a call like this:</p>
<pre><code>GET http://www.progamma.com/NewWebApp/Invoice.xml?Year=2013;2014&Status=P HTTP/1.1</code></pre>
<p>The response might be:</p>
<pre><code>HTTP/1.1 200 OK
Content-type: application/xml; charset=utf-8
<IDCollection>
  <Invoice Year="2013" Number="1" ... />
  <Invoice Year="2013" Number="2" ... />
  <Invoice Year="2013" Number="3" ... />
</IDCollection></code></pre>
<p>Note that the search criteria are specified in the URL query string using QBE syntax (see 2013;2014). In this case, the XML format was specified in the request URL, so the response is in XML format. Remember that for a GET with search criteria, the default value for the child-level header is 0, and since we omitted it in this case, no invoice rows were returned.</p>

<h5>1.4.3 Example of Inserting Resources</h5>
<p>To insert a new resource (such as an invoice), you would make a call with the resource data in JSON or XML format in the content:</p>
<pre><code>POST http://www.progamma.com/NewWebApp/Invoice HTTP/1.1
Content-type: application/json
{
  Year : 2013,
  Number : 1, ...
  Row : [ { id: 1, ... }, { id: 2, ... }, ... ]
}</code></pre>
<p>If the insertion succeeds, the response will be something like this:</p>
<pre><code>HTTP/1.1 204 OK</code></pre>
<p>If the class in question has a counter field as the primary key, the response will include the value assigned by the counter:</p>
<pre><code>HTTP/1.1 200 OK
Content-type: text/plain; charset=utf-8
10231</code></pre>
<p>If the request fails, the response will be something like this:</p>
<pre><code>HTTP/1.1 500 Internal Server Error
Content-type: text/plain; charset=utf-8
<Error messages></code></pre>

<h5>1.4.4 Example of Deleting Resources</h5>
<p>To delete a resource (e.g., the invoice from 2013 with the number 1), you would make a call like this:</p>
<pre><code>DELETE http://www.progamma.com/NewWebApp/Invoice/2013/1 HTTP/1.1</code></pre>
<p>If the request succeeds, the response will be similar to the response when inserting. If the invoice is not found, the response will be something like this:</p>
<pre><code>HTTP/1.1 404 Not found
Content-type: text/plain; charset=utf-8
Invoice not found</code></pre>

<h5>1.4.5 Example of Updating Resources</h5>
<p>To update a resource (e.g., invoice number 1 of 2013), there are two possible ways:</p>
<ul>
  <li>Pass the values to be modified in the URL, in which case the call will be something like:</li>
  <pre><code>PUT http://www.progamma.com/NewWebApp/Invoice/2013/1?Status=P&... HTTP/1.1</code></pre>
  <li>Pass the invoice data to be modified and the PK values in JSON or XML format in the content if you also want to update the child objects (or simply if you prefer this way):</li>
  <pre><code>PUT http://www.progamma.com/NewWebApp/Invoice HTTP/1.1
Content-type: application/json
{
  Year : 2013,
  Number : 1,
  Status : "P" ...
  Row : [ { id: 1, ... }, { id: 2, ... }, ... ]
}</code></pre>
</ul>
<p>The response will be like that of the previous cases.</p>

<h5>1.4.6 Example of a Call to a Static Method</h5>
<p>To call a static method, you would make a call like this:</p>
<ul>
  <li>If the method has no parameters or has simple parameters (such as the count of invoices for a year), the values of the parameters should be passed in the URL:</li>
  <pre><code>CALCULATE HTTP/1.1
http://www.progamma.com/NewWebApp/Invoice?Year=2013</code></pre>
  <li>If instead the method has at least one object-type parameter (e.g., IDCollection or IDDocument), the values of the parameters should be passed in the content:</li>
  <pre><code>POST http://www.progamma.com/NewWebApp/Invoice HTTP/1.1
X-HTTP-Method-Override: CALCULATE
Content-type: application/json
{
  Year : 2013,
  Number : 1,
  Status : "P"
  ... }</code></pre>
</ul>
<p>If the method returns a simple value, the response will be something like this:</p>
<pre><code>HTTP/1.1 200 OK
Content-type: text/plain; charset=utf-8
43</code></pre>
<p>While if the method returns an object, the response will be like this:</p>
<pre><code>HTTP/1.1 200 OK
Content-type: application/json
{
  Year : 2013,
  Number : 1,
  Status : "P" ...
}</code></pre>
<p>Note that in the second type of call, the method is specified in the <code>X-HTTP-Method-Override</code> header.</p>

<h5>1.4.7 Example of a Call to a Non-Static Method</h5>
<p>The following cases are examples of calling a non-static method:</p>
<ul>
  <li>A resource identified by the PK in the URL and any simple parameters passed in the URL:</li>
  <pre><code>CALCULATEBALANCE http://www.progamma.com/NewWebApp/Invoice/2013/1?Discount=0.5 HTTP/1.1</code></pre>
  <li>A resource identified by the PK in the URL and object-type parameters passed in the content:</li>
  <pre><code>CALCULATEBALANCE http://www.progamma.com/NewWebApp/Invoice/2013/1 HTTP/1.1
Content-type: application/json
{
  DiscountObj : { ... }
  ... }</code></pre>
  <li>A resource instance and object-type parameters passed in the content, in which case the instance must be identified by the name <code>_ID_INSTANCE</code>:</li>
  <pre><code>CALCULATEBALANCE http://www.progamma.com/NewWebApp/Invoice HTTP/1.1
Content-type: application/json
{
  _ID_INSTANCE:
  {
    Year : 2013,
    Number : 1,
    Status : "P" ...
  },
  DiscountObj : { ... }
  ... }</code></pre>
</ul>
<p>The response will be the response for static methods.</p>

      `,
    },

    {
      title: 'Algorithm for handling a call ',
      description:
        'This section describes in detail how a Web API call is handled',
      popupContent: `
      <p><strong>Note:</strong> By enabling the WebAPI service on a class within the application configuration file (such as <code>web.config</code> in C# or <code>web.xml</code> in Java), the required mappings are included to inform the web server that the application will handle specific Web API URLs.</p>

      <p>When a request reaches the server, it checks whether it is a Web API request. This is identified if the URL does not end with the default document (e.g., <code>AppName.aspx</code> or <code>AppName.htm</code>). If the request is not a Web API call, the RD3 framework handles the request instead. Regardless of the request type, the <code>Initialize</code> event is always triggered. This event can be used to verify whether the request is a Web API call by using the <code>WebApiService.IsWebApiRequest</code> function.</p>

      <p>The server then extracts the class name, as well as any format and primary key (PK) values from the URL. If the class instance cannot be created, the server will return the following error:</p>

      <pre>HTTP/1.1 405 Method Not Allowed
      Content-type: text/plain; charset=utf-8
      Class not found for uri '&lt;URL path&gt;'</pre>

      <p>The server will also check whether the class has WebAPI service enabled. If the service is not enabled, the request will fail with the following error:</p>

      <pre>HTTP/1.1 405 Method Not Allowed
      Content-type: text/plain; charset=utf-8
      Class '&lt;class Tag&gt;' not enabled for WebApi</pre>

      <p>Next, the method to be invoked is determined by checking the presence of the <code>X-HTTP-MethodOverride</code> header. The <code>WebApiService.GetMethod</code> function helps in identifying the method. If the method is not one of the basic types (GET, PUT, POST, DELETE), the server verifies if the WebAPI flag is enabled for that specific method. If not, the call fails with this error:</p>

      <pre>HTTP/1.1 405 Method Not Allowed
      Content-type: text/plain; charset=utf-8
      Method '&lt;method name&gt;' of class '&lt;class Tag&gt;' not enabled for WebApi</pre>

      <p>If the method is not found within the class, the request fails with:</p>

      <pre>HTTP/1.1 400 Bad Request
      Content-type: text/plain; charset=utf-8
      Method '&lt;method name&gt;' of class '&lt;class Tag&gt;' not found</pre>

      <p>For custom methods, the server checks if the method returns a serializable value, such as a simple type or an <code>IDDocument</code> or <code>IDCollection</code> object. If it does not, the request fails with the following error:</p>

      <pre>HTTP/1.1 400 Bad Request
      Content-type: text/plain; charset=utf-8
      Method '&lt;method name&gt;' of class '&lt;class Tag&gt;' has a return value not serializable</pre>

      <p>The server performs similar checks for method parameters. If any parameter is not serializable, the request will fail with this error:</p>

      <pre>HTTP/1.1 400 Bad Request
      Content-type: text/plain; charset=utf-8
      Method '&lt;method name&gt;' of class '&lt;class Tag&gt;' has at least one parameter not serializable</pre>

      <p>Additional checks are performed to ensure that the request adheres to specifications. For example:</p>
      <ul>
        <li>Parameters provided when they are not required or missing when they are required</li>
        <li>Parameters provided in both the URL and the content</li>
        <li>PK values provided when not required or missing when required</li>
        <li>Content provided when not required or missing when required</li>
      </ul>

      <p>In these cases, the response status code will always be 400 Bad Request. Once the content (if present) is read, if an error occurs during parsing, the request fails with:</p>

      <pre>HTTP/1.1 400 Bad Request
      Content-type: text/plain; charset=utf-8
      Unable to parse content of the request. Invalid &lt;format&gt; format: &lt;content&gt;</pre>

      <p>Next, parameters and the resource instance are extracted from the content. The parameters are converted to the correct types, and the instance is loaded from the appropriate format. If any conversion fails, the request will return:</p>

      <pre>HTTP/1.1 400 Bad Request
      Content-type: text/plain; charset=utf-8
      Value '&lt;i-th value&gt;' cannot be converted for property '&lt;Tag of i-th property&gt;' of class '&lt;class Tag&gt;'</pre>

      <p>If the request is not for a resource read or search (GET), the <code>LoadFromDB</code> method is called on the instance. If loading the instance fails, the server returns:</p>

      <pre>HTTP/1.1 404 Not Found
      Content-type: text/plain; charset=utf-8
      &lt;document DNA&gt; not found</pre>

      <p>For static methods, parameters are checked and converted. If an error occurs, the request fails with a 400 Bad Request and provides an error message. For search requests, the server reads the search criteria. If a matching property is not found, the following error is returned:</p>

      <pre>HTTP/1.1 404 Not Found
      Content-type: text/plain; charset=utf-8
      Property '&lt;criteria name&gt;' not found</pre>

      <p>For update requests with values in the URL, those values are copied to the instance. If a matching property is not found or the value cannot be converted, the request will return a 400 Bad Request. For update requests with an instance in the content, the original instance is loaded, and the values from the provided instance are copied. If the instance has children that are not found in the original instance, they are added as new entries.</p>

      <p>For insertion requests, documents are simply marked as inserted in the hierarchy according to the level specified in the <code>WebApiService</code> property.</p>

      <p>At this point, request headers are copied and can be queried using the <code>WebApiService.GetHeaders</code> method. Finally, the <code>OnWebApi</code> event is triggered for the document instance. This event allows for changes to the default operations performed by the framework up to that point. If no cancellation occurs (i.e., <code>Cancel</code> is not set to true), the operation proceeds, and the response is returned.</p>

      <p>If any exception occurs during this process, the call fails with the following error:</p>

      <pre>HTTP/1.1 404 Not Found
      Content-type: text/plain; charset=utf-8
      Unknown error: &lt;exception text&gt;</pre>

      <p>In all cases, except for the one described above, the session is terminated.</p>

      `,
    },


    {
      title: 'Customization code examples',
      description:
        'This section shows some examples of using the OnWebApi event.',
      popupContent: `
        Data Update soon......
      `,
    },

    // {
    //   title: 'Modules',
    //   description:
    //     'Angular Application is just a collection of many individual module.',
    //   popupContent: `
    //     <p>Angular is a Modular framework. Modularity is the property which measures the amount to which components connected together within a system can be separated as an individual unit and can function by themselves without depending on each other.</p>
    //     <p>An angular application can contain several modules.There is minimum one module present in every angular application, which is <strong>'NgModule'</strong></p>
    //     <ul>
    //       <li>Module is a unit that groups Components, Pipes, Directives, and Services.</li>
    //       <li>The default NgModule is AppModule and is present in app.module.ts file.When you launch the application, this is the module that gets bootstrapped.</li>
    //       <li>You can also import and export functionalities from one module to the other for efficient and clean programming.</li>

    //     </ul>
    //     <img src="https://gist.github.com/user-attachments/assets/abf9d5ac-420e-45af-a0f5-ef357f10b089" width="450px">

    //     <p>For More Info: </p>
    //     <a href="https://angular-training-guide.rangle.io/modules/introduction" target="_blank">Angular Modules</a>
       
    //   `,
    // },
  ];

  getCards() {
    return this.cards;
  }

  getCardByTitle(title: string) {
    return this.cards.find(card => card.title === title);
  }
}
