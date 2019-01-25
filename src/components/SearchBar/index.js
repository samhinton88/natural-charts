import React, { Component } from 'react';
import styled from 'styled-components';
import { changeSearchBarValue } from '../../actions/ux-actions';
import { connect } from 'react-redux';

const SearchBarStyle = styled.input`
  height: 75px;
  width: 50vw;
  background: white;
  box-shadow: 2px 0 10px rgba(20, 20, 20, 0.2);
  font-size: 28px;
`;


const SearchBar = (props) => {
  console.log(props)
  return (
    <SearchBarStyle 
      value={props.value}
      onChange={(e) => props.changeSearchBarValue(e.target.value, props.wordCount)}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.ux.searchBarValue,
    wordCount: state.ux.wordCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchBarValue: (val, wordCount) => dispatch(changeSearchBarValue(val, wordCount)) 
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
