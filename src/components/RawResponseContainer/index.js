import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Person = styled.div`
  border-radius: 50%;
  background: rgba(30, 30, 250, 0.7);
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Country = styled.div`
  border: 2px solid rgba(20, 20, 20, 0.8);
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBlock= styled.div`
  display: flex;
`


const toPerson = (item) => <Person>{item}</Person>;
const toCountry = (item) => <Country>{item}</Country>;


const RawResponseContainer = (props) => {

  console.log('props in rrc', props)


  return (

    <>
      <FlexBlock>
        <h2>People</h2>{props.people && props.people.map(toPerson)}
      </FlexBlock>
      <FlexBlock>
        <h2>Countries</h2>{props.countries && props.countries.map(toCountry)}
      </FlexBlock>
      <FlexBlock>
        <h2>Dates</h2>{props.dates && props.dates.map(toCountry)}
      </FlexBlock>
      <FlexBlock>
        <h2>Times</h2>{props.times && props.times.map(toCountry)}
      </FlexBlock>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.ux.data.GPE,
    people: state.ux.data.PERSON,
    dates: state.ux.data.DATE,
    times: state.ux.data.TIME
  }
}

export default connect(mapStateToProps)(RawResponseContainer);