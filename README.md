# Evcil Hayvan Uygulaması (PetCare)

Bu proje, evcil hayvanların bakımını kolaylaştırmak ve sahiplerine yardımcı olmak amacıyla geliştirilmiştir. Uygulama, evcil hayvanların bilgilerini saklama, aşı takvimlerini yönetme, veteriner ziyaretlerini planlama ve daha fazlasını sağlar.

## Özellikler

### 1. Temel Veri Saklama (Storage)
- Evcil hayvan adı, türü, cinsi, doğum tarihi ve notlar gibi bilgiler **Shared Preferences** veya **Proto Data Store** ile saklanır.
- Kullanıcı ayarları (tema, dil tercihleri vb.) de burada tutulur.

### 2. Yerel Veritabanı (Room Database)
- **Room** kullanılarak hayvan bilgileri, aşı takvimi ve veteriner ziyaretleri kaydedilir.
- Veritabanı yapısı:
  - **Hayvanlar Tablosu**: Ad, tür, doğum tarihi, notlar.
  - **Aşı Takvimi Tablosu**: Aşı adı, tarihi, tekrar tarihi.
  - **Randevu Tablosu**: Veteriner ziyaret bilgileri.

### 3. RESTful API Entegrasyonu
- Güncel veteriner klinik bilgileri ve hayvan sağlığı ipuçları bir API üzerinden alınır.
- CRUD işlemleri desteklenir.

### 4. Modern Kullanıcı Arayüzü (UI)
- **Jetpack Compose** ile kullanıcı dostu bir arayüz tasarlandı.
- Takvim, liste ve kart görünümü bileşenleri mevcut.

### 5. Bildirimler
- **WorkManager** ile aşı ve randevu hatırlatmaları için bildirimler gönderilir.

### 6. Sensör Entegrasyonu
- Hareket sensörü ile evcil hayvanın günlük aktivite takibi yapılabilir.
- GPS ile konum tabanlı veteriner önerileri sunulur.

### 7. Bulut Hizmetleri
- **Google AI** kullanılarak hayvanın fotoğrafı analiz edilir ve tür/cins tahmini yapılır.

## Gereksinimler
- Node.js (v18.20.5 ve üzeri)
- React Native CLI
- Android Studio (Android için)
- Xcode (iOS için)

## Kurulum

1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/kullanici_adi/petcare-app.git
   cd petcare-app
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Android için projeyi çalıştırın:**
   ```bash
   npx react-native run-android
   ```

4. **iOS için projeyi çalıştırın:**
   ```bash
   cd ios
   pod install
   cd ..
   npx react-native run-ios
   ```

## Proje Yapısı
```
PetCareApp
├── src
│   ├── components
│   │   ├── PetInfoForm.js
│   │   └── ...
│   ├── screens
│   │   ├── HomeScreen.js
│   │   ├── PetInfoScreen.js
│   │   └── ...
│   ├── services
│   │   ├── api.js
│   │   ├── database.js
│   │   └── notifications.js
│   └── ...
├── android
├── ios
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Katkıda Bulunma
1. Depoyu forklayın.
2. Yeni bir özellik dalı oluşturun: `git checkout -b yeni-ozellik`
3. Değişikliklerinizi yapın ve commitleyin: `git commit -m "Yeni özellik eklendi"`
4. Dalınızı push edin: `git push origin yeni-ozellik`
5. Bir pull request oluşturun.
