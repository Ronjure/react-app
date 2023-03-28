import React from "react";
import {
  Link, Route, Routes,
} from "react-router-dom";

import { Layout, Typography } from 'antd';

import First from "./router/first";

const { Sider, Content } = Layout


export default function RouterCard() {
  return (
    <div>
      <Sider>
        <Link to="/first">
          <Typography.Link>路由一：/first</Typography.Link>
        </Link>
      </Sider>
      <Content>
        <Routes>
          <Route Component={First}></Route>
        </Routes>
      </Content>
    </div>
  )
}
