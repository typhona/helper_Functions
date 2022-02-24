// Autofill navigation on all pages. use a UL with the class of "nav" for main navigation v1

// Navigation Text and links listing
let navText = ['House', 'Food', 'Work'];
let navLinks = ['house.html', 'food.html', 'work.html'];





function navBuilder(id, textList, linkList) {

  // Getting the element with the id
  navList = document.getElementById(id);
  // let openTag = document.innerHTL

  // looping through the arrays and matching the text with the link
  for (let i = 0; i < textList.length; i++) {

    listItem = document.createElement('li');
    // adds classes
    listItem.className = id + '_list_item';
    linkClass = id + "_list_link";
    // put it all together
    listItem.innerHTML += "<a href=\"" + linkList[i] + "\" class=\"" + linkClass + "\">" + textList[i] + "</a></li>";
    navList.appendChild(listItem);
  }

}
// Call the function here or include it in a script tag at the end of the html.
navBuilder("nav", navText, navLinks);