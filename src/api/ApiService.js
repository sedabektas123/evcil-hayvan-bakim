const BASE_URL = 'https://example.com/api';

// Veteriner bilgilerini al
export const fetchClinics = async () => {
  try {
    const response = await fetch(`${BASE_URL}/clinics`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Klinik bilgileri alınırken hata:', error);
    return [];
  }
};

// Yeni bir veteriner ekle
export const addClinic = async (clinic) => {
  try {
    const response = await fetch(`${BASE_URL}/clinics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clinic),
    });
    return await response.json();
  } catch (error) {
    console.error('Klinik eklenirken hata:', error);
  }
};
