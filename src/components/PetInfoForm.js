import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addPet } from '../database/petService';

const PetInfoForm = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    addPet(name, species, breed, birthDate, notes);
    console.log('Evcil hayvan bilgisi kaydedildi.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ad</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Tür</Text>
      <TextInput style={styles.input} value={species} onChangeText={setSpecies} />

      <Text style={styles.label}>Cins</Text>
      <TextInput style={styles.input} value={breed} onChangeText={setBreed} />

      <Text style={styles.label}>Doğum Tarihi</Text>
      <TextInput style={styles.input} value={birthDate} onChangeText={setBirthDate} />

      <Text style={styles.label}>Notlar</Text>
      <TextInput
        style={styles.input}
        value={notes}
        onChangeText={setNotes}
        multiline={true}
      />

      <Button title="Kaydet" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginBottom: 5, fontSize: 16, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default PetInfoForm;
