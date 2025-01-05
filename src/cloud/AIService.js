import { GoogleCloudVision } from 'react-native-google-cloud-vision';

export const analyzePetImage = async (imagePath) => {
  try {
    const result = await GoogleCloudVision.analyze({
      apiKey: 'YOUR_GOOGLE_CLOUD_API_KEY',
      imageUri: imagePath,
      features: [{ type: 'LABEL_DETECTION', maxResults: 5 }],
    });

    console.log('Görüntü Analizi Sonuçları:', result);
    return result;
  } catch (error) {
    console.error('Görüntü analizi hatası:', error);
  }
};

// Örnek kullanım:
analyzePetImage('/path/to/image.jpg');
