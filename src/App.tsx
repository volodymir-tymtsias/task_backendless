import { Navigate, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import { TabPage } from './components/TabPage';


export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/">
          <Route index element={<TabPage />} />
          <Route path=":tabId" element={<TabPage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
