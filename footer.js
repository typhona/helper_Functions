// Setup for footer text with current year always showing
let currentDate = new Date();
let date = currentDate.getDate();
//Be careful! January is 0 not 1
let month = currentDate.getMonth();
// Adjust month to reduce maths
month = month + 1;
let hour = currentDate.getHours();
let year = currentDate.getFullYear();

function makeFooter() {
  // document.getElementById("demo").innerHTML = "Paragraph changed!";
  document.getElementById("footer").innerHTML = "Copyright &#169 " + year + " Putt-Putt&#174; Golf and Games all rights reserved | Made by Little Ma";
  // footerText.innerHTML = "This is just some bullshit" + year;
}

makeFooter();