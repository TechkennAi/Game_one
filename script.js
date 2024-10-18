'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const openBtn = document.querySelectorAll('.show-modal'); // this is used where there are similar classes and we want the same functionality. So, this returns an array called openBtn
console.log(openBtn);
const modalEnd = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
console.log(openBtn);
for (let i = 0; i < openBtn.length; i++) {
  //What i am doing here is running a loop and in this loop, i am displaying on the console the click event that happens on click of the button. Which the for loop, looping through the array openBtn and displaying on the console, what    happens on the click of each buton.
  const modalOpen = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  openBtn[i].addEventListener(
    'click',
    modalOpen
    /*    console.log('Button clicked ' + [i + 1]);
    console.log(document.querySelector('.modal')); */ // I know this selects the dom element
    //therefore modal = document.querySelector('.modal') returns the element to the modal variable used below
    // modal.classList.remove('hidden'); // the class list property when used on an element opens a pathway for the direct manipulation of the clases within that element, not the css styles of the element. Here I used on the classList the remove method, to r=remove the hidden class on click of the button
    // overlay.classList.remove('hidden'); // the class list property when used on an element opens a pathway for the direct manipulation of the clases within that element, not the css styles of the element. Here I used on the classList the remove method, to r=remove the hidden class on click of the button
  );
}

closeBtn.addEventListener('click', modalEnd);

overlay.addEventListener('click', modalEnd);

//listening for keyboard events

/*  For keyboard events, the addeventlistener can listen for 3 events. These are the keyup, keydown and the keypress */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // this contain method checks within a dom element class, to see if there exists the specified elements ('hiiden). While the add method inserts a new element and the remove, kicks out the specified element
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log(e);
  }
});
