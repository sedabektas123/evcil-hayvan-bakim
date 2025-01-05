import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const VetLocatorScreen = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      (error) => console.error('Konum alınamadı:', error),
      {enableHighAccuracy: true},
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Konum Al" onPress={getLocation} />
      {location && (
        <Text style={styles.location}>
          Enlem: {location.latitude}, Boylam: {location.longitude}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default VetLocatorScreen;
