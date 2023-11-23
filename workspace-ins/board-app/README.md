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

## bootstrap template 다운로드
* https://bootstrapmade.com/sailor-free-bootstrap-theme
* 압축 해제 후 public 폴더에 복사
* 테스트
  - http://localhost:3000/Sailor

## 프로젝트 구조
* src/pages: 라우터에서 사용할 페이지
  - board: 게시판
  - home: 홈
  - user: 회원
* src/components: 여러 페이지에서 공통으로 사용할 컴포넌트
  - common
  - layout: 화면 전체 구조 정의(header, footer)
* src/redux

## UI를 React 컴포넌트로 변경
* public/index.html
  - 템플릿의 index.html 헤더 부분을 추가
* src/pages/home/index.js
  - 템플릿의 index.html body 부분을 추가

### JSX 문법으로 수정
* src/pages/home/index.js 파일 수정
* HTML 주석 제거
* 닫는 태그 추가
```
<br> -> <br />
<input> -> <input />
<img> -> <img />
```
* 속성 수정
```
class -> className
style="" -> style={{}}
```
* Link 컴포넌트 사용
```
"<a href" -> "<Link to"
</a> -> </Link>
```

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

## 컴포넌트 설계
### UI를 계층구조로 나누기
* 컴포넌트를 계층 구조로 설계
* 단일 책임 원칙: 컴포넌트는 한가지 작업만 수행하도록 구성
  - 컴포넌트가 많은 작업을 수행하다면 더 작은 하위 컴포넌트로 분할
### 정적 버전으로 개발
* state는 사용하지 않고 props를 이용해서 하위 컴포넌트에 데이터 전달
* 하향식
  - 상위 컴포넌트 먼저 구축하고 하위 컴포넌트 구축
  - 소규모 프로젝트에 적합
* 상향식
  - 하위 컴포넌트 먼저 구축하고 상위 컴포넌트 구축
  - 대규모 프로젝트에 적합

### state 식별
* 시간이 지나도 변함 없이 유지되는가?
* props를 통해 부모로부터 전달되는가?
* 기존 state나 props 기반으로 계산할 수 있는 값인가?
* 그렇다면 state가 아님
* 나머지 값이 state일 수 있음

### 상태 관리를 해야 하는 컴포넌트 식별
* 해당 상태를 기반으로 렌더링하는 모든 컴포넌트 확인
* 가장 가까운 공통 상위 컴포넌트 확인
* 공통 상위 컴포넌트 또는 공통 상위 컴포넌트의 상위 컴포넌트에 상태 저장
* 적합한 컴포넌트가 없다면 컨테이너 컴포넌트를 만들어서 상태 저장도 고려

## API 서버 통신 개발
### React Query(TanStack Query)
* 참고: https://tanstack.com/query
* React에서 Axios 같은 비동기 데이터 처리 작업을 손쉽게 사용할 수 있도록 지원
* API 서버로부터 받아온 데이터를 캐시하거나 폴링하는 작업을 자동으로 수행해서 서버의 상태를 클라이언트와 동기화
* Pagination, Infinite Scroll 같은 성능 최적화에 필요한 기능 제공

#### 설치
* React Query
```
npm i @tanstack/react-query
```
* 개발자 도구
  - 참고: https://tanstack.com/query/latest/docs/react/devtools
```
npm i @tanstack/react-query-devtools
```

#### 사용 설정
* App.js에 추가
```
......
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>    
      ......
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

#### useQuery
* 서버의 데이터를 조회할 때 사용(GET)

##### API
```
useQuery(queryKey, queryFn, options)
```

###### 매개변수
* queryKey
  - useQuery에 부여되는 고유한 Key 값(배열)
  - 동일한 queryKey로 요청한 useQuery는 동일한 요청으로 인식하며 캐시된 결과를 반환
  - 예시
  ```
  // 게시물 목록 조회
  useQuery(['boards'], queryFn)
  // 3번 게시물 상세 조회
  useQuery(['boards', '3'], queryFn)
  // 3번 게시물 댓글 목록 조회
  useQuery(['boards', '3', 'comments'], queryFn)
  ```
* queryFn
  - useQuery가 호출 되었을 때 실행될 함수이며 Promise를 반환해야 함
  - 함수 내부에서 axios.get() 같은 함수를 리턴하도록 작성
* options
  - 추가적인 설정값
  - staleTime: 조회한 데이터가 fresh에서 stale 상태로 변경되는데 걸리는 시간(default 0). fresh 상태에서는 동일한 요청에 대해 서버에 요청을 보내지 않고 캐시된 데이터를 반환
  - cacheTime: 데이터 조회후 cacheTime 동안에는 동일한 요청에 대해 일단 캐시된 데이터를 반환하고 서버에 데이터를 요청함. 서버에서 데이터가 도착하면 캐시된 데이터를 교체해서 컴포넌트를 리랜더링 함(default 5분)
  - refetchOnMount: 데이터가 stale 상태일 경우 마운트 시 마다 재요청을 할지 여부(default true). "always"로 지정할 경우 fresh 상태일때도 마운트 시 마다 재요청 함.
  - refetchOnWindowFocus: 브라우저 윈도우 포커스가 다른곳을 갔다가 돌아올 경우 재요청을 할 것인지 여부(default true). "always"로 지정하면 fresh 상태에서도 윈도우 포커싱이 될 때마다 재요청
  - enabled: false일 경우 쿼리를 실행하지 않음(default true)
  - retry: 실패한 쿼리를 재시도 할지 여부나 횟수(default 3)
    * true: 무한 재시도
    * false: 재시도 하지 않음
    * 정수: 재시도 횟수
  - suspense: suspense mode 활성화 여부(default false). suspense mode가 활성화 될 경우 React의 Suspense와 함께 사용 가능
  - onSuccess: 쿼리 성공 시 실행되는 함수. 매개변수로 서버의 응답값이 전달됨
  - onError: 쿼리 실패 시 실행되는 함수. 매개변수로 에러값이 전달됨
  - onSettled: 쿼리 성공, 실패와 상관없이 실행되는 함수. 매개변수는 data, error
  - 그밖의 옵션 참고: https://tanstack.com/query/latest/docs/react/reference/useQuery

###### 리턴값
* 다음의 속성을 가진 객체
  - isLoading: queryFn이 반환한 Promise가 pending 상태일때 true. queryFn이 axios를 사용한 함수라면 데이터 로딩중일때 true
  - error: queryFn이 반환한 Promise가 rejected 상태일때 에러 메세지. queryFn이 axios를 사용한 함수라면 에러가 발생했을때 에러 메세지
  - data: queryFn이 반환한 Promise가 fulfilled 상태일때 응답 데이터. queryFn이 axios를 사용한 함수라면 요청에 성공했을때 응답 데이터
  - 그밖의 속성 참고: https://tanstack.com/query/latest/docs/react/reference/ 

#### useMutation
* 서버의 데이터를 변경할 때 사용(POST, PUT, PATCH, DELETE)

##### API
```
useMutation(mutationFn, options)
```

###### 매개변수
* mutationFn
  - useMutation이 반환한 mutate 함수가 호출 되었을 때 실행될 함수이며 Promise를 반환해야 함
  - 함수 내부에서 axios.post() 같은 함수를 리턴하도록 작성
* options
  - cacheTime, retry: useQuery 설명 참조
  - onSuccess, onError, onSettled: useQuery 설명 참조. useMutation 뿐만 아니라 mutate 함수의 옵션으로도 사용 가능
  - 그밖의 옵션 참고: https://tanstack.com/query/latest/docs/react/reference/useMutation

###### 리턴값
* 다음의 속성을 가진 객체
  - mutate: useMutation은 React Hook이므로 컴포넌트 루트에서만 사용할수 있고 대부분의 경우 서버의 데이터를 변경하는 작업은(등록, 수정, 삭제) 사용자의 액션에 의해서 실행 되기 때문에 mutationFn이 호출되는 위치는 이벤트 핸들러 내부이므로 컴포넌트 루트가 아님. 이벤트 핸들러 내부에서 mutate를 호출하면 mutationFn이 호출되면서 실제 비동기 요청이 발생함
  - isLoading, error, data: useQuery 설명 참조
  - 그밖의 속성 참고: https://tanstack.com/query/latest/docs/react/reference/useMutation

###### invalidateQueries
* useQuery에서 사용된 queryKey를 지정해서 해당 쿼리를 무효화 시키고 데이터를 다시 가져옴
* 예시
```
const queryClient = useQueryClient();
// 새로운 댓글 작성시 3번 게시물의 댓글 목록 무효화 시키고 서버에서 다시 가져옴
queryClient.invalidateQueries(['boards', 3, 'comments'])
```
* 참고: https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries

### .env
* dotenv: DB 접속 정보, API KEY 등의 환경설정 정보를 코드에 직접 작성하지 않고 외부 파일로 만들어서 관리하기 위해 사용하는 nodejs 확장모듈
* 개발, 테스트, 운영 등의 여러 환경에서 각각 다른 값을 사용해야 하는 경우 각 환경 설정 정보를 가진 파일을 여러개 작성해서 적용 가능
* OS의 환경변수로 추가됨

#### 설치
```
npm i dotenv
```
* CRA로 프로젝트를 생성했을 경우 따로 설치할 필요 없음
#### 환경 설정 파일
* 프로젝트 루트에 .env 파일 생성
  - CRA로 프로젝트를 생성했을 경우 환경변수는 반드시 REACT_APP_ 접두사로 시작해야 함
  - Vite로 생성했을 경우 환경변수는 반드시 VITE_ 접두사로 시작해야 함
* 예시
```
REACT_APP_API_SERVER=http://localhost:33443/api
REACT_APP_KAKAO_MAP_API_KEY=4cd4396a562ece1a9a522481df8561c5
```
* .env 파일 수정 후 서버 재시작 필요
* 외부에 노출되면 안되는 중요한 정보를 담고 있을 경우 github의 공개 프로젝트라면 .gitignore에 추가해서 커밋되지 않도록 지정
```
.env
```

#### 컴포넌트에서 사용(*.js, *.jsx, *.ts, *.tsx)
* CRA 프로젝트는 process.env 변수를 통해서 사용
* Vite 프로젝트는 import.meta.env 변수를 통해서 사용
* 예시
```
const res = await axios.get(process.env.REACT_APP_API_SERVER + '/boards');
const res = await axios.get(`${process.env.REACT_APP_API_SERVER}/boards`);
```

#### HTML에서 사용(*.html)
* % 사이에 환경변수 지정
* 예시
```
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%REACT_APP_KAKAO_MAP_API_KEY%"></script>
```

#### 환경별 파일 분리
* CRA로 프로젝트를 생성했을 경우 react-scripts 실행 명령에 따라서 각 환경에 맞는 .env 파일이 추가적으로 적용됨
* 다른 .env 파일과 중복된 환경변수가 있을 경우 이전 환경변수 값을 재정의함

##### 모든 환경
* .env
  - 모든 환경에서 적용되는 기본 설정 파일

##### 개발 환경
* .env.development
  - .env 파일의 환경변수를 재정의
  - npm start로 개발 서버 구동시 적용

##### 운영 환경
* .env.production
  - .env 파일의 환경변수를 재정의
  - npm run build로 번들링 할때 적용

##### 테스트 환경
* .env.test
  - .env 파일의 환경변수를 재정의
  - npm test로 테스트 실행시 적용

##### 로컬 환경(개발자 PC)
* 개발서버, 테스트서버, 운영서버에는 만들 필요 없고 개발자 개인 PC에만 만들어서 적용시키는 파일
* 로컬에 DB나 API 서버등을 직접 구축해서 사용할 경우에 필요
* .env.local
  - 로컬에 개발, 운영 환경이 구분없이 구축되어 있거나 두 환경에서 공통으로 사용할 환경 변수 정의
  - .env, .env.development, .env.production 파일의 환경변수를 재정의
* .env.development.local
  - 로컬에 개발, 운영 환경을 분리해서 구축했을 경우 로컬 개발 환경에서 사용
  - .env, .env.development, .env.local 파일의 환경변수를 재정의
* .env.production.local
  - 로컬에 개발, 운영 환경을 분리해서 구축했을 경우 로컬 운영 환경에서 사용
  - .env, .env.production, .env.local 파일의 환경변수를 재정의
* .env.test.local
  - 로컬에 테스트 환경이 구축되어 있을 경우 사용
  - .env, .env.test 파일의 환경변수를 재정의

#### react-scripts 실행에 따른 .env 파일 적용 우선순위
* .env 파일이 적용되는 순서
* 좌측에서 우측으로 파일이 로딩되며 우측 파일에 좌측 파일과 같은 변수가 있으면 덮어씀

##### npm start
* .env -> .env.development -> .env.local -> .env.development.local

##### npm build
* .env -> .env.production -> .env.local -> .env.production.local

##### npm test
* .env -> .env.test -> .env.test.local

### JWT 인증
* 로그인 상태 유지에 구현
* JWT(JSON Web Token)
  - 사용자의 인증(authentication)과 인가(authorization)에 사용되는 JSON 포맷의 웹 토큰

### Axios Hook 작성
* API 서버 통신에 필요한 공통 작업 구현
  - Authorization 헤더 추가
  - AccessToken 만료시 RefreshToken으로 AccessToken 재발급 요청
* hooks/useCustomAxios.js

### Pagination
* 게시물 목록 조회에 구현

### 무한 스크롤
* 게시물 상세 조회 화면의 댓글 목록에 구현

### 전역 상태 관리
#### Recoil
* 로그인 상태 저장에 사용
* 페이지 새로고침시 상태 정보가 전부 초기화됨
#### recoil-persist
* recoil과 같이 사용할 경우 상태값을 localStorage나 sessionStorate에 저장하므로 페이지 새로고침에도 상태 정보가 유지됨
