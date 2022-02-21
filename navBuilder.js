// Autofill navigation on all pages. use a UL with the class of "nav" for main navigation v1

// Navigation Text and links listing
let navText = [];
let navLinks = [];


function navBuilder(id, textList, linkList) {

  // Getting the element with the id
  navList = document.getElementById(id);

  // looping through the arrays and matching the text with the link
  for (let i = 0; i < navText.length; i++) {
    pageLinks = document.createElement('li')

    // adds class name
    pageLinks.className = 'nav_item';

    // put it all together
    pageLinks.innerHTML += "<a href=\"" + linkList[i] + "\" class=\"nav_link\">" + textList[i] + "</a></li>";
    navList.appendChild(this.pageLinks);
  }

}
// Call the function for now
navBuilder("nav", navText, navLinks);
