// navbar 로그인 부분
import headerNavbar from '/components/headerNavbar.js';
import insertCategoryList from '/components/navCategoryList.js';

const headerNavbar1 = document.querySelector('#headerNavbar');
const categoryContainer = document.querySelector('#categoryContainer');

addAllElements();
insertCategoryList();
insertProductCategory();

// navbar 로그인 상태에 따른 로그인 메뉴 삽입
async function addAllElements() {
  headerNavbar1.innerHTML = headerNavbar.render();
  headerNavbar.componentDidMount();
}

// 카테고리별 상품의 데이터를 html에 삽입
async function insertProductCategory() {
  // categoryId - 카테고리의 고유 id값 (네스프레소 / 네스카페 돌체구스토 / 프리미엄 파우더 커피의 _id)
  const categoryId = location.pathname.replace(
    /\/category\/([\d\w]*)\/?/g,
    '$1'
  );

  // '/api/product/category/${categoryId}' 에서 카테고리별 상품 목록을 json으로 받아옴
  const res = await fetch(`/api/product/category/${categoryId}`);
  const products = await res.json();

  // forEach로 돌면서 상품 id, image, name, price를 각 자리에 할당
  products.forEach((product) => {
    // id - 카테고리별 상품들의 id값
    const id = product._id;
    const image = product.image;
    const name = product.name;
    const price = product.price.toLocaleString();

    categoryContainer.insertAdjacentHTML(
      'beforeend',
      `
            <div id="prouduct-item">
                <div id="product-img">
                    <a href='/detail/${id}'><img src="${image}"></a>
                </div>
                <div id="product-des">
                    <p id="product-des-name">${name}</p>
                    <p id="product-des-price">${price}원</p>
                </div>
            </div> 
        `
    );
  });
}
