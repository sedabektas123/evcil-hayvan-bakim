import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PetInfoScreen = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [specialCare, setSpecialCare] = useState('');

  const handleSave = () => {
    console.log({
      petName,
      petType,
      petBreed,
      birthDate,
      specialCare,
    });
    alert('Bilgiler kaydedildi!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Evcil Hayvan Adı</Text>
      <TextInput
        style={styles.input}
        placeholder="Adı giriniz"
        value={petName}
        onChangeText={setPetName}
      />
      <Text style={styles.label}>Türü</Text>
      <TextInput
        style={styles.input}
        placeholder="Türünü giriniz (Kedi, Köpek...)"
        value={petType}
        onChangeText={setPetType}
      />
      <Text style={styles.label}>Cinsi</Text>
      <TextInput
        style={styles.input}
        placeholder="Cinsini giriniz"
        value={petBreed}
        onChangeText={setPetBreed}
      />
      <Text style={styles.label}>Doğum Tarihi</Text>
      <TextInput
        style={styles.input}
        placeholder="Doğum tarihini giriniz"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <Text style={styles.label}>Özel Bakım Bilgileri</Text>
      <TextInput
        style={styles.input}
        placeholder="Özel bakım bilgilerini giriniz"
        value={specialCare}
        onChangeText={setSpecialCare}
      />
      <Button title="Kaydet" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});

export default PetInfoScreen;
