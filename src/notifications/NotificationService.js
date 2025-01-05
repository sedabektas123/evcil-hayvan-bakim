import PushNotification from 'react-native-push-notification';

// Bildirim Kanalı Oluşturma
export const createNotificationChannel = () => {
  PushNotification.createChannel(
    {
      channelId: 'pet-reminder', // Kanal ID'si
      channelName: 'Pet Reminders', // Kanal adı
      channelDescription: 'Evcil hayvan hatırlatmaları için bildirim kanalı',
      playSound: true,
      soundName: 'default',
      importance: 4,
      vibrate: true,
    },
    (created) => console.log(`Kanal oluşturuldu mu? ${created}`)
  );
};

// Bildirim Gönderme
export const scheduleNotification = (title, message, date) => {
  PushNotification.localNotificationSchedule({
    channelId: 'pet-reminder',
    title: title,
    message: message,
    date: date, // Gelecekteki bir tarih (Date objesi)
    allowWhileIdle: true,
  });
};

// Örnek Kullanım:
createNotificationChannel();
scheduleNotification(
  'Aşı Hatırlatması',
  'Köpeğinizin kuduz aşısı için randevusu yaklaşıyor.',
  new Date(Date.now() + 5 * 1000) // 5 saniye sonra
);
