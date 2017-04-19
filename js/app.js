/*JS for overlay*/

/* Show Overlay
When overlay button is clicked add style visiblility: visible to overlay-container
*/
var lrgButtonEl = document.getElementById('lrg-overlay');
var smlButtonEl = document.getElementById('sml-overlay');
var lrgOverlay = document.getElementById('large');
var smlOverlay = document.getElementById('small');

lrgButtonEl.addEventListener('click', function() {
  console.log('hello');
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

/* Hide Comments
When view comments is visible add style visibility: hidden or add class hidden to the form element
Remove Class Open
*/