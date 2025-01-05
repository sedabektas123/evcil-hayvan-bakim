import PushNotification from 'react-native-push-notification';

export const scheduleNotification = (title, message, date) => {
  PushNotification.localNotificationSchedule({
    title,
    message,
    date, // Bildirimin gönderileceği tarih
    allowWhileIdle: true,
  });
  console.log('Bildirim planlandı:', { title, message, date });
};

// Örnek kullanım: Bir tarih belirleyin ve çağırın
scheduleNotification(
  'Aşı Hatırlatma',
  'Evcil hayvanınızın aşı zamanı geldi!',
  new Date(Date.now() + 5 * 1000) // 5 saniye sonra
);
