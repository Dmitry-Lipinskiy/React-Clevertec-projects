import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppHeader } from '../appHeader';
import { ComicsPage } from '../pages/comicsPage';
import { MainPage } from '../pages/mainPage';

export const App = () => (
  <BrowserRouter>
    <div className='app'>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/comics' element={<ComicsPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

