// navbar 로그인 부분
import headerNavbar from '../components/headerNavbar.js';
import insertCategoryList from '../components/navCategoryList.js';

const headerNavbar1 = document.querySelector('#headerNavbar');
const container = document.querySelector('#container');

addAllElements();
insertCategoryList();
insertNoticeDetail();

// navbar 로그인 상태에 따른 로그인 메뉴 삽입
async function addAllElements() {
  headerNavbar1.innerHTML = await headerNavbar.render();
  await headerNavbar.componentDidMount();
}

// 공지사항 데이터를 html에 삽입
async function insertNoticeDetail() {
  // url에서 id에 해당하는 부분만 가져와서 id 변수에 할당
  const id = location.pathname.replace(/\/detail\/([\d\w]*)\/?/g, '$1');

  // '/api/notice/${id}' 에서 상품의 상세 내용을 json으로 받아옴
  const res = await fetch(`/api/notice/${id}`);
  const notice = await res.json();
  console.log(notice);
  
  const title = notice.title;
  const timestamps = notice.timestamps;
  const content = notice.content;
  const author = notice.author;

  // 공지사항 title, timestamps, author를 각 자리에 할당
  container.insertAdjacentHTML(
    'beforeend',
    ` 
      <td class="title">${title}</td>
      <td class="author">${author}</td>
      <td class="content">${content}</td>
      <td class="date">${timestamps}</td>
      `
  );
}