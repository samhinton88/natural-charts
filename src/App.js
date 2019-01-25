import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import RawResponseContainer from './/components/RawResponseContainer';
import logo from './logo.svg';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;



class App extends Component {
  render() {
    return (
      <Container className="App">
        <SearchBar />
        <RawResponseContainer />
        <Table />
      </Container>
    );
  }
}

export default App;
