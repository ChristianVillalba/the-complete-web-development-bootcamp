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
 
## What I’ve learned from this project

* How to add CSS     
* CSS Selectors


## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

