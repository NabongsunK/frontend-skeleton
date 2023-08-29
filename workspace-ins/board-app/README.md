# Front-End React 개발
## 개발 환경 구축
### CRA 보일러 플레이트 생성
```
npx create-react-app board-app
```

### React 개발 서버 구동
```
cd board-app
npm start
```

### 테스트
* 자동으로 브라우저 탭이 열림
  - http://localhost:3000

## 개발
### bootstrap template 다운로드
* https://bootstrapmade.com/sailor-free-bootstrap-theme
* 압축 해제 후 public 폴더에 복사
* 테스트
  - http://localhost:3000/Sailor

### 폴더 생성
* src/pages: 라우터에서 사용할 페이지
  - board: 게시판
  - home: 홈
  - user: 회원
* src/components: 여러 페이지에서 공통으로 사용할 컴포넌트
  - common
  - layout: 화면 전체 구조 정의(header, footer)
* src/redux

### UI를 React 컴포넌트로 변경
* public/index.html
  - 템플릿의 index.html 헤더 부분을 추가
* src/App.js
  - 템플릿의 index.html body 부분을 추가
#### App.js를 JSX 문법으로 수정
* HTML 주석 제거
* 닫는 태그 추가
  - <br> -> <br />
  - <input> -> <input />
  - <img> -> <img />
* 속성 수정
  - class -> className
  - style="" -> style={{}}
* Link 컴포넌트 사용
  - "<a href" -> "<Link to"
  - </a> -> </Link>
#### react-router 설치
```
npm i react-router react-router-dom
```

### 컴포넌트 설계
#### UI를 계층구조로 나누기

#### 정적인 버전으로 개발




