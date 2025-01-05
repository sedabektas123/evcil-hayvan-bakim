import React, { useEffect } from 'react';
import { createTables } from './src/database/db';

const App = () => {
  useEffect(() => {
    // Tablo oluşturma
    createTables();
  }, []);

  return 
    // Uygulama arayüzünüz burada olacak;
};

export default App;
