import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'antd';

// Components
import FooterContent from './components/footer/footer';
import HeaderContent from './components/header/header';
import SidebarContent from './components/siderbar/sidebar';
import Calendar from "./components/content/calendar/calendar";
import Home from './components/content/home/home';

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <SidebarContent></SidebarContent>
        <Layout>
          <HeaderContent></HeaderContent>
          <Layout.Content>
            <Layout style={{ padding: '2em'}}>
              <Route exact path="/" component = { Home } />
              <Route path="/calendar" component = { Calendar }/>
            </Layout>
          </Layout.Content>
          <FooterContent></FooterContent>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;