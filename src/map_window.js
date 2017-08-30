import React, { Component } from "react";
import ReactMapboxGl, { Layer } from "react-mapbox-gl";


const containerStyle = {
  height: "100vh",
  width: "80%"
};


class MapWindow extends Component {

    render () {
        return (
            <ReactMapboxGl
                style='mapbox://styles/mapbox/light-v9'
                accessToken='pk.eyJ1IjoibWFkZWxlaW5lam9oYW5zb24iLCJhIjoiY2lzczduYzJ4MDZrODJucGh0Mm1xbmVxNCJ9.i7q4iT8FFgh_y5v4we5UhQ'
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

            </ReactMapboxGl>
        );
    }
}

export default MapWindow;