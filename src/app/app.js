import React from 'react';
import { Layout } from 'antd';
// import './app.sass';
import './app.css';
import FooterContent from './components/footer/footer';
import HeaderContent from './components/header/header';
import SidebarContent from './components/siderbar/sidebar';
import Main from "./components/content";

function App() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SidebarContent></SidebarContent>
        <Layout>
          <HeaderContent></HeaderContent>
          <Main></Main>
          <FooterContent></FooterContent>
        </Layout>
      </Layout>
    );
  }

export default App;