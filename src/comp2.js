function main_menu() {
  const content_div = document.getElementById('content');
  const main_tag = document.createElement('main');
  const maindiv_tag = document.createElement('div');
  // maindiv_tag.id = 'maindiv';
  let points = [
    'Basto & Chicken Suqar',
    'Basto & Beef Suqar',
    'Baris & Hilib',
    'Baris & Chicken',
    'Jabati',
    'Maraq',
  ];

  for (let i = 0; i < points.length; i++) {
    let mainbutton_tag = document.createElement('button');
    let mainbutton_textnode = document.createTextNode(points[i]);
    mainbutton_tag.appendChild(mainbutton_textnode);
    maindiv_tag.appendChild(mainbutton_textnode);
    maindiv_tag.appendChild(mainbutton_tag);
  }
  /*
  const img_tag = document.createElement('img');
  img_tag.src = '/images/cook.jpeg';
  maindiv_tag.appendChild(img_tag);
*/
  main_tag.appendChild(maindiv_tag);
  content_div.appendChild(main_tag);

  maindiv_tag.id = 'main__div';
}

export default main_menu;
