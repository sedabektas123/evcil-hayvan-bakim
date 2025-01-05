import AsyncStorage from '@react-native-async-storage/async-storage';

// Tema tercihi kaydetmek
export const setThemePreference = async (theme) => {
  try {
    await AsyncStorage.setItem('theme', theme);
    console.log('Tema tercihi kaydedildi.');
  } catch (error) {
    console.error('Tema tercihi kaydedilirken hata:', error);
  }
};

// Tema tercihini almak
export const getThemePreference = async () => {
  try {
    const theme = await AsyncStorage.getItem('theme');
    return theme || 'light'; // Varsayılan tema
  } catch (error) {
    console.error('Tema tercihi alınırken hata:', error);
    return 'light';
  }
};
