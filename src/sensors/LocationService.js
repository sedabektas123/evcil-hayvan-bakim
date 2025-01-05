import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation = (callback) => {
  Geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log('Konum:', latitude, longitude);
      callback({ latitude, longitude });
    },
    (error) => {
      console.error('Konum alınamadı:', error);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

// Örnek kullanım:
getCurrentLocation((location) => {
  console.log('Alınan Konum:', location);
});
