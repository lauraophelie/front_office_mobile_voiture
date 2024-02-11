import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.voiture.cloud',
  appName: 'occazz',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
