import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.gcappsite',
  appName: 'gcappsite',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
