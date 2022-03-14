// Setup for footer text with current year always showing
let currentDate = new Date();
let year = currentDate.getFullYear();

function makeFooter() {
  //   Useful for making a single change and it populates the entire site
  document.getElementById("footer").innerHTML = "Your copyright &#169 " + year + " you";
}

makeFooter();