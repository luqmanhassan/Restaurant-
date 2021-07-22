function main_home() {
  const content_div = document.getElementById('content');
  const main_tag = document.createElement('main');
  const maindiv_tag = document.createElement('div');
  // maindiv_tag.id = 'maindiv';
  let points = [
    'Best Somali Food In Seattle',
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
  // content_div.insertBefore(main_tag, footer_tag);

  maindiv_tag.id = 'main__div';
}
export default main_home;
