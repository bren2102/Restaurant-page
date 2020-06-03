import burgerimg from './Burger.png';

const renderContact = (homelink, menulink, contactlink) => {
  const content = document.querySelector('#content');


  const header = document.createElement('header');
  const h2Header = document.createElement('h2');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const btn = document.createElement('button');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');

  content.appendChild(header);
  header.appendChild(h2Header);
  header.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  li1.appendChild(btn);

  h2Header.innerHTML = `<span class="iconify" data-inline="false" data-icon="openmoji:hamburger" style="font-size: 30px;"></span>
                  Burgie`;
  btn.textContent = 'Booking now';
  li2.textContent = 'Contact us';
  li3.textContent = 'Menu';
  li4.textContent = 'Home';

  const wrap = document.createElement('div');

  const clean = () => {
    wrap.remove();
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

  const contact = document.createElement('div');
  const leftContact = document.createElement('div');
  const formContact = document.createElement('div');

  content.appendChild(wrap);
  wrap.appendChild(header);
  wrap.appendChild(contact);
  contact.appendChild(leftContact);
  contact.appendChild(formContact);

  wrap.classList = 'wrap';
  contact.classList = 'contact';
  leftContact.classList = 'left-contact';
  formContact.classList = 'form-contact';

  const imgForm = document.createElement('img');
  const h2Form = document.createElement('h2');
  const formName = document.createElement('div');
  const formEmail = document.createElement('div');
  const formText = document.createElement('div');
  const buttonForm = document.createElement('button');

  leftContact.appendChild(imgForm);
  formContact.appendChild(h2Form);
  formContact.appendChild(formName);
  formContact.appendChild(formEmail);
  formContact.appendChild(formText);
  formContact.appendChild(buttonForm);

  formName.classList = 'form-name';
  formEmail.classList = 'form-email';
  formText.classList = 'form-text';

  h2Form.textContent = 'Type your message here:';
  buttonForm.textContent = 'Send Now';
  imgForm.src = burgerimg;

  formName.innerHTML = `<span>Name: </span>
          <input type="text">`;
  formEmail.innerHTML = ` <span>E-mail: </span>
          <input type="text">`;
  formText.innerHTML = `<span>Message: </span>
          <input type="text">`;
};

export default (renderContact);