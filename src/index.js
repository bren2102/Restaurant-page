const content = document.querySelector('#content');

const wraptop = document.createElement('div');
wraptop.classList.add('wraptop');

const header = document.createElement('header');
const h2_header = document.createElement('h2');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const btn = document.createElement('button');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

content.appendChild(wraptop);
wraptop.appendChild(header);
header.appendChild(h2_header);
header.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
li1.appendChild(btn);

h2_header.textContent = 'Burgie';
btn.textContent = 'Booking now';
li2.textContent = 'Contact us';
li3.textContent = 'About us';
li4.textContent = 'Home';

const main = document.createElement('main');
const left = document.createElement('div');
left.classList.add('left');
const h2_main = document.createElement('h2');
const span_main = document.createElement('span');
const btn_main = document.createElement('button');
const right = document.createElement('div');
right.classList.add('right');
const burger = document.createElement('img');

wraptop.appendChild(main);
main.appendChild(left);
left.appendChild(h2_main);
left.appendChild(span_main);
left.appendChild(btn_main);
main.appendChild(right);
right.appendChild(burger);

h2_main.textContent = `Your Favorite Burger <br>
            Delivered Hot & <br>
            Fresh`;
span_main.textContent = 'Delicious and fast service';
btn_main.textContent = 'Order now';
burger.src = '../src/burgers.png'