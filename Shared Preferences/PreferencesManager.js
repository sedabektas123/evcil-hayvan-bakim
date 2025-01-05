import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`${key} başarıyla kaydedildi.`);
  } catch (error) {
    console.error('Veri kaydedilirken bir hata oluştu:', error);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value || null;
  } catch (error) {
    console.error('Veri alınırken bir hata oluştu:', error);
    return null;
  }
};
