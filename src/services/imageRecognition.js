import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const API_URL = 'https://vision.googleapis.com/v1/images:annotate';
const API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY'; // Buraya kendi API anahtarınızı yazın

export const pickImageAndAnalyze = async () => {
  try {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;

      const base64Image = await getBase64FromUri(imageUri);

      const response = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          requests: [
            {
              image: {content: base64Image},
              features: [{type: 'LABEL_DETECTION', maxResults: 5}],
            },
          ],
        },
      );

      return response.data.responses[0].labelAnnotations;
    }
  } catch (error) {
    console.error('Fotoğraf analizi hatası:', error);
    throw error;
  }
};

const getBase64FromUri = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
};
