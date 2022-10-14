import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, LogIn, Register, NotFound} from './pages/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/registration' element={<Register />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
