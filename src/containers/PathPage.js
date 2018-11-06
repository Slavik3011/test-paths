import React, {Component} from 'react';
import Map from '../components/Map';
const markers = [{lat: 37.77, lng: -122.447}, {lat: 37.768, lng: -122.311}, {lat: 37.768, lng: -122.511}];

class PathPage extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Title</h2>
          <p className="distance">1.75 km</p>
        </header>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam architecto asperiores at cumque delectus doloribus ducimus error ex, explicabo fuga illo in incidunt iste iure maxime molestias nulla officiis placeat quod sequi sint sit temporibus tenetur ut vel. Aliquam beatae consequuntur cumque cupiditate deleniti dolores doloribus, eaque, excepturi labore modi nam neque non numquam possimus quisquam quos rem reprehenderit sed similique sit temporibus velit veritatis! Adipisci, assumenda error fugit libero nemo rem repellendus reprehenderit sequi similique veritatis voluptatibus voluptatum. Ab aliquam aut, blanditiis cumque deserunt dicta exercitationem fuga natus pariatur placeat quibusdam recusandae reiciendis, repellendus rerum sapiente sed!
        </p>
        <Map markers={markers} />
      </div>
    );
  }
}

export default PathPage;