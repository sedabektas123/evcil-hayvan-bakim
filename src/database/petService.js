import db from './db';

// Pet eklemek
export const addPet = (name, species, breed, birthDate, notes) => {
  db.transaction((txn) => {
    txn.executeSql(
      `INSERT INTO Pets (name, species, breed, birthDate, notes) VALUES (?, ?, ?, ?, ?);`,
      [name, species, breed, birthDate, notes],
      () => console.log('Yeni evcil hayvan eklendi.'),
      (error) => console.error('Evcil hayvan eklenirken hata:', error)
    );
  });
};

// Tüm pet'leri getirmek
export const getAllPets = (callback) => {
  db.transaction((txn) => {
    txn.executeSql(
      `SELECT * FROM Pets;`,
      [],
      (_, results) => callback(results.rows.raw()),
      (error) => console.error('Evcil hayvanlar alınırken hata:', error)
    );
  });
};
