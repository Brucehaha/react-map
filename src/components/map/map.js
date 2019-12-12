import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import ReactDOMServer from "react-dom/server";
import Info from "./info";

class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myLatLng : {
        lat: -37.813629,
        lng: 144.963058
      },
      b_type:"",
      end_date:"",
      start_date:"",
      details:"",
      zoom:13
    }
  }

  static defaultProps = {
    center: {
      lat: -37.813629,
      lng: 144.963058
    },
    zoom: 11
  };
  
  componentDidMount(){
    if(this.props.match.params.id){
      let url='http://localhost:8000/share/'+this.props.match.params.id
      fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState(
          {
            myLatLng:{
              lat: data.location.coordinates[1],
              lng: data.location.coordinates[0]
              },
              b_type:data.b_type,
              end_date:data.end_date,
              start_date:data.start_date,
              details:data.details,
          });
        console.log(this.state.myLatLng)
      })
  
    }

  }


  renderMarkers(map, maps, position) {
    let myContent = <Info b_type={this.state.b_type} end_date={this.state.end_date} start_date={this.state.end_date} details={this.state.details} />;
    let infowindow = new maps.InfoWindow({
      content: ReactDOMServer.renderToString(myContent)
    });
    let marker = new maps.Marker({
      position: position,
      map,
      title: 'Hello World!',

    });
      marker.addListener('click', function() {
 
        infowindow.open(map, marker);
  })
  }


  render (){
  return (
     // Important! Always set the container height explicitly
     <div style={{ height: '100vh', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{ key: 'AIzaSyAtdOKKhJNvoNFVMIy20Upt7OLv1lHZJaI' }}
       onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps, this.state.myLatLng)}
       defaultCenter={this.props.center}
       center={this.state.myLatLng}
       yesIWantToUseGoogleMapApiInternals
       defaultZoom={this.state.zoom}
     >
     </GoogleMapReact>
   </div>
  );
}
}

export default SimpleMap;
