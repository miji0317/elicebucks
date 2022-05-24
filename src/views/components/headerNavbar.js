import { getUserData, removeUser } from '../localStorage.js';

const headerNavbar = {
  render: async () => {
    const { name, role } = getUserData();
    console.log(getUserData());
    return `
        <ul id="navbar">
            ${
              name && role === 'basic-user'
                ? `<li><a href="/myPage/:id">${name}</a></li>
                <li><a class="logout" href="/">로그아웃</a></li>
                `
                : name && role === 'admin-user'
                ? `<li><a href="/myPage">관리자</a></li>
                <li><a class="logout" href="/">로그아웃</a></li>
                <li><a href="/dashboard">관리페이지</a></li>
                `
                : `<li><a href="/login">로그인</a></li>
                <li><a href="/register">회원가입</a></li>
                `
            }
            <li>
            <a href="#cart" aria-current="page">
                <span class="icon">
                <i class="fas fa-cart-shopping"></i>
                </span>
                <span>카트</span>
            </a>
            </li>
        </ul>
        `;
  },
  componentDidMount: async () => {
    let logouts = document.getElementsByClassName('logout');
    console.log(logouts);
    for (let i = 0; i < logouts.length; i++) {
      logouts[i].addEventListener('click', removeUser);
    }
  },
};
export default headerNavbar;
