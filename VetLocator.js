import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const VetLocator = () => {
  const initialRegion = {
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const vets = [
    { id: 1, latitude: 41.0102, longitude: 28.9762, name: 'Veteriner 1' },
    { id: 2, latitude: 41.0059, longitude: 28.9815, name: 'Veteriner 2' },
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {vets.map((vet) => (
          <Marker
            key={vet.id}
            coordinate={{ latitude: vet.latitude, longitude: vet.longitude }}
            title={vet.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default VetLocator;
