
import React from 'react';
import {geolocated} from 'react-geolocated';
import StGilesLocation from './StGilesLocation';

class Demo extends React.Component {
    render() {
    return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? <div>
                <table>
                    <tbody>
                        <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                        <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                        <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                    </tbody>
                    </table>
                    <h1>YOU ARE {StGilesLocation(this.props.coords.latitude, this.props.coords.longitude)}</h1>
                </div>
            : <div>Getting the location data&hellip; </div>;
    }
  }
   
  export default geolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    watchPosition: true,
    userDecisionTimeout: 5000,
  })(Demo);