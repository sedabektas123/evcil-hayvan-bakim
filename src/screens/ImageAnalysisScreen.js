import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {pickImageAndAnalyze} from '../services/imageRecognition';

const ImageAnalysisScreen = () => {
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const result = await pickImageAndAnalyze();
      setLabels(result);
    } catch (error) {
      console.error('Hata:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Fotoğraf Seç ve Analiz Et" onPress={handleAnalyze} />
      {loading && <Text>Yükleniyor...</Text>}
      <FlatList
        data={labels}
        keyExtractor={(item) => item.description}
        renderItem={({item}) => (
          <Text style={styles.label}>
            {item.description} - {Math.round(item.score * 100)}%
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default ImageAnalysisScreen;
