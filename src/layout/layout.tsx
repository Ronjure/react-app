import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: '10vh',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#587987',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '80vh',
  lineHeight: '120px',
  backgroundColor: '#558f97',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '80vh',
  backgroundColor: '#4a8080',
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
      <Sider style={siderStyle}>Sider</Sider>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>)
}
