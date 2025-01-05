import React, { useEffect } from 'react';
import { BleManager } from 'react-native-ble-plx';

const BluetoothIntegration = () => {
  const manager = new BleManager();

  useEffect(() => {
    const subscription = manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        scanDevices();
        subscription.remove();
      }
    }, true);

    return () => manager.destroy();
  }, []);

  const scanDevices = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error('Bluetooth tarama hatası:', error);
        return;
      }

      console.log('Bulunan cihaz:', device.name);
    });
  };

  return null;
};

export default BluetoothIntegration;
