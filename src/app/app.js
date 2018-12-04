import React from 'react';
import { Layout } from 'antd';
import './app.sass';
import Footer from './components/footer/footer';
import Header from './components/header/header';

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
