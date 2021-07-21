import main_home from './comp1';
import main_menu from './comp2';
import main_contact from './comp3';

const content_div = document.getElementById('content');
const header_tag = document.createElement('header');
const h1_tag = document.createElement('h1');
const h1_textnode = document.createTextNode('Juba');
content_div.appendChild(header_tag);
header_tag.appendChild(h1_tag);
h1_tag.appendChild(h1_textnode);

//Nav
const nav_tag = document.createElement('nav');
const links = ['Home', 'Menu', 'Contact'];
for (let i = 0; i < 3; i++) {
  let div_tag = document.createElement('div');
  let div_textnode = document.createTextNode('' + links[i]);
  div_tag.appendChild(div_textnode);
  nav_tag.appendChild(div_tag);
}
content_div.appendChild(nav_tag);

// Main
main_home();

// Extra Nav Stuff
let y = nav_tag.getElementsByTagName('div');
let x = [home, menu, contact];
for (let j = 0; j < 3; j++) {
  y[j].addEventListener('click', x[j]);
}

function home() {
  document.getElementById('main__div').style.display = 'none';
  main_home();
}
function menu() {
  document.getElementById('main__div').style.display = 'none';
  main_menu();
}
function contact() {
  document.getElementById('main__div').style.display = 'none';
  main_contact();
}

// Footer
const footer_tag = document.createElement('footer');
const p_tag = document.createElement('p');
const p_textnode = document.createTextNode('Made By Luqman Hassan');
p_tag.appendChild(p_textnode);
footer_tag.appendChild(p_tag);
content_div.appendChild(footer_tag);
