# 쇼핑몰 웹 서비스 ${ELICEBUCKS}

<div>

<img alt="로고" src="https://user-images.githubusercontent.com/73158122/173200239-730bb69b-fd55-46b8-888b-9bb3b839868b.png" width="300px">

</div>

<br />

## 1. 서비스 링크

### ~~http://kdt-sw2-seoul-team14.elicecoding.com/~~

<br />

## 2. 서비스 소개

#### 제품 등록, 장바구니 추가, 주문하기 등 쇼핑몰의 핵심 서비스를 구현하였습니다.
1. 회원가입, 로그인, 회원정보 수정 및 탈퇴 등 사용자 관련 CRUD
2. 카테고리 관련 CRUD, 제품 관련 CRUD, 주문 관련 CRUD
3. 장바구니 관련 기능을 프론트 단에서 수행
4. 관리자 페이지
5. 추가 개선 기능 (공지사항, 페이지네이션, 쇼핑몰 현황, 로딩)

<br />

### **페이지 별 화면**

|  |  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------|
| 메인 페이지 | |
| ![메인](https://user-images.githubusercontent.com/73158122/173199442-af986401-fc49-4200-906b-8b9470d31553.png) | |
| 로그인 페이지 | 회원가입 페이지 |
| ![로그인](https://user-images.githubusercontent.com/73158122/173199435-cb822cc0-cd50-4f17-9d19-2875daf3b395.png) |  ![회원가입](https://user-images.githubusercontent.com/73158122/173199433-09dd0549-affe-4084-b6cd-7646317af9a4.png) |
| 메뉴 (전 제품, 카테고리별 제품) 페이지 | 제품 상세 페이지 |
| ![메뉴](https://user-images.githubusercontent.com/73158122/173199449-fc8226ef-9261-4501-a273-450bec5b85de.png) | ![상세](https://user-images.githubusercontent.com/73158122/173199454-4574b17c-d9a6-4967-88df-2a119a17b6d8.png) |
| 장바구니 페이지 | 구매하기 페이지 |
| ![장바구니](https://user-images.githubusercontent.com/73158122/173199475-2af92688-640f-40b6-829f-122caee1e119.png) | ![구매](https://user-images.githubusercontent.com/73158122/173199478-76092ba7-c839-44ff-905b-cfad110f52a8.png) |
| 주문 목록 페이지 | 마이 페이지 |
| ![주문 목록](https://user-images.githubusercontent.com/73158122/173199468-3f1a491f-dd11-4bba-a7df-13129cdc6162.png) | ![마이페이지](https://user-images.githubusercontent.com/73158122/173199463-df150b73-adb7-41d2-b7cf-b422cc2929e3.png) |
| 공지사항 페이지 | 공지사항 상세 페이지 |
| ![공지사항](https://user-images.githubusercontent.com/73158122/173199484-a9bb1c69-9d10-40e3-a24e-975b3fa281c9.png) | ![공지사상 상세](https://user-images.githubusercontent.com/73158122/173199488-f531d217-0b3f-448a-9e04-ccae121a814d.png) |
| 관리자 페이지 - 쇼핑몰 현황 | 관리자 페이지 - 주문 목록 |
| ![관리자 - 대시보드](https://user-images.githubusercontent.com/73158122/173199498-3fb464cf-c85d-45b9-917a-69080ba7392f.png) | ![관리자 - 주문](https://user-images.githubusercontent.com/73158122/173199501-6b2be7b6-51cd-4cc7-9839-ca4c73743f9e.png) |
| 관리자 페이지 - 제품, 카테고리 | 관리자 페이지 - 공지사항 |
| ![관리자 - 제품](https://user-images.githubusercontent.com/73158122/173199503-d72772ee-2bfb-44b0-8221-d2d181be9259.png) | ![관리자 - 공지사항](https://user-images.githubusercontent.com/73158122/173199506-32871e30-9fd5-4c58-874d-3dfc2c2a2656.png) |



<br />


## 3. 기술 스택

![image](https://i.ibb.co/N34mXzy/image.png)

<br />

## 4. 인프라 구조

![image](https://i.ibb.co/9tGxmx0/image.png)<br />

<br />

## 5. 제작자

| 포지션 | 이름 | 담당 업무 |
| ------ | ------ | ------ |
| 프론트엔트 | 김미지 | 메인, 상품 목록, 카테고리, 상세, 공지사항, 페이지네이션 |
| 프론트엔트 | 김한얼 | 장바구니, 주문 |
| 프론트엔트 | 지의신 | 관리자 페이지, 유저&관리자의 정보관리 |
| 백엔트 | 김광두 | 제품, 공지사항 |
| 백엔트 | 이진서 | 유저, 주문 |

<br />

## 6. 실행 방법

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어를 수행

```bash
git clone <레포지토리 주소>
```


2. 클론한 디렉토리에서 backend 디렉토리로 들어가 아래 명령어를 통해 backend에서 필요한 module 설치

```bash
npm install
```


3. backend에서 필요한 `.env` 설정

```bash
MONGODB_URL=<몽고DB URL>
PORT=5000
JWT_SECERT_KEY=<랜덤 문자열>
```


4. express 앱을 실행

```bash
npm run start
```
