import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: 'YOUR_GOOGLE_WEB_CLIENT_ID',
});

export const signInWithGoogle = async () => {
  try {
    const userInfo = await GoogleSignin.signIn();
    console.log('Kullanıcı Bilgisi:', userInfo);
    return userInfo;
  } catch (error) {
    console.error('Google ile giriş hatası:', error);
  }
};

// Örnek kullanım:
signInWithGoogle();
