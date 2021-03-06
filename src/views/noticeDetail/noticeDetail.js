// navbar 로그인 부분
import headerNavbar from '/components/headerNavbar.js';
import insertCategoryList from '/components/navCategoryList.js';

const headerNavbar1 = document.querySelector('#headerNavbar');
const noticeDetail = document.querySelector('.noticeDetail');
const noticeTitle = document.querySelector('.noticeTitle');

addAllElements();
insertCategoryList();
insertNoticeDetail();

// navbar 로그인 상태에 따른 로그인 메뉴 삽입
async function addAllElements() {
  headerNavbar1.innerHTML = headerNavbar.render();
  headerNavbar.componentDidMount();
}

// 공지사항 데이터를 html에 삽입
async function insertNoticeDetail() {
  // url에서 id에 해당하는 부분만 가져와서 id 변수에 할당
  const id = location.pathname.replace(/\/notice\/([\d\w]*)\/?/g, '$1');

  // '/api/notice/${id}' 에서 상품의 상세 내용을 json으로 받아옴
  const res = await fetch(`/api/notice/${id}`);
  const notice = await res.json();

  const title = notice.title;
  const time = Date(notice.timestamps).split(' ', 4).join(' ');
  const content = notice.content;
  const author = notice.author;

  noticeTitle.insertAdjacentHTML(
    'beforeend',
    ` 
      <th class="title">${title}</th>
      <th class="time">${time}</th>
    `
  );

  noticeDetail.insertAdjacentHTML(
    'beforeend',
    ` 
      <td class="content" colspan="2">
        ${content}
      </td>
    `
  );
}
