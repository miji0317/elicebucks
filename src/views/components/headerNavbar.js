import { getUserData, removeUser } from '../utils/user.js';
//이름 + 님, 드랍메뉴
const headerNavbar = {
  render: () => {
    const { name, role } = getUserData();

    return `
        <ul id="navbar">
            ${
              name && role === 'basic-user'
                ? `
                <nav class="" role="navigation" aria-label="dropdown navigation">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="/myPage" id="userName">${name}님</a>
                    <div class="navbar-dropdown">
                      <a class="navbar-item" href="/myPage">
                        마이페이지
                      </a>
                      <a class="navbar-item" href="/myOrder">
                        주문 조회
                      </a>
                    </div>
                  </div>
                </nav>

                <li><a class="logout" href="/">로그아웃</a></li>
                `
                : name && role === 'admin-user'
                ? `
                <li>
                <nav class="" role="navigation" aria-label="dropdown navigation">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="/myPage" id="userName">${name}님</a>
                    <div class="navbar-dropdown">
                      <a class="navbar-item" href="/myPage">
                        마이페이지
                      </a>
                      <a class="navbar-item" href="/myOrder">
                        주문 조회
                      </a>
                    </div>
                  </div>
                </nav>
                </li>
                <li><a class="logout" href="/">로그아웃</a></li>
                <li><a href="/adminPage">관리페이지</a></li>
                `
                : `<li><a href="/login">로그인</a></li>
                <li><a href="/register">회원가입</a></li>
                `
            }
            <li>
            <a href="/cart" aria-current="page">
                <span class="icon">
                <i class="fas fa-cart-shopping"></i>
                </span>
                <span>카트</span>
            </a>
            </li>
        </ul>
        `;
  },
  componentDidMount: () => {
    let logouts = document.getElementsByClassName('logout');
    Array.from(logouts).forEach((logout) => {
      logout.addEventListener('click', removeUser);
    });
  },
};
export default headerNavbar;
