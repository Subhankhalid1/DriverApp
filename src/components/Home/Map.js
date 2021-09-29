import React, { useState ,use} from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const MapComponent = () => {
    const [latitude, setlatitude] = useState(37.78825);
    const [longitude, setlongitude] = useState(-122.4324);
    const [latitudeDelta, setlatitudeDelta] = useState(0.0922);
    const [longitudeDelta, setlongitudeDelta] = useState(0.0421);

    const region = { latitude, longitude, latitudeDelta, longitudeDelta };

    const onRegionChange = (regionData) => {
        setlatitude(regionData.latitude);
        setlongitude(regionData.longitude);
        setlatitudeDelta(regionData.latitudeDelta);
        setlongitudeDelta(regionData.longitudeDelta);
    }

    return (
        <MapView
            style={{ borderWidth: 1, height: 450 }}
            region={region}
            onRegionChange={() => onRegionChange}
        >
            <Marker
                coordinate={{ latitude, longitude }}
            />
        </MapView>
    )

}

export default MapComponent;