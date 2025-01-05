import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const PetLocationTracker = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => console.error('Konum alma hatası:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View>
      <Text>Evcil Hayvan Konumu:</Text>
      <Text>Enlem: {location.latitude}</Text>
      <Text>Boylam: {location.longitude}</Text>
    </View>
  );
};

export default PetLocationTracker;
