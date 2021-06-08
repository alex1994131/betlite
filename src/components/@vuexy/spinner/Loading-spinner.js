import React from "react"
import Loader from 'react-loader-spinner'

class ComponentSpinner extends React.Component {
  render() {
    return (
      <div style={{ width:'100vw', height:'100vh', zIndex:10000, position:"absolute",background:'rgba(16,34,38,0.995)' }}>
        <Loader type="Oval" color="#1fae73" height={80} width={80} style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}/>	
      </div>
    )
  }
}

export default ComponentSpinner
