import { StrictMode, FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignInPage, SignUpPage } from './modules/Auth';
import RoutesConst from './modules/Common/Routes/RoutesConst';
import 'bootstrap/dist/css/bootstrap.min.css';

// ToDo: Take a look at routing methods in React Router (3 types)

export const App: FC = () => (
  <StrictMode>
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConst.DEFAULT} element={<SignInPage />} />
          <Route path={RoutesConst.SIGN_IN} element={<SignInPage />} />
          <Route path={RoutesConst.SIGN_UP} element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);

export default App;
