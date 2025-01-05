import { Accelerometer } from 'expo-sensors';

let subscription;

export const startMotionTracking = (callback) => {
  subscription = Accelerometer.addListener((data) => {
    const { x, y, z } = data;
    console.log('Hareket Verileri:', x, y, z);
    callback({ x, y, z });
  });
  Accelerometer.setUpdateInterval(1000); // 1 saniyede bir güncelleme
};

export const stopMotionTracking = () => {
  if (subscription) {
    subscription.remove();
    subscription = null;
  }
};

// Örnek kullanım:
startMotionTracking((motion) => {
  console.log('Hareket:', motion);
});
