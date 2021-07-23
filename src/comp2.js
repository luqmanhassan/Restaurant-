function main_menu() {
  const x = document.getElementById('_mainTag');
  const maindiv_tag_2 = document.createElement('div');
  maindiv_tag_2.id = 'main__div_2';

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
    maindiv_tag_2.appendChild(mainbutton_tag);
  }

  x.appendChild(maindiv_tag_2);
}

export default main_menu;
