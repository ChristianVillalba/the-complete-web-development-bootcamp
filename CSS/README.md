# CSS

Notes and projects based on: CSS module        
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Notes

### INTRODUCTION TO CSS

**CSS** is a language that describes the **style** of an **HTML file**       
CSS describes how the HTML elements will be displayed

Styling can affect color, font, size, borders, and many properties.   

### How to add CSS

There is 3 ways to add CSS to our website:
* Inline
    * Add Style to Html Element where it's placed
    * `<tag style="css-property: css-value"/>`
    * Good for targeting an individual Html Element
* Internal 
    * In <head>, add style to the specified element(s)
    * `<style> htmlElement {css-property: css-value;} </syle>`
    * Good for targeting an individual Html File
* External 
    * Styles in a separated file linked (in head) using:
    * `<link rel="stylesheet" href="style.csss"`
    * It can target an entire website and it's multiple webpages
    * The good practice and most used system to style a website
    
We can style inside a HTML File but the good practice is link a .css file to our .html file

### CSS Selsectors

Selectors allows to select subsets or even single elements to be styled
* Element Selectors
    * `h1 {color: red}`
* Class Selector
    * Requires adding a **class attribute** to the HTML Element
    * `.class {color: green}`
* Id Selector
    * Requires adding an **id attribute** to the HTML Element
    * `#id {color: green}`
* Attribute Selector
    * We can select **elements** that have particular **attributes** or **attributes values**
    * `htmlElement[attribute/attribute="value"]{color: red}`
* Universal Selector
    * Selects all
    * `*{color: gold}`

Classes can be applied to multiple elements.       
Ids should target one single element. Ids must be unique.

### Color Properties

There are four ways to represent color in CSS:
* **Named colors**
    * There are more than 140 named colors, which you can use:
    * [Review named colors on MDN (Documentation)](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)  
* **Hexadecimal or hex colors**:
    * Hexadecimal is a number system that has sixteen digits, 0 to 9 followed by “A” to “F”.
    * Hex values always begin with `#` and specify values of red, blue, and green using hexadecimal numbers      
    eg: `#23F41A`.
    * Six-digit hex values with duplicate values for each RGB value can be shorted to three digits.
* **RGB**
    * RGB colors use the `rgb()` syntax with one value for red, one value for blue and one value for green.
    * RGB values range from 0 to 255         
    eg: `rgb(7, 210, 50)`.
* **HSL**
    * HSL stands for hue (the color itself), saturation (the intensity of the color), and lightness (how light or dark a color is).
    * Hue ranges from 0 to 360 and saturation and lightness are both represented as percentages      
    eg: `hsl(200, 20%, 50%)`.
    * **HSLA**
        * You can add opacity to color in RGB and HSL by adding a fourth value, **a**       
        * The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)         
        eg :`hsla(0, 100%, 50%, 0.5)`

### Font Properties

* `font-size` changes the size of a font 
    * `1px` pixel (1/96 of an inch)
    * `1pt` point (eg:a word document) (1/72 of an inch)
    * `1em` A reletive size to the parent. Full length of letter **m** (m represents 100% length)
    * `1rem` A reletive size to the root (of the html file).
        * This is a more consistent way of changing the sizing. 
* `font-weight` the font will look heavier by using 
    * You can have **normal** or you can have **bold**
    * There is different ways to change the font-weight:
        * Keywords: `bold`
        * Relative font weight (to parent): `lighter/bolder`
        * numbers: `100 - 900`
* `font-family` determines what you want your text to look like
    * It's common to write a backup generic font type as well
    * Google Fonts provides free fonts that can be used in an HTML file
* `text-align` changes the horizontal alignment of text

### The Box Model: Margin, Padding & Border

* Each HTML element is a box in itself and we can change the dimensions of those boxes by changing things such as width and height
* Box dimensions can be affected by border thickness and padding
    * The **border** HTML elements can take three values separated by a space
        * Thickness of the border
        * Style
        * Color
        * eg: `border: 10px solid black`
        * It can be modified with more specific rules 
    * The **padding** is the space between the border and the content
        * Adding more padding will add space between content and border
        * It will affect the dimenstions of the HTML Element
        * It can be modified with more specific rules 
    * The **margin** is a dimenstion outside the border
        * It separates the border and any other content that's on screen
* We can provide up to 4 values that will affect the border, padding and margin
    * 1 value: all the sides
    * 2 values: top & botton **+** left & right
    * 3 values: top **+** left & right **+** bottom 
    * 4 values: top **+** left **+** right **+** bottom
    * 1 value + auto: top & botton **+** centered
    * auto: top & botton = 0 **+** centered

### CSS Dispal Properties

There are three common types of `display` values:
* `inline` 
    * Elements take up as little space as possible
    * They can **not** have manually adjusted width or height
    * They will default to size of their content
    * eg set by default: <span>
* `block` 
    * Elements take up the width of their container
    * The can have manually **adjusted heights**
    * Most elements have this display set as default
* `inline-block` 
    * Elements can have set **width and height** 
    * They can also appear next to each other
    * They do not take up their entire container width

Display property: `none`
* It makes any element on the screen basically disappear
* Useful to hide elements
    * Eg: button that hides something when clicked

### Float & Clear properties

* The `float`: property can move elements as far left or as far right as possible
    * Useful to wrap text around an image (Images are displayed as block as default)
* The `clear`: clears any responsibility to wrap around things that are floating.
    * Eg: we don't want the footer to be wrapped around anything else

### Float & Clear properties

## What I’ve learned from this project

* What is CSS
* How to add CSS     
* CSS Selectors
* Color Properties
* Font Properties
* The Box Model: Margin, Padding, Border & Content
* CSS Dispal Properties
* Resposive websites

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

