import burgerimg from '../src/Burger.png';

const renderContact = (homelink, menulink, contactlink) => {
  const content = document.querySelector('#content');


  const header = document.createElement('header');
  const h2_header = document.createElement('h2');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const btn = document.createElement('button');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');

  content.appendChild(header);
  header.appendChild(h2_header);
  header.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  li1.appendChild(btn);

  h2_header.innerHTML = `<span class="iconify" data-inline="false" data-icon="openmoji:hamburger" style="font-size: 30px;"></span> Burgie`;
  btn.textContent = 'Booking now';
  li2.textContent = 'Contact us';
  li3.textContent = 'Menu';
  li4.textContent = 'Home';

  const clean = () => {
    header.remove();
  };

  li3.addEventListener('click', () => {
    clean();
    menulink(homelink, menulink, contactlink);
  });

  li4.addEventListener('click', () => {
    clean();
    homelink(homelink, menulink, contactlink);
  });

  li2.style.fontSize = '20px';
  li2.style.fontWeight = 'bold';
  btn.style.backgroundColor = '#f5a00f';
  btn.style.color = 'white';

  const wrap = document.createElement('div');
  const contact = document.createElement('div');
  const left_contact = document.createElement('div');
  const form_contact = document.createElement('div');

  content.appendChild(wrap);
  wrap.appendChild(header);
  wrap.appendChild(contact);
  contact.appendChild(left_contact);
  contact.appendChild(form_contact);

  wrap.classList = 'wrap';
  contact.classList = 'contact';
  left_contact.classList = 'left-contact';
  form_contact.classList = 'form-contact';

  const img_form = document.createElement('img');
  const h2_form = document.createElement('h2');
  const form_name = document.createElement('div');
  const form_email = document.createElement('div');
  const form_text = document.createElement('div');
  const button_form = document.createElement('button');

  left_contact.appendChild(img_form);
  form_contact.appendChild(h2_form);
  form_contact.appendChild(form_name);
  form_contact.appendChild(form_email);
  form_contact.appendChild(form_text);
  form_contact.appendChild(button_form);
  
  form_name.classList = 'form-name';
  form_email.classList = 'form-email';
  form_text.classList = 'form-text';
  
  h2_form.textContent = 'Type your message here:';
  button_form.textContent = 'Send Now';
  img_form.src = burgerimg;

  

  form_name.innerHTML = `<span>Name: </span>
          <input type="text">`;
  form_email.innerHTML = ` <span>E-mail: </span>
          <input type="text">`;
  form_text.innerHTML = `<span>Message: </span>
          <input type="text">`;
  
  

  
}

export default (renderContact);