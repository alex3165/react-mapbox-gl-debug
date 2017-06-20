import React, { Component } from 'react';
import ReactMap from 'react-mapbox-gl';

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w";
const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMap({
  accessToken
});

const mapStyle = {
  height: '100vh',
  width: '100vw'
};

class App extends Component {
  render() {
    return (
      <Map
        style={style}
        containerStyle={mapStyle}
      />
    );
  }
}

export default App;
