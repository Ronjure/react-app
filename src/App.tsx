import './App.css';
import React from 'react';
import { Card, Space } from 'antd';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './routes/errorPage';
import RouterCard from './pages/routerCard'
import FirstLevel from './pages/router/firstLevel';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/first",
    element: <FirstLevel />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <h1>
        React 及 react-router, redux 使用示例。
      </h1>

      <Space>
        <Card title="路由跳转示例">
          <RouterProvider router={router} />
        </Card>
        <Card title="组件间通信">
          <div>卡片内容</div>
        </Card>
      </Space>
    </div>
  );
}

export default App;
