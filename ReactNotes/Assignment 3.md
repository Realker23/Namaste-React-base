## JSX

-> JSX is a javascript syntax which allow us to write HTML like CODE in .js file and which create the react element.
-> JSX is not HTML inside javascript.
-> JSX is use to merge JS and HTML togeather.
-> JSX and React both are different this, we can write react without JSX.
-> JSX is syntax while React is javascript library.

## React.ceateElement vs JSX?

React.createElement creates an JS object while JSX firstly create React.createElement itself and the create HTML element for rendering.

## Benifits or super powers of jsx?

o-Return a single root element:
should have a parent like <div></div> or <></> frigms
o-Close all the tags:
including self-closing tags <img> --> <img/>
o-camelCase most of the thing:
HTML-> <div class="abc">
JSX-> <div className="abc">

## Behind the scenes of JSX?

Behind the scenes this also create react element by babel and then convert it into HTMLELEMENT

## Component?

There are two type to components:
1- Class Base Component
2- Functional component
Any function which returns JSX element or React element is known as functional component.
Componemt name should starts from capital letter.

Composing component: JSx inside JSX

const title = () =>(
<h1>title here</h1>
)

const heading = () =>(
<>
{title()} or <title/> or <title></title>
<h1>code here</h1>
</>
)

## type in <script>?

it specified which type of src element will this script hold, like javascript, module etc.

## {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX ?

All of the syntax of different ways of rendering a component.
{TitleComponent}: This represents a value in the javascript. If there is a variable called TitleComponent then it will render the variable value in the page.
{<TitleComponent />}: This will return a React component in the page. There is no children passed in the parameter.
{<TitleComponent></TitleComponent>}: This is another way of rendering React component just like the self closing one. This way is used when we are supposed to provide some children in the Component as well.
