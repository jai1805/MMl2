import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DetailPage from './DetailPage';
import reportWebVitals from './reportWebVitals';
import MovieCard from './components/common/movieCard';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GraphPage from './GraphPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='' element={<App />} />
        <Route path='/detailPage/:movie_id/:genre' element={<DetailPage />} />
        <Route path='/movieCard' element={<MovieCard />} />
        <Route path='/graphs' element={ < GraphPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
