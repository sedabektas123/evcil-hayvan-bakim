import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getData } from '../PreferencesManager';

const PetInfoScreen = () => {
  const [petName, setPetName] = useState('');

  useEffect(() => {
    const loadPetName = async () => {
      const name = await getData('petName');
      setPetName(name || 'Kayıtlı değil');
    };

    loadPetName();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Evcil Hayvan Adı:</Text>
      <Text style={styles.value}>{petName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default PetInfoScreen;
