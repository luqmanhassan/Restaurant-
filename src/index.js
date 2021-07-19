/* 
  

      <div id="main__div">
        <p>Best Somali Food In Seattle</p>
        <p>Since 1970</p>
        <img src="/images/cook.jpeg" />
        <p>Order Online or Come Visit Us!</p>
      </div>
  

    */

// Header
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

const main_tag = document.createElement('main');
const maindiv_tag = document.createElement('div');
let points = [
  'Best Somali Food In Seattle',
  'Since 1970',
  'Order Online or Come Visit Us!',
];

for (let i = 0; i < 3; i++) {
  let mainp_tag = document.createElement('p');
  let mainp_textnode = document.createTextNode('' + points[i]);
  mainp_tag.appendChild(mainp_textnode);
  maindiv_tag.appendChild(mainp_textnode);
  maindiv_tag.appendChild(mainp_tag);
}
const img_tag = document.createElement('img');
img_tag.src = '/images/cook.jpeg';
maindiv_tag.appendChild(img_tag);

main_tag.appendChild(maindiv_tag);
content_div.appendChild(main_tag);

maindiv_tag.id = 'main__div';

// Footer
const footer_tag = document.createElement('footer');
const p_tag = document.createElement('p');
const p_textnode = document.createTextNode('Made By Luqman Hassan');
p_tag.appendChild(p_textnode);
footer_tag.appendChild(p_tag);
content_div.appendChild(footer_tag);
