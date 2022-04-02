 /* global google */
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import './HeatMap.css'

class HeatMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.28275,
      lng: -123.12078
    },
    zoom: 13,
    
  }


  constructor(props) {
  	super(props)
  	this.state = {
      heatmapVisible: true,
      bikelaneVisible: false,
      layerTypesData: [],
      heatmapGradient: [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)",
      ],
  		heatmapPoints: [
		  	{label: "hi", lat: 49.274249, lng: -123.098481, weight: 40},
        { label: "hi", lat: 49.273103, lng: -123.069892, weight: 5 },
        { label: "hi",lat: 49.275679, lng: -123.116963, weight: 15 },
        { label: "hi", lat: 49.287528, lng: -123.142139, weight: 31 }
      ],
      beststations: [
		  	{lat: 49.285908, lng: -123.1271193, weight: 590},
        {lat: 49.282224, lng: -123.132778, weight: 587},
        {lat: 49.283343, lng: -123.1310991, weight: 500},
        {lat: 49.277213, lng: -123.1296251, weight: 490},
        {lat: 49.2977694, lng: -123.1314775, weight: 482},
        {lat: 49.2986569, lng: -123.121176, weight: 481},
        {lat: 49.282214, lng: -123.114101, weight: 439},
				],
      tabvalue: "summary",
      year: 0,
      month: 0,
      day: 0
  	}
  }

  onMapClick({x, y, lat, lng, event}) {
    if (!this.state.heatmapVisible) {
      return
    }
    
  	this.setState({
  		heatmapPoints: [ ...this.state.heatmapPoints, {lat, lng}]
  	})
    if (this._googleMap !== undefined) {      
      const point = new google.maps.LatLng(lat, lng)
      this._googleMap.heatmap.data.push(point)
    }
  }

  toggleHeatMap = () => {    
    this.setState({
      heatmapVisible: !this.state.heatmapVisible
    }, () => {
      if (this._googleMap !== undefined) {
        this._googleMap.heatmap.setMap(this.state.heatmapVisible ? this._googleMap.map_ : null)
      }      
    })
  }


  showbusyRoutes = () => {    
    console.log("busy routes")
    this._googleMap.heatmap.setMap(this.state.beststations)
  }

  changeSummary = () => {    
    this._googleMap.heatmap.setMap(this.state.heatmapPoints)
  }


  valuetext(value) {
    console.log(value)
    return `${value}°C`;
  }

  changedata = () => {
    this.setState({
     heatmapPoints: [
		  	{lat: 49.285908, lng: -123.1271193, weight: 590},
        {lat: 49.282224, lng: -123.132778, weight: 587},
        {lat: 49.283343, lng: -123.1310991, weight: 500},
        {lat: 49.277213, lng: -123.1296251, weight: 490},
        {lat: 49.2977694, lng: -123.1314775, weight: 482},
        {lat: 49.2986569, lng: -123.121176, weight: 481},
        {lat: 49.282214, lng: -123.114101, weight: 439},
				]
    })
  }

  showbikelane = () => {
     this.setState({
      bikelaneVisible: !this.state.bikelaneVisible
     }, () => {
       if (this.state.bikelaneVisible) {
         this.setState({ layerTypesData: ['BicyclingLayer', 'TransitLayer'] })
       } else {
         this.setState({ layerTypesData: [] })
       }
    })
  }


  handleTabsChange = (event, newValue) => { 
    console.log(newValue)
    this.setState({ tabvalue: newValue })
    console.log(this.state.tabvalue)
  }


  render() {

    const apiKey = { key: 'AIzaSyBM16uF-l222DATylNPdVwgWFdoQKNbfys' }
    const layerTypesData = this.state.layerTypesData
  	const heatMapData = {
  		positions: this.state.heatmapPoints,
      options: {
        radius: 10,
        opacity: 0.6,
        gradient: [
          "rgba(0, 255, 255, 0)",
          "rgba(0, 255, 255, 1)",
          "rgba(0, 191, 255, 1)",
          "rgba(0, 127, 255, 1)",
          "rgba(0, 63, 255, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(0, 0, 223, 1)",
          "rgba(0, 0, 191, 1)",
          "rgba(0, 0, 159, 1)",
          "rgba(0, 0, 127, 1)",
          "rgba(63, 0, 91, 1)",
          "rgba(127, 0, 63, 1)",
          "rgba(191, 0, 31, 1)",
          "rgba(255, 0, 0, 1)",
        ],
      }
  	}

  	console.log(this.state)

    return (
      <div className="googlemap" style={{ height: '100%', width: '100%' }}>
        {/* <button className="toggleButton" onClick={this.toggleHeatMap.bind(this)}>Toggle heatmap</button>
        <button className="changeData" onClick={this.changedata}>change station</button> */}
        <button className="changeData" onClick={this.showbikelane}>show traffic and bike lane</button>
        <Tabs
          value={this.state.tabvalue}
          onChange={this.handleTabsChange.bind(this)}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{ width: '30%', padding: "10px", margin: "auto"}}
        >
          <Tab value="summary" label="Summary" />
          <Tab value="two" label="Busy Routues"/>
          <Tab value="three" label="Item Three" />
        </Tabs>

        {/* <Box sx={{ width: '20%', height:20, padding: "10px", margin: "auto" }}>
          <Slider size="small" defaultValue={1} step={1} max={12} aria-label="Small" getAriaValueText={this.valuetext} valueLabelDisplay="on" />  
        </Box> */}

        <Box sx={{ width: '70%', height:'60%', margin: "auto"}}>
          <GoogleMapReact
            ref={(el) => this._googleMap = el}
            bootstrapURLKeys={apiKey}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            layerTypes={this.state.layerTypesData}
            heatmapLibrary={true}
            heatmap={heatMapData}
            onClick={this.onMapClick.bind(this)}
          >
          </GoogleMapReact> 
        </Box>

      </div>
    )
  }
}

export default HeatMap