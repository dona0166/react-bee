import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import ArnieList from './components/ArnieList'
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <ArnieList />
      </Layout>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: .2rem;
  }

  html {
    box-sizing: border-box;
  }
`

const Layout = styled.div`
  height: 100vh;
`



export default App;
