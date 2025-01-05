import PushNotification from 'react-native-push-notification';

const configureNotifications = () => {
  PushNotification.configure({
    onNotification: function (notification) {
      console.log('Bildirim alındı:', notification);
    },
    requestPermissions: true,
  });
};

export const scheduleNotification = (message, date) => {
  PushNotification.localNotificationSchedule({
    message,
    date, // Yeni bildirim zamanı
  });
};

export default configureNotifications;
