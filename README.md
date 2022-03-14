# helper_Functions
Repository for my helper functions for web development.

Simple (probably over done) javascript navagation builder that requires 2 arrays, one is a list of  text for
links, and the other for the actual list of file names/urls. 



For sites with a small amount of links, this is probably overkill. However when you start dealing with sites 
that have upwards of 10 pages it can become tedious to maintain all the navigation. This is just my attempt
to make it a little smoother.

Working on adding drop down possibilities but for now this is just a plain Top level navigation generator. 

On all HTML files it is required to have a ul or an ol tag with an ID, this is where the navigation will appear. 
Latest update has used the 'id' argument for calling the function as a prefix for making classes in the 
resulting links.

The footer.js is a super simple way to keep footer content uniform across an entire site.
The current itteration requires a p tag with the id of footer. It also maintains the current
 year to keep your copyright up to date. 
