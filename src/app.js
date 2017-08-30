import React, { Component } from "react";
import ReactMapboxGl, { Layer } from "react-mapbox-gl";
import 'bootstrap/dist/css/bootstrap.css';
import HeaderNavigation from './header.js';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


const containerStyle = {
  height: "70vh"
};


const Map = ReactMapboxGl({
  accessToken:'pk.eyJ1IjoibWFkZWxlaW5lam9oYW5zb24iLCJhIjoiY2lzczduYzJ4MDZrODJucGh0Mm1xbmVxNCJ9.i7q4iT8FFgh_y5v4we5UhQ'
});

class MapWindow extends Component {

    render () {
        return (
            <Map
                style='mapbox://styles/mapbox/light-v9'
                containerStyle={containerStyle} 
                center={[151.2056, -33.8572]}
                zoom={[15]}
                pitch={45}
                bearing={-17.6}
            >
            
                <Layer
                  id="3d-buildings"
                  sourceId="composite"
                  layerOptions={{
                    'source-layer': 'building',
                    'filter': ['==', 'extrude', 'true'],
                    'type': 'fill-extrusion',
                    'minzoom': 15
                  }}
                  paint={{
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': {
                        'type': 'identity',
                        'property': 'height'
                    },
                    'fill-extrusion-base': {
                        'type': 'identity',
                        'property': 'min_height'
                    },
                    'fill-extrusion-opacity': .6
                  }}/>

            </Map>
        );
    }
}

function App() {
  return (
    <div style={{height:'100%'}}>
      <Row id='mapcontainer' className="show-grid">
        <Col md={5}> <HeaderNavigation/> 
          <MapWindow/> 
        </Col>
        <Col md={5}> <HeaderNavigation/> 
          <MapWindow/> 
        </Col>
        <Col md={2}> {'texxxxxxxxxxxt'} </Col>
      </Row>
      <Row id='controlcontainer'>
        <Col md={4}>
          Yiew
        </Col>
        <Col md={4}>
          Yiew
        </Col>        
      </Row>

    </div>
  );
}

export default App;