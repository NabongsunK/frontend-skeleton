import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/layout';
import Home from './pages/home';
import Board from './pages/board';
import BoardList from './pages/board/BoardList';
import BoardNew from './pages/board/BoardNew';
import BoardDetail from './pages/board/BoardDetail'
import NotFound from './pages/NotFound';

import { Provider } from 'react-redux';
import store from './redux/store';
import User from './pages/user';
import React, { Suspense, useEffect } from 'react';
import Login from './pages/user/Login';
import LoginRecoil from './pages/user/LoginRecoil';
import Signup from './pages/user/Signup';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loading from './components/common/Loading';

const queryClient = new QueryClient();
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil';


function App() {
  useEffect(() => {
    console.log('App 업데이트.');
  });

  return (
    <>
      <div id="globalModal"></div>
      <Provider store={store}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
              <Router>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    
                    <Route path="/boards" element={<Board />}>
                      <Route index element={<BoardList title="게시물 목록2" />} />
                      <Route path="new" element={<BoardNew title="글쓰기2" />} />
                      <Route
                        path=":id"
                        element={<BoardDetail title="게시물 상세 조회2" />}
                      />
                    </Route>
                    
                    <Route path="/users" element={<User />}>
                      <Route path="new" element={<Signup title="회원가입2" />} />
                      <Route path="login" element={<LoginRecoil title="로그인" />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Router>
            </Suspense>

            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </RecoilRoot>
      </Provider>
    </>
  );
}

export default App;
