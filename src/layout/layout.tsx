import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Menus from "./menus/menus";

const { Header, Sider, Content, Footer } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '10vh',
  color: '#fff',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#587987',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '90vh',
  backgroundColor: '#e5e5e5',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '90vh',
  backgroundColor: '#c8d0d0',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: '10vh',
  backgroundColor: '#587987',
};

export function CustomLayout () {
  return (<Layout>
    <Header style={headerStyle}>
      React 基础学习项目。
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
