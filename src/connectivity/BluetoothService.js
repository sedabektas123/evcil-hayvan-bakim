import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

export const startScanning = () => {
  manager.startDeviceScan(null, null, (error, device) => {
    if (error) {
      console.error('Bluetooth tarama hatası:', error);
      return;
    }
    console.log('Bulunan cihaz:', device.name);
  });

  // 10 saniye sonra taramayı durdur
  setTimeout(() => {
    manager.stopDeviceScan();
    console.log('Bluetooth tarama durduruldu.');
  }, 10000);
};

// Örnek kullanım:
startScanning();
