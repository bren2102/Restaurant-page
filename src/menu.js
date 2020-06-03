const renderMenu = (homelink, menulink, contactlink) => {
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

  h2_header.textContent = 'Burgie';
  btn.textContent = 'Booking now';
  li2.textContent = 'Contact us';
  li3.textContent = 'Menu';
  li4.textContent = 'Home';

  const clean = () => {
    header.remove();
    menu.remove();
  };

  li4.addEventListener('click', () => {
    clean();
    homelink(homelink, menulink, contactlink);
  });

  li3.style.fontSize = '20px';
  li3.style.fontWeight = 'bold';
  btn.style.backgroundColor = '#f5a00f';
  btn.style.color = 'white';

  const menu = document.createElement('div');
  menu.classList = 'menu';
  const menu_desc = document.createElement('div');
  menu_desc.classList = 'menu-desc';
  const h2_menu_desc = document.createElement('h2');
  const menu_list = document.createElement('div');
  menu_list.classList = 'menu-list';

  content.appendChild(menu);
  menu.appendChild(menu_desc);
  menu_desc.appendChild(h2_menu_desc);
  menu.appendChild(menu_list);

  h2_menu_desc.textContent = 'Explore our best Menu';

  const menuitem1 = document.createElement('div');
  menuitem1.classList = 'menuitem';
  const menuitem2 = document.createElement('div');
  menuitem2.classList = 'menuitem';
  const menuitem3 = document.createElement('div');
  menuitem3.classList = 'menuitem';
  const menuitem4 = document.createElement('div');
  menuitem4.classList = 'menuitem';
  const menuitem5 = document.createElement('div');
  menuitem5.classList = 'menuitem';
  const menuitem6 = document.createElement('div');
  menuitem6.classList = 'menuitem';

  menu_list.appendChild(menuitem1);
  menu_list.appendChild(menuitem2);
  menu_list.appendChild(menuitem3);
  menu_list.appendChild(menuitem4);
  menu_list.appendChild(menuitem5);
  menu_list.appendChild(menuitem6);

  menuitem1.innerHTML = `<div class="item-img">
              <img src="../src/burger2.png" alt="">
            </div>
            <div class="item-desc">
              <div class="menu-price">
                <h2>Burger #1</h2>
                <h2>10$</h2>
              </div>
              <span>
                Description of the burger and what you'll get
              </span>
              <div class="item-cal">
                <div class="menu-calification">
                  <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                    style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                    style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                    style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                    style="color: #F5A00F; font-size: 20px;"></span>
                  <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                    style="color: #F5A00F; font-size: 20px;"></span>
                </div>
                <div class="add-item"> + </div>
              </div>
            </div>`;

  menuitem2.innerHTML = `<div class="item-img">
            <img src="../src/burger3.png" alt="">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Burger #1</h2>
              <h2>10$</h2>
            </div>
            <span>
              Description of the burger and what you'll get
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`

menuitem3.innerHTML = `<div class="item-img">
            <img src="../src/burger4.png" alt="">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Burger #1</h2>
              <h2>10$</h2>
            </div>
            <span>
              Description of the burger and what you'll get
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;

menuitem4.innerHTML = `<div class="item-img">
            <img src="../src/burger5.png" alt="">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Burger #1</h2>
              <h2>10$</h2>
            </div>
            <span>
              Description of the burger and what you'll get
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;

menuitem5.innerHTML = `<div class="item-img">
            <img src="../src/burger6.png" alt="">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Burger #1</h2>
              <h2>10$</h2>
            </div>
            <span>
              Description of the burger and what you'll get
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;

menuitem6.innerHTML = `<div class="item-img">
            <img src="../src/burger7.png" alt="">
          </div>
          <div class="item-desc">
            <div class="menu-price">
              <h2>Burger #1</h2>
              <h2>10$</h2>
            </div>
            <span>
              Description of the burger and what you'll get
            </span>
            <div class="item-cal">
              <div class="menu-calification">
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
                <span class="iconify" data-inline="false" data-icon="ant-design:star-filled"
                  style="color: #F5A00F; font-size: 20px;"></span>
              </div>
              <div class="add-item"> + </div>
            </div>
          </div>`;
}

export default (renderMenu);