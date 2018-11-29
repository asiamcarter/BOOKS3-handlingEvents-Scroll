let audrey = document.getElementById("audrey")



// Add an event listener to the `document` object to listen for the "scroll" event.


window.addEventListener('scroll', function() {

// Adjust the height of audrey to be 1/4 the value of`window.scrollY`. No lower than 100px, though.
    audrey.style.minHeight = "100px";
    audrey.style.height = window.scrollY * .25 + "px";
//    audrey.style.height = (window.scrollY * (1/4) +  `100px`);

// Adjust the width of audrey to be 1/3 the value of `window.scrollY`. No lower than 50px, though.
    audrey.style.minwidth = "50px";
    audrey.style.width = window.scrollY * .3 + "px"; 

//console logging the values 
    this.console.log(window.scrollY, audrey.style.height)
  });















