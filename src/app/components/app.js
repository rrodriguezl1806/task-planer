import React from 'react';
import { Layout } from 'antd';
import './app.css';
import Footer from './footer/footer';
import Header from './header/header';

const App = (props) => {
  return (
    <React.Fragment>
      <Layout>
        <Header></Header>
        <Footer></Footer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
