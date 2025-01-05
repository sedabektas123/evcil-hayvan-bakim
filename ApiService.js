export const fetchVeterinaryTips = async () => {
    try {
      const response = await fetch('https://api.example.com/veterinary-tips');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API isteği başarısız:', error);
      return null;
    }
  };
  