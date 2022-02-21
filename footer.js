// Setup for footer text with current year always showing
let currentDate = new Date();
let year = currentDate.getFullYear();

function makeFooter() {
//   Useful for making a single change and it populates the entire site
  document.getElementById("footer").innerHTML = "Copyright &#169 " + year + " Little Ma Productions";
}

makeFooter();
