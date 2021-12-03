import React from 'react';
import Band from './Band.js';
const Bands = props => {
  const renderBands = () => {
    if (props.bands)
      return props.bands.map(band => <Band band={band} delete={props.delete}/>)
    else
      return <li>No Bands Yet</li>
  }

  
  return (
  <div>
    <ul>
      {renderBands()}
    </ul>
  </div>
)
}
export default Bands;