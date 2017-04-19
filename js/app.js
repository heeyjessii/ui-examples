/*JS for overlay*/

/* Show Overlay
When overlay button is clicked add style visiblility: visible to overlay-container
*/
  console.log('hello');
var lrgButtonEl = document.getElementById('lrg-overlay');
var smlButtonEl = document.getElementById('sml-overlay');
var lrgOverlay = document.getElementById('large');
var smlOverlay = document.getElementById('small');

lrgButtonEl.addEventListener('click', function() {
  lrgOverlay.style.visibility = 'visible';
});

smlButtonEl.addEventListener('click', function() {
  smlOverlay.style.visibility = 'visible';
});
/* Hide Overlay
When overlay close button is clicked add style visibility: hidden
*/

var close = document.getElementsByClassName('close');

function setClose() {
    lrgOverlay.style.visibility = 'hidden';
    smlOverlay.style.visibility = 'hidden';
    // console.log('hello there');
}

for (var i = 0; i < close.length; i++){
  close[i].addEventListener('click', setClose);
}

/*JS for Show Comments*/
/* Show Comments
When view comments is click add style visibility: visible or add class open to the form element
Remove Class Hidden
*/

var formEl = document.getElementsByClassName('form');
function removeClass(el) {
  console.log('removeclass',formEl[0].classList);
  console.log('el',el.nextElementSibling);
  el.nextElementSibling.classList.toggle('hidden');
}

var commentEl = document.getElementsByClassName('comment');
console.log('commentEl',commentEl.length);

for (var i = 0; i < commentEl.length; i++){
  console.log('commentEl[i]',commentEl[i]);
  console.log('i',i);
  commentEl[i].addEventListener('click', function() {
    removeClass(this);
  });
}


/* Hide Comments
When view comments is visible add style visibility: hidden or add class hidden to the form element
Add Class Hidden
*/
