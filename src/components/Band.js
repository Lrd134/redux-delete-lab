import React from 'react';

const Band = props => {
  const deleteBand = () => {
    props.delete(props.band.id)
  }  
  return (<li key={props.band.id}>{props.band.name}<br></br><button onClick={deleteBand}>Delete {props.band.name}</button></li>) 
}
export default Band

