import burgerimg from './assets/burgers.png';

const renderHome = (homelink, menulink, contactlink) => {
  const content = document.querySelector('#content');

  const wraptop = document.createElement('div');
  wraptop.classList.add('wraptop');

  const header = document.createElement('header');
  const h2Header = document.createElement('h2');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const btn = document.createElement('button');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');

  content.appendChild(wraptop);
  wraptop.appendChild(header);
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

  li4.style.fontSize = '20px';
  li4.style.fontWeight = 'bold';

  const main = document.createElement('main');
  const left = document.createElement('div');
  left.classList.add('left');
  const h2Main = document.createElement('h2');
  const spanMain = document.createElement('span');
  const btnMain = document.createElement('button');
  const right = document.createElement('div');
  right.classList.add('right');
  const burger = document.createElement('img');

  wraptop.appendChild(main);
  main.appendChild(left);
  left.appendChild(h2Main);
  left.appendChild(spanMain);
  left.appendChild(btnMain);
  main.appendChild(right);
  right.appendChild(burger);

  h2Main.innerHTML = `Your Favorite Burger <br>
              Delivered Hot & <br>
              Fresh`;
  spanMain.textContent = 'Delicious and fast service';
  btnMain.textContent = 'Order now';
  burger.src = burgerimg;

  const box = document.createElement('div');
  const boxDesc1 = document.createElement('div');
  const boxDesc2 = document.createElement('div');
  const boxDesc3 = document.createElement('div');

  box.classList.add('box');
  content.appendChild(box);

  const clean = () => {
    wraptop.remove();
    box.remove();
  };

  li3.addEventListener('click', () => {
    clean();
    menulink(homelink, menulink, contactlink);
  });

  li2.addEventListener('click', () => {
    clean();
    contactlink(homelink, menulink, contactlink);
  });

  boxDesc1.classList.add('box-desc');
  box.appendChild(boxDesc1);
  boxDesc2.classList.add('box-desc');
  box.appendChild(boxDesc2);
  boxDesc3.classList.add('box-desc');
  box.appendChild(boxDesc3);

  boxDesc1.innerHTML = `<span class="iconify" data-inline="false" data-icon="bi:clock-fill" style="color: #F5A00F; font-size: 40px;"></span>
        <h2>Today 10:00 - 19:00</h2>
        <span>Working hours</span>`;
  boxDesc2.innerHTML = `<span class="iconify" data-inline="false" data-icon="vaadin:location-arrow-circle" style="color: #F5A00F; font-size: 40px;"></span>
        <h2>Velyka Vasylksiva 100</h2>
        <span>Get directions</span>`;
  boxDesc3.innerHTML = `<span class="iconify" data-inline="false" data-icon="el:phone-alt" style="color: #F5A00F; font-size: 40px;"></span>
        <h2>+38 (068) 833 24 15</h2>
        <span>Call Online</span>`;
};

export default (renderHome);