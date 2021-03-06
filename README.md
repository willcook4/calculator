# Calculator
**Mobile**
![calculator](./calc.png)

**Tablet**
![calculator on tablet](./calc-tablet.png)

**Desktop**
![cacluator on desktop](./calc-desktop.png)

This Project was built for a code test.

### See the working example here [link](https://safe-beyond-56415.herokuapp.com/)

##### Task
- Build a calculator where you can save your maths.
- Minimum browser requirement is Chrome.
- The calculator should fit within the size of the viewport for Mobile and Tablet.
- Use of pre-processor for Javascript and CSS is very welcome but not essential
- Unit-Testing is an added value.
- The technology stack is at your complete discretion.
- Provide clear and valid motivations about your decisions over frameworks (if any) and patterns.
- Use the wireframes provided.

##### Behaviours
*Result*: Should display the current math
*SAVE*: Press to save your current math into *Saved Maths*. When pressed, the user will be
prompt to submit a name
*CANCEL*: Press to reset Result
*Saved Maths*: List of selectable maths. Maths should be ordered by date and time
*Math Name/Date*: Press to display the selected math in Result
*DELETE*: Remove a saved Math Name/Date from Saved Maths

##### My result
Using JavaScript I created an Express Node app. Gulp tasks made the use of SASS and development easier. To make the responsive nature of the design easier I used a front-end framework called [Skeleton](http://getskeleton.com/). Sorting of the list was achieved by using the [TinySort](http://tinysort.sjeiti.com/index.html) library, a task that given the potential complexity could have taken a fair bit of vanilla JavaScript. [Moment](http://momentjs.com/) was used to make time handling easier and more human-friendly on the front-end.

HTML has been checked to be valid with [W3](https://validator.w3.org). JavaScript has been checked with ESLint.

JavaScript ES6 was used in the sever.js file as no transcompilation is needed for the version of node used. JavaScript ES5 was used natively on browser side code.

##### Future development
- Add unit testing with a Mocha and Chai. Or a more resolved test with a testing suite such as Saucelabs. Not done due to time restriction.
- Add in Babel into the gulp tasks and refactor the main.js file into JavaScript ES6.
- Further browser testing(Chrome and Safari tested so far).
- Ensure code and all external libraries are production ready. Minimise and Uglify.

##### To run this code yourself...
- Clone this repo
- Run `npm i` to install the packages
- Run `gulp`
- Go to http://localhost:8000 in your browser of choice.