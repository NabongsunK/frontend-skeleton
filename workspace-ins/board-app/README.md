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

## 컨벤션

### 코드 컨벤션
* 가독성이 좋고 유지보수가 쉬운 코드를 작성하기 위한 코딩 스타일 규약
* 개발자간 서로 다른 코딩 스타일 예시

```
if(a==100) return true;

if(a == 100) {
  return true;
}

const App = function(){
  return (
    <h1>Hello</h1>
  );
};

const App = () => <h1>Hello</h1>;
```

### 깃 커밋 메세지 컨벤션
* 커밋 메세지의 일관성을 위해 작성

#### Udacity Git Commit Message Style Guide
* 메세지 구조

```
type: Subject

body

footer
```

* type의 유형
  - feat: 새로운 기능
  - fix: 버그 수정
  - docs: 문서 변경 사항(readme.md, json 파일 등)
  - style: 코드 포맷 변경, 세미콜론 수정 등. 기능 변경 없음
  - refactor: 코드 리팩토링
  - test: 테스트 코드. 기능 변경 없음
  - chore: 빌드 작업 수정, 패키지 매니저 수정 등. 기능 변경 없음
* subject(제목) 규칙
  - 영문자 기준 50자 이내, 대문자로 시작, 마침표로 끝나지 않음
  - 과거 시제를 사용하지 않고 간결하게 기술. "수정했음", "수정함" 대신 "수정"
* body(본문) 규칙
  - 일반적으로 제목만 있으면 되지만 추가 설명이 필요할때 선택적으로 기입
  - 어떻게 변경되었는지가(어떻게는 코드를 보면 되므로) 아니라 무엇을, 왜 변경하는지를 설명
* footer(꼬리말)
  - 이슈 ID 등의 부가 정보 제공시 선택적으로 기입

* 사용 예시
```
refactor: 사용자 인증을 세션에서 토큰 방식으로 변경

추후 이중화 등의 확장을 용이하게 하기 위해 변경

Resolves: #123
See also: #456, #789
```
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
* src/pages/home/index.js
  - 템플릿의 index.html body 부분을 추가
#### JSX 문법으로 수정
* src/pages/home/index.js 파일 수정
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
* App.js에 라우팅 추가
```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
```

### 컴포넌트 설계
#### UI를 계층구조로 나누기
* 컴포넌트를 계층 구조로 설계
* 단일 책임 원칙: 컴포넌트는 한가지 작업만 수행하도록 구성
  - 컴포넌트가 많은 작업을 수행하다면 더 작은 하위 컴포넌트로 분할
#### 정적 버전으로 개발
* state는 사용하지 않고 props를 이용해서 하위 컴포넌트에 데이터 전달
* 하향식
  - 상위 컴포넌트 먼저 구축하고 하위 컴포넌트 구축
  - 소규모 프로젝트에 적합
* 상향식
  - 하위 컴포넌트 먼저 구축하고 상위 컴포넌트 구축
  - 대규모 프로젝트에 적합

#### state 식별
* 시간이 지나도 변함 없이 유지되는가?
* props를 통해 부모로부터 전달되는가?
* 기존 state나 props 기반으로 계산할 수 있는 값인가?
* 그렇다면 state가 아님
* 나머지 값이 state일 수 있음

#### 상태 관리를 해야 하는 컴포넌트 식별
1. 해당 상태를 기반으로 렌더링하는 모든 컴포넌트 확인
2. 가장 가까운 공통 상위 컴포넌트 확인
3. 공통 상위 컴포넌트 또는 공통 상위 컴포넌트의 상위 컴포넌트에 상태 저장
4. 적합한 컴포넌트가 없다면 컨테이너 컴포넌트를 만들어서 상태 저장도 고려





