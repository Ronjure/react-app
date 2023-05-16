import { Layout } from "antd";
import Link from "antd/es/typography/Link";
import { Outlet } from "react-router-dom";

import { ReactComponent as Github } from "../assets/github.svg";

import Menus from "./menus/menus";

const { Header, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  height: '10vh',
  color: '#000',
  backgroundColor: '#c8d0d0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '90vh',
  backgroundColor: '#f1f5f9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '90vh',
  backgroundColor: '#d5d6da',
};

export function CustomLayout () {
  return (<Layout>
    <Header style={headerStyle}>
      <h1>
        学习使用 React 的小项目。
      </h1>
      <Link href="https://github.com/Ronjure/react-app" target="_blank">
        <Github />
      </Link>
    </Header>
    <Layout>
      <Sider style={siderStyle}>
        <Menus />
      </Sider>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
    {/* <Footer style={footerStyle}>Footer</Footer> */}
  </Layout>)
}
