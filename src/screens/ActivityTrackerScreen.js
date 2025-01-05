import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Accelerometer} from 'react-native-sensors';

const ActivityTrackerScreen = () => {
  const [steps, setSteps] = useState(0);
  const [accelerometerData, setAccelerometerData] = useState({x: 0, y: 0, z: 0});

  useEffect(() => {
    const subscription = new Accelerometer({
      updateInterval: 100,
    }).subscribe(({x, y, z}) => {
      setAccelerometerData({x, y, z});
      if (Math.sqrt(x ** 2 + y ** 2 + z ** 2) > 1.2) {
        setSteps((prevSteps) => prevSteps + 1);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adım Sayacı</Text>
      <Text style={styles.stepCount}>{steps} adım</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  stepCount: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default ActivityTrackerScreen;
