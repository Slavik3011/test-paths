import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  constructor() {
    super();

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { markers, draggable } = this.props;
    this.map = new window.google.maps.Map(this.mapRef.current, {
      zoom: 10,
      center: markers[0]
    });

    window.google.maps.event.addListener(this.map, 'click', e => {
      this.addMarker(e.latLng.lat(), e.latLng.lng())
    });

    this.directionsService = new window.google.maps.DirectionsService;
    this.directionsDisplay = new window.google.maps.DirectionsRenderer({
      draggable,
      map: this.map,
    });

    this.directionsDisplay.addListener('directions_changed', (e) => {
      this.computeTotalDistance(this.directionsDisplay.getDirections());
    });

    this.buildWay();
  }

  computeTotalDistance = (result) => {
    const { legs } = result.routes[0];
    const markers = [];
    let length = 0;

    markers.push({lat: legs[0].start_location.lat(), lng: legs[0].start_location.lng()})
    legs.forEach(leg => {
      markers.push({lat: leg.end_location.lat(), lng: leg.end_location.lng()});
      length += leg.distance.value;
    });

    length = length / 1000;

    this.setState({
      markers,
      length
    })
  };

  displayRoute = (origin, destination, waypoints, service, display) => {
    service.route({
      origin,  // Haight.
      destination,  // Ocean Beach.
      waypoints,
      travelMode: 'DRIVING',
      avoidTolls: true
    }, function(response, status) {
      if (status === 'OK') {
        display.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  };

  buildWay = () => {
    const { markers } = this.props;
    if (markers.length < 2) return;

    const waypoints = [];
    for (let i = 1; i < markers.length - 1; i++) {
      waypoints.push({
        location: markers[i]
      })
    }

    this.displayRoute(markers[0], markers[markers.length - 1], waypoints, this.directionsService,
      this.directionsDisplay);
  };

  chooseMarkerPlace = () => {
    this.mapRef.current.firstChild.firstChild.firstChild.style.cursor = 'pointer';
    this.setState({
      isAddingMarker: true
    })
  };

  addMarker = (lat, lng) => {
    const { markers, isAddingMarker } = this.state;

    if (!isAddingMarker) return;

    if (!markers.length) {
      this.marker = new window.google.maps.Marker({
        position: {lat, lng},
        map: this.map
      });
    }
    if (markers.length && this.marker) {
      this.marker.setMap(null);
      console.log('remove')
      this.marker = false;
    }
    this.setState({
      markers: [...markers, {lat, lng}],
      isAddingMarker: false
    }, () => {
      this.buildWay();
    });
    this.mapRef.current.firstChild.firstChild.firstChild.style.cursor = 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default';
  };

  render() {
    const { height } = this.props;
    return (
      <div style={{height, cursor: 'pointer'}} ref={this.mapRef}>
        
      </div>
    );
  }
}

Map.defaultProps = {
  height: '400px',
  draggable: false
};

Map.propTypes = {
  height: PropTypes.string,
  markers: PropTypes.array.isRequired,
  draggable: PropTypes.bool
};

export default Map;