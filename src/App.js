import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import MyFooter from './components/common/footer';
import MyHeader from './components/common/header';
import Home from './components/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
   <Layout className="mainLayout">
     
     <Header>
       <MyHeader/>
     </Header>
     
     <Content>
       <Home />
     </Content>

     <Footer>
       <MyFooter />
     </Footer>

   </Layout>
  );
}

export default App;
