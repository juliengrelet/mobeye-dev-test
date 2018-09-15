/* import component */
import React, { Component } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import { selectStore } from "../../actions/actions";
import { bindActionCreators } from "redux";
import MarkerPng from "../../assets/cursor.png";

/* key mapBox */
mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWVuZ3JlbGV0IiwiYSI6ImNqbHdmeGl2NjAybWIzdnA5bm82ZTF4Z2cifQ.7kCTlJ_T-5Htyy1z7avd6w';

class Map extends Component{

     componentDidMount(){
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/juliengrelet/cjlwgzz2x3plt2sqae4jhe1ye',
            center: [2.2770203, 48.8588377],
            zoom: 12
       });

       // add markers to map
       this.props.store.map(dataLocation => {
           dataLocation.features.map(marker => {
             const btnMarker = document.createElement('div');
             btnMarker.className = 'marker';
             btnMarker.style.backgroundImage = `url(${MarkerPng})`

             btnMarker.addEventListener('click', () => {
                this.props.selectMicromania(dataLocation);
             });

             // add marker to map
             new mapboxgl.Marker(btnMarker)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
         })
       });
     }

     render(){
          return(
            <section className="section_map">
                 <div id="map"></div>
            </section>
          )
     }
}

function mapStateToProps(state){
    return {
        store: state.store,
        selectMicromania: state.selectMicromania
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectMicromania: selectStore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);