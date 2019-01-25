import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Entity  = styled.div`
  border: 2px solid rgba(20, 20, 20, 0.8);
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

const FlexBlock= styled.div`
  display: flex;
`

const toEntity = item => <Entity>{item}</Entity>

const RawResponseContainer = (props) => {
  if(!props.enitites) return null;
  console.log('props in rrc', props)


  return (

    <FlexContainer>
      {Object.keys(props.enitites).map((type) => {
        if(!props.enitites[type]) return null;
        return (
          <FlexBlock>
            <h2>{type}</h2>
            {props.enitites[type].map(toEntity)}
          </FlexBlock>
        )
      })}
    </FlexContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    enitites: {
      countries: state.ux.data.GPE,
      people: state.ux.data.PERSON,
      dates: state.ux.data.DATE,
      times: state.ux.data.TIME
    }
  }
}

export default connect(mapStateToProps)(RawResponseContainer);