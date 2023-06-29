# Bootstrap

Notes and projects based on: Bootstrap module        
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Notes

### BOOTSTRAP

* **Bootstrap** is a **CSS framework**.     
* It contains **pre-made CSS files**, which we can simply include into our project in order to use their pre-built components and styling.       
* **Mobile First approach**
    * 12 column layout system built on top of Flexbox.
    * Creates responsive websites 
    * Creates Websites that work and look great on mobile as well as desktop   
* [Documentation Bootstrap (5.3 version)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### How to use Bootstrap:
* CDN Link
    * Hold the stylesheet from an external source
* Download the source code itself
    * Link it to our project
     
HTML is executed from top to bottom:
    1. Bootstrap link
    2. CSS stylesheet
Otherwise, Bootstrap will override our styles.

### Bootstrap Layout
* The 12 column layout system: 
    * One of the most powerful features of Bootstrap
    * It is made of 3 components: 
        1. A **div** that has a **class** of **container**
            * The bootstrap container is responsive
            * It will have a different size on different sized screens
        2. A **nested** container div of **class row**
        3. A **nested** container div of **class col**     
        ```html
        <div class="container">
            <div class="row">
                <div class="col-sm">
                Hello World
                </div>
            </div>
        </div>
        ```
    * Multiple columns laid out inside these rows:
        * Bootstrap will automatically give every column inside the row       
        Equal spacing and space them across the entire width of the container
* Sizing Columns
    * Each of our Bootstrap's **rows** has **12 columns** 
    * The column grid system accepts the format:      
    `col-ScreenSize-NumberOfColumns`
        * ScreenSize: uses the predefined breakpoints to add responsivness
        * NumberOfColumns how many of the 12 columns we are going to take in the given screen size.    
        eg: `<div class="col-sm-12 col-md-6 col-lg-2"> ... </div>`
    * These parameter are optional
        * `col` will take 100% width, 12/12 columns in all screen sizes
            * Applied to all not defined breakpoints as well
        * `col-4` will take 4/12 columns in all screen sizes
     
* Bootstrap Breakpoints
    * Bootstrap has predefined breakpoints defined based on common screen sizes
    * If we reduce the screen size to less than the specified breakpoint the divs will go to 100% width

### Bootstrap Components



## What I’ve learned from this project

* Bootstrap
* Bootstrap Layout
* Bootstrap Components


## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [Bootstrap Documentation (5.3 version)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
