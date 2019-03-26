//Chapter 1
//Introducing Events
/*Links for all events:
https://developer.mozilla.org/en-US/docs/Web/Events
https://developer.mozilla.org/en-US/docs/Web/API/Event
*/

//Event handler on JS
document.getElementById('secondButton').onclick = function(){
    alert('Hi from JS');
}

//use id directly and assign a function
thirdButton.onclick = sayHi;

function sayHi() {
    alert('Hi from function!')
}

//Remove event assignment
secondButton.onclick = null;

//'this' usage
fourthButton.onclick = alertValue;

function alertValue(){
    alert(this.value);
}

/* !!!!!Important advices!!!!!!:
1)  Create event handlers on js part.
2)  Create functions and conncet event handlers to functions.
3)  Do not use Bracets with function calls.
4)  Do not forget, you can assign event handler just one time.
    If you do it again, you will overwrite old one.
*/

//Chapter 2
//addEventListener-removeEventListener

fifthButton.onclick = function() {alert('1')};
// replaces the previous handler
fifthButton.onclick = function() {alert('2')};

//Set event listener with traditinal function
fifthButton.addEventListener('click', function() {alert('3')});

//Set event listener with outer function
fifthButton.addEventListener('click', alertValue);

//Set event listener with arrow functions
fifthButton.addEventListener('click', () => {alert('Hi from Arrow Func.');});

let myFirstArrowFunc = () => {
    alert('Hello World!');
}

//Set event listener with arrow functions
fifthButton.addEventListener('click',myFirstArrowFunc );

//Remove event Listener
fifthButton.removeEventListener('click', alertValue);
//Next line does not work. Because removeEventListener just work with function calls!
fifthButton.removeEventListener('click', function() {alert('3')});

/* !!!Warning!!!
There exist events that can’t be assigned via a DOM-property. Must use addEventListener.
For instance, the event transitionend (CSS animation finished) is like that.
*/

//Chapter 3
// Event Object
addEventListener('click', () => console.log(event));


