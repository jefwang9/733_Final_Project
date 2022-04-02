import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 49.28275, lng: -123.12078},
    zoom: 11,
    heatMapData: {
        positions: [
            { lat: 49.28275, lng:  -123.12078, weight: 3},
            { lat: 49.273103, lng: -123.069892, weight: 23 },
                ],
        options: {
            radius: 200,
                }
    }
      
  };

  render() {
    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: ["AIzaSyCLMzNjS8aSx6aAtJGGFejucGPTdeuxxy4"],
                libraries:['visualization']
            }}
            // apiKey={"AIzaSyCLMzNjS8aSx6aAtJGGFejucGPTdeuxxy4"}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            heatmapLibrary={true}
            heatmap={this.props.heatMapData }
      >
      </GoogleMapReact>
    );
  }
}
