import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

const PetActivityTracker = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 1000);

    const subscription = accelerometer.subscribe(({ x, y, z }) => {
      setData({ x, y, z });
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <View>
      <Text>Hareket Verileri:</Text>
      <Text>X: {data.x}</Text>
      <Text>Y: {data.y}</Text>
      <Text>Z: {data.z}</Text>
    </View>
  );
};

export default PetActivityTracker;
