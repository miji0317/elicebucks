import * as Api from '/api.js';

import { validateLogin } from '/utils/validateForm.js';
import insertCategoryList from '../components/navCategoryList.js';
import alertModal from '/components/alertModal.js';
import successModal from '/components/successModal.js';
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const loginForm = document.querySelector('#loginForm');

// 요소(element), input 혹은 상수
addAllElements();
addAllEvents();
insertCategoryList();

// html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
async function addAllElements() {}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  // submitButton.addEventListener('click', handleSubmit);
  loginForm.addEventListener('submit', handleSubmit);
}

// 로그인 진행
async function handleSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // 잘 입력했는지 확인
  try {
    validateLogin(email, password);
  } catch (err) {
    return alertModal.handleError(err);
  }

  // 로그인 api 요청
  try {
    const data = { email, password };
    const result = await Api.post('/api/user/login', data);
    const token = result.token;

    // 로그인 성공, 토큰을 세션 스토리지에 저장
    // 물론 다른 스토리지여도 됨
    localStorage.setItem('token', token);
    successModal.activate(`정상적으로 로그인되었습니다.`, afterLogin);

    // 로그인 성공
    // 기본 페이지로 이동
    //window.location.href = '/';
  } catch (err) {
    console.error(err.stack);
    alertModal.handleError(`${err.message}`);
  }
}
const afterLogin = () => {
  window.location.href = '/';
};
