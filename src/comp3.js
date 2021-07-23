function main_contact() {
  const x = document.getElementById('_mainTag');
  const maindiv_tag_3 = document.createElement('div');
  maindiv_tag_3.id = 'main__div_3';
  let points = [
    'Phone: #234 -324-3243',
    'Address: 233 Olympia Ave S Seattle, WA',
  ];

  for (let i = 0; i < points.length; i++) {
    let mainp_tag = document.createElement('p');
    let mainp_textnode = document.createTextNode('' + points[i]);
    mainp_tag.appendChild(mainp_textnode);
    maindiv_tag_3.appendChild(mainp_tag);
  }

  const iframe_tag = document.createElement('iframe');
  iframe_tag.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.7657919487883!2d-122.28679428437408!3d47.47499327917615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549043227efa76cb%3A0xd65c0368248f4088!2sJuba%20Restaurant%20%26%20Caf%C3%A9!5e0!3m2!1sen!2sus!4v1626825739415!5m2!1sen!2sus';
  maindiv_tag_3.appendChild(iframe_tag);

  x.appendChild(maindiv_tag_3);
}

export default main_contact;
