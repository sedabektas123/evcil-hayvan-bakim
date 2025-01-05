import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'PetCareDB.db' });

export const createTables = () => {
  db.transaction((txn) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Pets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        species VARCHAR(50),
        breed VARCHAR(50),
        birthDate DATE,
        notes TEXT
      );`,
      [],
      () => console.log('Pets tablosu oluşturuldu.'),
      (error) => console.error('Pets tablosu oluşturulurken hata:', error)
    );
  });
};

export default db;
