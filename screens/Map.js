import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useState } from "react";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const region = {
    latitude: 33.69,
    longitude: 73.121,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationhandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    console.log(lat, lng);
    setSelectedLocation({ latitude: lat, longitude: lng });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationhandler}
    >
      {selectedLocation.latitude && selectedLocation.longitude && (
        <Marker coordinate={selectedLocation} />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
