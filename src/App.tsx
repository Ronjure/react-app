import './App.css';
import React from 'react';
import { Card } from 'antd';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './routes/errorPage';
import RouterCard from './pages/routerCard'
import First from './pages/router/first';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterCard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/first",
        element: <First />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <h1>
        React 及 react-router, redux 学习日记。
      </h1>

      <div className='card-wrapper'>
        <Card title="路由跳转示例">
          <RouterProvider router={router} />
        </Card>
        <Card title="组件间通信">
          <div>卡片内容</div>
        </Card>
      </div>
    </div>
  );
}

export default App;
